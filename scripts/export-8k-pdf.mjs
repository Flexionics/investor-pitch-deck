import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const ROOT_DIR = process.cwd();

// Parse CLI arguments
const args = process.argv.slice(2);
function getArg(name, defaultValue) {
  const match = args.find((a) => a.startsWith(`--${name}=`));
  if (match) return match.split("=")[1];
  return defaultValue;
}

const TARGET_URL = getArg("url", "http://localhost:5180");
const SCALE_FACTOR = parseInt(getArg("scale", "4"), 10); // 4 = 8K (7680x4320), 2 = 4K (3840x2160)
const SLIDE_COUNT = parseInt(getArg("slides", "13"), 10);
const OUTPUT_DIR = path.join(ROOT_DIR, "dist", `exported-slides-${SCALE_FACTOR === 4 ? "8k" : "4k"}`);
const OUTPUT_PDF = path.join(
  ROOT_DIR,
  getArg("output", path.join("dist", `Flexionics-Koltrast-Reikna-Acquisition-${SCALE_FACTOR === 4 ? "8K" : "4K"}.pdf`))
);

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_VIEWPORT = { width: 1920, height: 1080 };
const PAGE_WIDTH_IN = "16";
const PAGE_HEIGHT_IN = "9";

async function waitForSlideReady(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle").catch(() => {});

  // Wait for all fonts and images to complete rendering
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  });

  // Brief stabilization delay for SVG filters, shadows, and layout engine
  await page.waitForTimeout(600);
}

async function captureSlides(page) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const slidePaths = [];
  const resolutionLabel = `${BASE_VIEWPORT.width * SCALE_FACTOR} × ${BASE_VIEWPORT.height * SCALE_FACTOR}`;

  console.log(`\n======================================================`);
  console.log(`  Capturing ${SLIDE_COUNT} Slides at ${resolutionLabel} (${SCALE_FACTOR === 4 ? "8K UHD Master" : "4K Master"})`);
  console.log(`======================================================\n`);

  for (let i = 1; i <= SLIDE_COUNT; i++) {
    const slideUrl = `${TARGET_URL}/?slide=${i}&clean=1`;
    process.stdout.write(`  [${String(i).padStart(2, "0")}/${SLIDE_COUNT}] Rendering Slide ${String(i).padStart(2, "0")}... `);
    const start = Date.now();

    await page.goto(slideUrl, { waitUntil: "domcontentloaded" });
    await waitForSlideReady(page);

    const slidePath = path.join(OUTPUT_DIR, `slide-${String(i).padStart(2, "0")}.png`);
    await page.screenshot({
      path: slidePath,
      type: "png",
      omitBackground: false,
    });

    slidePaths.push(slidePath);
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    const stats = await fs.stat(slidePath);
    const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`Done (${elapsed}s, ${sizeMb} MB)`);
  }

  return slidePaths;
}

async function buildPdfHtml(slidePaths) {
  const slideEntries = await Promise.all(
    slidePaths.map(async (slidePath) => {
      const data = await fs.readFile(slidePath);
      return `data:image/png;base64,${data.toString("base64")}`;
    })
  );

  const pagesHtml = slideEntries
    .map(
      (src) => `
      <section class="page">
        <img src="${src}" alt="" />
      </section>`
    )
    .join("\n");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Flexionics & Koltrast — Reikna Acquisition Master Deck</title>
    <style>
      @page {
        size: ${PAGE_WIDTH_IN}in ${PAGE_HEIGHT_IN}in;
        margin: 0;
      }
      *, *::before, *::after {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: #000;
        width: 100%;
        height: 100%;
      }
      .page {
        width: ${PAGE_WIDTH_IN}in;
        height: ${PAGE_HEIGHT_IN}in;
        page-break-after: always;
        break-after: page;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
      .page:last-child {
        page-break-after: auto;
        break-after: auto;
      }
      img {
        display: block;
        width: ${PAGE_WIDTH_IN}in;
        height: ${PAGE_HEIGHT_IN}in;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    ${pagesHtml}
  </body>
</html>`;
}

async function main() {
  const startTime = Date.now();
  await fs.mkdir(path.dirname(OUTPUT_PDF), { recursive: true });

  console.log(`\nLaunching Headless Chrome Engine...`);
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--force-device-scale-factor=" + SCALE_FACTOR,
      "--high-dpi-support=1",
    ],
  });

  try {
    const page = await browser.newPage({
      viewport: BASE_VIEWPORT,
      deviceScaleFactor: SCALE_FACTOR,
    });

    // 1. Capture all slides in master resolution
    const slidePaths = await captureSlides(page);

    // 2. Assemble Master Multi-Page PDF
    console.log(`\nAssembling Master Multi-Page PDF...`);
    const pdfPage = await browser.newPage();
    const pdfHtml = await buildPdfHtml(slidePaths);

    await pdfPage.setContent(pdfHtml, { waitUntil: "load" });
    await pdfPage.waitForLoadState("networkidle").catch(() => {});
    await pdfPage.waitForTimeout(1000);

    await pdfPage.pdf({
      path: OUTPUT_PDF,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    const pdfStats = await fs.stat(OUTPUT_PDF);
    const pdfSizeMb = (pdfStats.size / (1024 * 1024)).toFixed(2);
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log(`\n======================================================`);
    console.log(`  SUCCESS: Master 8K PDF Export Completed!`);
    console.log(`  - PDF File: ${OUTPUT_PDF} (${pdfSizeMb} MB)`);
    console.log(`  - PNG Slides: ${OUTPUT_DIR}/ (${SLIDE_COUNT} files)`);
    console.log(`  - Resolution: ${BASE_VIEWPORT.width * SCALE_FACTOR} × ${BASE_VIEWPORT.height * SCALE_FACTOR} per slide`);
    console.log(`  - Total Time: ${totalTime}s`);
    console.log(`======================================================\n`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("\nExport Failed:", err);
  process.exitCode = 1;
});
