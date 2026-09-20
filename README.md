# Flexionics ✕ Koltrast — Reikna AS Acquisition Pitch Deck

[![Version](https://img.shields.io/badge/version-1.1.0-purple.svg)](package.json)
[![Tech Stack](https://img.shields.io/badge/stack-React_19_|_TypeScript_|_Vite_|_TailwindCSS_v4-emerald.svg)](package.json)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](package.json)

An interactive, high-fidelity 16:9 investor presentation deck built for the proposed acquisition and expansion partnership between **Reikna AS** (Stord, Norway), **Koltrast Energy Solutions AB**, and **Flexionics Energy AG**.

---

## 📌 Executive Overview

This repository houses the interactive digital pitch deck and automated 8K/4K export engine for the strategic acquisition of:
1. **Physical Asset Layer (Koltrast)**: 14 MW operational hybrid data centre infrastructure across Boden (12 MW, SE1) and Utansjö (2 MW, SE2) with 18 modular containers housing 5,384 servers, plus a shovel-ready 30 MW Phase 1 expansion at Utansjö on the Swedish national grid.
2. **Software Intelligence Layer (Flexionics)**: 100% proprietary in-house intellectual property including Iceberg Edge on-site controller, Harbour cross-site fleet manager, Compass reporting, Northwatch monitoring, and Polaris deployment engine with active Svenska kraftnät grid pre-qualifications.

Together, these form an end-to-end sovereign European AI Neo-Cloud infrastructure with stacked digital computing and grid flexibility revenues.

---

## 📑 Slide Deck Structure (13 Master Slides)

| # | Slide ID | Title | Core Focus |
|---|---|---|---|
| **01** | `cover` | European Neo-Cloud Infrastructure | Executive title, transaction perimeter, 14 MW operating fleet, 30 MW expansion, 100% proprietary software IP |
| **02** | `buyer-thesis` | Why Flexionics + Koltrast for Reikna | Strategic bridge: immediate Swedish power, software operating system, turnkey engineering, downside protection |
| **03** | `flexionics-business` | The Flexionics Business: What We Do & How We Do It | 3 pillars (Hybrid DC, Flexibility Services, 100% In-House Software IP) + 4-stage operational pipeline |
| **04** | `macro-driver` | The AI Power Dilemma & Flexibility Solution | Eliminating grid queues, managing Nordic renewable price volatility, compute vs. chemical battery storage |
| **05** | `business-model` | Dual Revenue Architecture | 24/7 compute revenue baseline combined with high-margin grid ancillary revenue |
| **06** | `asset-portfolio` | Tangible & Intangible Asset Portfolio | Comparative matrix: 14 MW active, 18 containers, 5,384 servers vs. 100% in-house software IP & SvK prequalifications |
| **07** | `infrastructure-sites` | Operational Infrastructure Sites: Boden & Utansjö | Comparative site matrix: Boden (12 MW SE1), Utansjö (2 MW SE2), Utansjö Phase 1 (30 MW expansion SE2) |
| **08** | `track-record` | Operational Evidence & Audited Metrics | 14 MW registered fleet, 16,530 activations, 1.89B telemetry records, >$6M historical revenue |
| **09** | `software-platform` | The Neo-Cloud Operating System: 5 In-House Modules | Architecture details of Iceberg Edge, Harbour, Compass, Northwatch, and Polaris |
| **10** | `control-loop` | Autonomous Grid-Arbitrage & Dispatch Architecture | 10-second closed-loop control cycle, direct SFTP ingestion, and 0.5% active-power measurement |
| **11** | `unit-economics` | Unit Economics & Capital Efficiency | ~$450k/MW install cost, ~$310k/MW annual operating profit, ~18-month payback, >50% Phase 1 IRR |
| **12** | `team-joint` | Joint Leadership & Engineering Team | Balanced 5+5 operating unit: Flexionics leadership & core engineering + Koltrast Nordic site operations |
| **13** | `closing` | Strategic Acquisition Summary | 100% equity purchase terms, 14 MW dual-site perimeter + 100% software IP, immediate Reikna integration |

---

## 🚀 Key Features

- **Interactive Presentation Mode**: 16:9 responsive presentation view with fluid scaling across any display resolution.
- **Keyboard Navigation**:
  - `→` / `Space` / `Page Down`: Next slide
  - `←` / `Page Up`: Previous slide
  - `Home` / `End`: Jump to first / last slide
  - `F`: Toggle full-screen mode
- **Quick Jump Slide Drawer**: Slide index overlay for fast non-linear navigation during live investor meetings.
- **Master 8K / 4K PDF Export Pipeline**: Headless Chromium integration using Playwright to render pixel-perfect, ultra-high-resolution multi-page PDF documents.
- **Clean Capture Mode**: Direct slide URL queries (`/?slide=N&clean=1`) for headless capture without browser or navigation chrome.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Automation / Export**: [Playwright](https://playwright.dev/) + Headless Chrome

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Flexionics/investor-pitch-deck.git
cd investor-pitch-deck

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The presentation will be available locally at `http://localhost:5180`.

### Building for Production

```bash
npm run build
```

This compiles TypeScript and builds the optimized bundle into `dist/`.

---

## 🖨️ Exporting Presentation to PDF

Ensure the local dev server is running on port 5180 before running the export script:

```bash
# 1. In terminal 1, start the dev server:
npm run dev

# 2. In terminal 2, run the export script:
# 8K UHD Master Export (7680 × 4320 per slide):
npm run export:pdf:8k

# Or 4K Master Export (3840 × 2160 per slide):
npm run export:pdf:4k
```

Generated outputs will be saved in `dist/` as `Flexionics-Koltrast-Reikna-Acquisition-[8K|4K].pdf` alongside individual high-res PNG slide captures.

---

## 🏷️ Version History

- **`v1.1.0` (2026-09-20)**:
  - Aligned presentation with founder feedback on business overview, asset portfolio, and joint team.
  - Formatted brand header to `FLEXIONICS ✕ KOLTRAST` across all slides.
  - Grounded infrastructure data in verified operational metrics: exactly 14 MW live capacity (Boden 12 MW + Utansjö 2 MW) across 18 containers and 5,384 servers + 30 MW Utansjö shovel-ready expansion.
  - Purged unverified legacy stats (20 kV / 130 kV voltages, 679 hrs, 3-7 yrs queues, site MW splits) in favor of pure response times (FFR <1s, FCR-D 30s, mFRR 5-15m).
  - Consolidated team into a single balanced 5+5 grid (Flexionics leadership & engineering + Koltrast Nordic site operations).
  - Unified vertical layout and card spacing across Slide 3, Slide 6, and Slide 7 to eliminate dead vertical gaps.
- **`v1.0.0` (2026-09-20)**:
  - Initial production release of the Reikna Acquisition 13-slide pitch deck.
  - Complete data content, financial projections, and operational telemetry.
  - Headless Playwright 8K and 4K multi-page PDF rendering engine.
  - Responsive 16:9 presentation container and keyboard controls.

---

## 🔒 Confidentiality & Ownership

This repository and its contents are strictly confidential and proprietary to **Flexionics Energy AG** and **Koltrast Energy Solutions AB**. Prepared exclusively for strategic acquisition discussions with **Reikna AS**.
