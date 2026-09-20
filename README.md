# Flexionics & Koltrast — Reikna AS Acquisition Pitch Deck

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![Tech Stack](https://img.shields.io/badge/stack-React_19_|_TypeScript_|_Vite_|_TailwindCSS_v4-emerald.svg)](package.json)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](package.json)

An interactive, high-fidelity 16:9 investor presentation deck built for the proposed acquisition and expansion partnership between **Reikna AS** (Stord, Norway), **Koltrast Energy Solutions AB**, and **Flexionics Energy AG**.

---

## 📌 Executive Overview

This repository houses the interactive digital pitch deck and automated 8K/4K export engine for the strategic acquisition of:
1. **Physical Asset Layer (Koltrast)**: Utansjö industrial compute hub in Swedish bidding zone SE2 (2 MW operational + 30 MW approved Phase 1 expansion with 120 kV heavy substation interconnect).
2. **Software Intelligence Layer (Flexionics)**: Full IP transfer of the Flexionics Flexibility-as-a-Service (FaaS) platform, autonomous grid-arbitrage algorithms, and sub-second Svenska kraftnät ancillary service dispatch system.

Together, these form an end-to-end sovereign European AI Neo-Cloud infrastructure with negative effective energy costs via automated grid balancing.

---

## 📑 Slide Deck Structure (13 Master Slides)

| # | Slide ID | Title | Core Focus |
|---|---|---|---|
| **01** | `cover` | European Neo-Cloud Infrastructure | Executive title, transaction perimeter, and partner overview |
| **02** | `buyer-thesis` | Why Flexionics + Koltrast for Reikna | Strategic bridge between sovereign AI compute and Swedish grid assets |
| **03** | `deal-perimeter` | Ground Asset & Tech Platform | Clear division between Koltrast (Physical) & Flexionics (IP/Software) |
| **04** | `macro-driver` | The AI Power Dilemma & Flexibility Solution | Market analysis of Nordic power bottlenecks and virtual battery economics |
| **05** | `business-model` | Dual Revenue Architecture | 24/7 compute revenue baseline combined with high-margin grid ancillary revenue |
| **06** | `utansjo-asset` | Utansjö Industrial Compute Hub | 2 MW live + 30 MW expansion, 120 kV substation, water cooling, zoning approvals |
| **07** | `track-record` | Operational Evidence & Audited Metrics | 16,530 verified activations, 1.89B telemetry records, $6M+ historical revenue |
| **08** | `software-platform` | Flexionics Software IP (FaaS Stack) | Architecture diagram of ingestion, control engine, and dispatch integrations |
| **09** | `control-loop` | Autonomous Grid-Arbitrage & Dispatch | Sub-second telemetry loop, frequency response, and Spot/FCR-D/FFR automation |
| **10** | `unit-economics` | Financial Projections & EBITDA Ramp | 2026–2029 forecast, MW scaling, EBITDA margins, and IRR metrics |
| **11** | `team-koltrast` | Koltrast Physical Infrastructure Team | Key leadership, industrial construction, and Nordic grid execution track record |
| **12** | `team-flexionics` | Flexionics Grid-Tech & AI Leadership | Core team behind autonomous dispatch, high-voltage software, and energy modeling |
| **13** | `closing` | Strategic Alignment & Transaction Terms | Acquisition structure, working capital allocation, and next steps |

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

- **`v1.0.0` (2026-09-20)**:
  - Initial production release of the Reikna Acquisition 13-slide pitch deck.
  - Complete data content, financial projections, and operational telemetry.
  - Headless Playwright 8K and 4K multi-page PDF rendering engine.
  - Responsive 16:9 presentation container and keyboard controls.

---

## 🔒 Confidentiality & Ownership

This repository and its contents are strictly confidential and proprietary to **Flexionics Energy AG** and **Koltrast Energy Solutions AB**. Prepared exclusively for strategic acquisition discussions with **Reikna AS**.
