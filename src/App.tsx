import { useState, useEffect, useCallback, useRef } from "react";
import { slides } from "./data/reiknaDeckContent";
import { SlideRenderer } from "./components/SlideRenderer";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Printer,
  Grid,
  FileText,
  Layers,
  ArrowLeft,
} from "lucide-react";

export function App() {
  const params = new URLSearchParams(window.location.search);
  const isExportMode = params.get("export") === "1";
  const slideParam = params.get("slide");
  const isCleanCapture = params.get("clean") === "1";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [showSlideNav, setShowSlideNav] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPrintView, setIsPrintView] = useState(isExportMode);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (isPrintView) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentIndex(slides.length - 1);
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isPrintView]);

  // Responsive 16:9 viewport scaling
  useEffect(() => {
    if (isPrintView) return;

    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const scaleX = (windowWidth - 32) / 1920;
      const scaleY = (windowHeight - 80) / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, [isPrintView]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  /* ══════════════════════════════════════════════════════
     8K CLEAN CAPTURE MODE (FOR HEADLESS MASTER EXPORT)
     ══════════════════════════════════════════════════════ */
  if (isCleanCapture && slideParam) {
    const slideNum = parseInt(slideParam, 10);
    const targetIdx = Math.max(0, Math.min(slides.length - 1, isNaN(slideNum) ? 0 : slideNum - 1));
    const targetSlide = slides[targetIdx];

    return (
      <div className="w-[1920px] h-[1080px] overflow-hidden bg-white flex shrink-0">
        <SlideRenderer slide={targetSlide} totalSlides={slides.length} />
      </div>
    );
  }

  /* ══════════════════════════════════════════════════════
     PDF / PRINT VIEW (ALL 13 SLIDES CONSECUTIVE)
     ══════════════════════════════════════════════════════ */
  if (isPrintView) {
    return (
      <div className="bg-slate-900 min-h-screen text-slate-100 flex flex-col items-center py-6">
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print fixed top-4 z-50 bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700 shadow-2xl flex items-center gap-6 text-sm">
          <button
            onClick={() => setIsPrintView(false)}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Interactive Deck
          </button>
          <div className="h-4 w-[1px] bg-slate-600" />
          <span className="text-xs font-semibold text-slate-400">
            Print Preview Mode (12 Slides · 16:9 Vector PDF)
          </span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-1.5 rounded-full transition shadow cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>

        {/* All Slides Container */}
        <div className="w-[1920px] flex flex-col items-center gap-12 mt-16 print:mt-0 print:gap-0">
          {slides.map((s) => (
            <section key={s.id} className="print-page shadow-2xl print:shadow-none bg-white">
              <SlideRenderer slide={s} totalSlides={slides.length} />
            </section>
          ))}
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════════════════
     INTERACTIVE 16:9 PRESENTATION MODE
     ══════════════════════════════════════════════════════ */
  const currentSlide = slides[currentIndex];

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden relative flex items-center justify-center bg-[#020617] text-slate-100 select-none"
    >
      {/* 16:9 Auto-scaled Canvas */}
      <div
        style={{
          width: "1920px",
          height: "1080px",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="shadow-2xl transition-transform duration-75 flex shrink-0"
      >
        <SlideRenderer slide={currentSlide} totalSlides={slides.length} />
      </div>

      {/* Discreet Floating Controls at Bottom */}
      <div className="no-print absolute bottom-5 z-40 bg-slate-900/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700/80 shadow-2xl flex items-center gap-4 text-xs text-slate-300">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Slide Counter & Jump Menu Trigger */}
        <button
          onClick={() => setShowSlideNav(!showSlideNav)}
          className="flex items-center gap-2 hover:text-white px-2 py-1 rounded transition font-mono font-bold cursor-pointer"
          title="Click to jump to any slide"
        >
          <Grid className="w-4 h-4 text-orange-500" />
          <span>
            {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
          title="Next Slide (Right Arrow / Space)"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <div className="h-4 w-[1px] bg-slate-700" />

        {/* Print / PDF Mode Button */}
        <button
          onClick={() => setIsPrintView(true)}
          className="flex items-center gap-1.5 hover:text-orange-400 transition font-medium cursor-pointer"
          title="View all 12 slides formatted for 16:9 PDF export"
        >
          <FileText className="w-4 h-4" />
          <span>Export PDF</span>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full hover:bg-slate-800 transition cursor-pointer text-slate-400 hover:text-white"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Slide Navigation Modal / Drawer */}
      {showSlideNav && (
        <div
          className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-12 animate-in fade-in duration-200"
          onClick={() => setShowSlideNav(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-3xl p-8 max-w-5xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Reikna Acquisition Deck Index</h3>
                <p className="text-xs text-slate-400 mt-1">Select a slide to navigate immediately</p>
              </div>
              <button
                onClick={() => setShowSlideNav(false)}
                className="text-xs font-semibold uppercase bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full text-slate-300 cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowSlideNav(false);
                  }}
                  className={`p-4 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between h-28 ${
                    currentIndex === idx
                      ? "bg-orange-500/20 border-orange-500 text-white"
                      : "bg-slate-800/60 border-slate-700/70 hover:bg-slate-800 hover:border-slate-600 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      Slide {String(s.slideNumber).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">
                      {s.category.split(" ")[0]}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white line-clamp-2 leading-snug">
                    {s.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
