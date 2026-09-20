import React from "react";
import {
  SlideData,
  thesisPoints,
  flexionicsBusinessData,
  perimeterData,
  problemCards,
  businessModelStreams,
  assetPortfolioData,
  infrastructureSitesData,
  utansjoSiteData,
  trackRecordMetrics,
  softwareModules,
  controlLoopSteps,
  unitEconomicsData,
  koltrastTeam,
  flexionicsTeam,
  jointTeamData,
  transactionSummary,
  deckMetadata,
} from "../data/reiknaDeckContent";
import { SlideLayout } from "./SlideLayout";
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Lock,
  Sparkles,
  Mail,
  Building2,
  Cpu,
  Server,
  Radio,
  Layers,
  Activity,
  ArrowRight,
  Database,
  Gauge,
  Check,
  Clock,
} from "lucide-react";

interface SlideRendererProps {
  slide: SlideData;
  totalSlides: number;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, totalSlides }) => {
  switch (slide.layout) {
    /* ══════════════════════════════════════════════════════
       SLIDE 01: COVER (FULL HD 1920x1080 PROPORTIONS, CRISP WHITE)
       ══════════════════════════════════════════════════════ */
    case "cover":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-between h-full py-1">
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-[#6b21a8] tracking-tight uppercase">
                  FLEXIONICS
                </span>
                <span className="text-slate-400 font-bold text-2xl mx-2">✕</span>
                <span className="text-4xl font-black text-[#047857] tracking-tight uppercase">
                  KOLTRAST
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-200">
                  Swiss Parent · Flexionics Energy AG
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#047857] bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                  Swedish Subsidiary · Koltrast Energy Solutions AB
                </span>
              </div>
            </div>

            {/* Middle Hero Section: Balanced 2 Columns */}
            <div className="grid grid-cols-12 gap-8 my-auto py-2 items-center">
              {/* Left Column: Headline & Value Proposition */}
              <div className="col-span-7">
                <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-4 py-1 rounded-full text-[#6b21a8] text-xs font-bold uppercase tracking-widest mb-3">
                  <Sparkles className="w-4 h-4 text-[#6b21a8]" /> Confidential Strategic Acquisition Presentation
                </div>
                <h1 className="text-5xl font-black text-slate-900 leading-[1.12] tracking-tight mb-4">
                  Transforming Compute Infrastructure Into High-Value <span className="text-[#6b21a8]">Grid Flexibility</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-normal mb-6 max-w-2xl">
                  European Neo-Cloud Infrastructure: Turnkey Nordic Grid-Flexibility Platform &amp; 14 MW Operating Infrastructure (Boden &amp; Utansjö) + 30 MW Expansion ready for immediate integration into Reikna's growth roadmap.
                </p>

                {/* Key Strategic Metrics Strip */}
                <div className="flex items-center gap-4">
                  <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Operating Fleet</p>
                    <p className="text-lg font-black text-[#047857]">14 MW Live (SE1 &amp; SE2)</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Planned Expansion</p>
                    <p className="text-lg font-black text-purple-700">30 MW Shovel-Ready</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Software Platform</p>
                    <p className="text-lg font-black text-[#6b21a8]">100% Proprietary IP</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Transaction Perimeter Box */}
              <div className="col-span-5">
                <div className="inst-card p-6 border-t-4 border-t-[#6b21a8] bg-slate-50/70 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] bg-purple-100/80 px-3 py-1 rounded-full">
                      100% Equity Perimeter
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Turnkey Acquisition
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    Two Complementary Operating Layers
                  </h3>

                  <div className="space-y-3">
                    {/* Layer 1: Koltrast (Ground Layer) */}
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-[#047857]" />
                          <h4 className="text-base font-black text-slate-900">Koltrast Energy Solutions AB</h4>
                        </div>
                        <span className="text-[11px] font-bold text-[#047857] uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Ground Asset Layer
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-700 leading-snug">
                        <li className="flex items-start gap-2">
                          <span className="text-[#047857] font-bold shrink-0">•</span>
                          <span><strong className="text-slate-900">14 MW Operating Sites:</strong> Boden (12 MW, SE1) &amp; Utansjö (2 MW, SE2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#047857] font-bold shrink-0">•</span>
                          <span><strong className="text-slate-900">30 MW Expansion:</strong> Shovel-ready Phase 1 at Utansjö with heavy substation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#047857] font-bold shrink-0">•</span>
                          <span><strong className="text-slate-900">Ground Team:</strong> Led by Colin Chapple with certified Swedish electricians</span>
                        </li>
                      </ul>
                    </div>

                    {/* Layer 2: Flexionics (Software & IP Layer) */}
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-[#6b21a8]" />
                          <h4 className="text-base font-black text-slate-900">Flexionics Energy AG</h4>
                        </div>
                        <span className="text-[11px] font-bold text-[#6b21a8] uppercase bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          Software IP Layer
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700 leading-snug">
                        <li className="flex items-start gap-2">
                          <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                          <span><strong className="text-slate-900">100% In-House Software:</strong> Iceberg, Harbour, Compass, Northwatch, Polaris</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                          <span><strong className="text-slate-900">SvK Prequalified:</strong> Active Fast Frequency (FFR) &amp; mFRR certifications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Acquisition Summary Cards (Compact, Clearance Guaranteed) */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200 shrink-0">
              <div className="inst-card p-4.5 bg-slate-50/80 border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] mb-1">
                  Target Acquirer
                </p>
                <p className="text-2xl font-black text-slate-900">{deckMetadata.buyer}</p>
                <p className="text-sm text-slate-600 mt-1 font-medium">{deckMetadata.buyerLocation} · European Sovereign AI Group</p>
              </div>

              <div className="inst-card p-4.5 bg-slate-50/80 border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-[#047857] mb-1">
                  Physical Ground Asset (Koltrast)
                </p>
                <p className="text-2xl font-black text-slate-900">14 MW Live + 30 MW Exp.</p>
                <p className="text-sm text-slate-600 mt-1 font-medium">Boden (12 MW) &amp; Utansjö (2 MW Live + 30 MW Shovel-Ready)</p>
              </div>

              <div className="inst-card p-4.5 bg-slate-50/80 border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">
                  Software IP (Flexionics)
                </p>
                <p className="text-2xl font-black text-slate-900">100% In-House Software</p>
                <p className="text-sm text-slate-600 mt-1 font-medium">Iceberg Edge, Harbour, Compass, Northwatch, Polaris</p>
              </div>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 02: STRATEGIC THESIS (NATURAL FLOW, MY-AUTO CENTERED)
       ══════════════════════════════════════════════════════ */
    case "thesis":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="grid grid-cols-2 gap-6 my-auto py-2">
            {thesisPoints.map((point, idx) => (
              <div
                key={idx}
                className="inst-card p-7 flex flex-col hover:border-purple-300 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6b21a8] bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
                    {point.badge}
                  </span>
                  <span className="text-2xl font-mono font-bold text-slate-300">0{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-snug">
                  {point.title}
                </h3>

                <ul className="space-y-3 mb-5">
                  {point.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-base text-slate-700 leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#6b21a8] font-bold shrink-0 mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center gap-3 text-sm font-bold text-[#047857]">
                  <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />
                  <span>{point.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 03: THE FLEXIONICS BUSINESS (WHAT WE DO & HOW WE DO IT)
       ══════════════════════════════════════════════════════ */
    case "flexionics_business":
    case "perimeter":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            {/* Top Row: 3 Pillars (What We Do) */}
            <div className="grid grid-cols-3 gap-6">
              {flexionicsBusinessData.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`inst-card p-7 flex flex-col justify-between border-t-4 ${
                    idx === 0
                      ? "border-t-[#047857]"
                      : idx === 1
                      ? "border-t-[#6b21a8]"
                      : "border-t-blue-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                          idx === 0
                            ? "text-[#047857] bg-emerald-50 border-emerald-200"
                            : idx === 1
                            ? "text-[#6b21a8] bg-purple-50 border-purple-200"
                            : "text-blue-700 bg-blue-50 border-blue-200"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {pillar.sub}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    <ul className="space-y-2.5">
                      {pillar.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-base text-slate-700 leading-normal flex items-start gap-2.5">
                          <span
                            className={`font-bold shrink-0 mt-0.5 ${
                              idx === 0
                                ? "text-[#047857]"
                                : idx === 1
                                ? "text-[#6b21a8]"
                                : "text-blue-700"
                            }`}
                          >
                            •
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 4-Stage Operational Pipeline (How We Do It) */}
            <div className="inst-card p-5 bg-slate-50 border border-slate-200 rounded-xl shrink-0">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#6b21a8]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    How We Do It: The End-to-End Operational Pipeline
                  </span>
                </div>
                <span className="text-xs font-bold text-[#047857] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                  Full-Stack Execution Engine
                </span>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {flexionicsBusinessData.pipeline.map((step, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-lg shadow-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-black text-[#6b21a8] bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        {step.step}
                      </span>
                      <span className="text-sm font-black text-slate-900">{step.title}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{step.desc}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 04: THE MACRO PROBLEM (CENTERED GROUP, NATURAL SIZING)
       ══════════════════════════════════════════════════════ */
    case "problem":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            <div className="grid grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <div key={i} className="inst-card p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6b21a8] bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                      {card.category}
                    </span>
                  </div>
                  <div className="text-5xl font-black text-[#6b21a8] mb-2 font-mono">
                    {card.stat}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 pb-2 border-b border-slate-100">
                    {card.label}
                  </h3>
                  <ul className="space-y-3">
                    {card.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-base text-slate-700 leading-relaxed flex items-start gap-2.5">
                        <span className="text-[#6b21a8] font-bold shrink-0 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Virtual Battery Highlight Card */}
            <div className="inst-card p-5 bg-slate-50 border border-purple-200 rounded-2xl flex items-center justify-between shadow-sm shrink-0">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#6b21a8] text-white rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">The Flexionics Virtual Battery Advantage</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Unlike electrochemical batteries, flexible compute load does not degrade over cycles and generates continuous high-value computational revenue while waiting for grid dispatch events.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6b21a8] bg-purple-50 border border-purple-200 px-4 py-2 rounded-xl whitespace-nowrap">
                Zero Chemical Fade
              </span>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 05: BUSINESS MODEL & REVENUE STREAMS (CENTERED GROUP)
       ══════════════════════════════════════════════════════ */
    case "business_model":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            <div className="grid grid-cols-3 gap-6">
              {businessModelStreams.map((stream, idx) => (
                <div key={idx} className="inst-card p-7 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 text-slate-100 font-mono font-black text-6xl select-none">
                    {stream.step}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6b21a8] bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                        {stream.badge}
                      </span>
                      <span className="text-sm font-black font-mono text-[#047857]">
                        {stream.share}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-0.5">{stream.name}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {stream.source}
                    </p>

                    <ul className="space-y-2.5 mb-4">
                      {stream.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                          <span className="text-[#047857] font-bold shrink-0 mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 mt-auto pt-3 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Scope: {stream.scope}
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Reality Proof Banner */}
            <div className="inst-card bg-purple-50/60 p-4.5 flex items-center justify-between border border-purple-200 rounded-2xl shrink-0">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#6b21a8] text-white rounded-xl">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900">Proven Dual Monetization: &gt; $6M Revenue (Apr 2025 – Jan 2026)</h4>
                  <p className="text-sm text-slate-600">
                    Flexionics operates profitable hybrid data center assets. 57% of revenue earned from grid flexibility markets with 229.5 GWh capacity committed.
                  </p>
                </div>
              </div>
              <div className="text-right pl-6 border-l border-purple-200">
                <p className="text-xs font-bold text-slate-500 uppercase">Revenue Split</p>
                <p className="text-lg font-black text-[#6b21a8] font-mono">43% Compute | 57% Grid</p>
              </div>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 06: TANGIBLE & INTANGIBLE ASSET PORTFOLIO
       ══════════════════════════════════════════════════════ */
    case "assets_portfolio":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            {/* 2-Column Comparative Matrix: Tangible vs Intangible */}
            <div className="grid grid-cols-2 gap-7">
              {/* Left Column: Tangible Physical Assets */}
              <div className="inst-card p-6 border-t-4 border-t-[#047857] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#047857] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                      Tangible Assets
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Boden &amp; Utansjö · Sweden
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-0.5">
                    {assetPortfolioData.tangible.title}
                  </h3>
                  <p className="text-xs font-bold text-[#047857] uppercase tracking-wider mb-4">
                    {assetPortfolioData.tangible.subtitle}
                  </p>

                  <div className="space-y-3">
                    {assetPortfolioData.tangible.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-base font-black text-slate-900">{item.title}</span>
                          <span className="text-xs font-bold font-mono text-[#047857] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                            {item.highlight}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {item.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                              <span className="text-[#047857] font-bold shrink-0">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                  <span>Physical Infrastructure Footprint</span>
                  <span className="text-sm font-bold text-[#047857] font-mono">14 MW Active · 18 Containers</span>
                </div>
              </div>

              {/* Right Column: Intangible Assets & Software IP */}
              <div className="inst-card p-6 border-t-4 border-t-[#6b21a8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
                      Intangible Assets
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      100% In-House Software IP
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-0.5">
                    {assetPortfolioData.intangible.title}
                  </h3>
                  <p className="text-xs font-bold text-[#6b21a8] uppercase tracking-wider mb-4">
                    {assetPortfolioData.intangible.subtitle}
                  </p>

                  <div className="space-y-3">
                    {assetPortfolioData.intangible.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-base font-black text-slate-900">{item.title}</span>
                          <span className="text-xs font-bold font-mono text-[#6b21a8] bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                            {item.highlight}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {item.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                              <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
                  <span>Regulatory Pre-Qualifications</span>
                  <span className="text-sm font-bold text-[#6b21a8] font-mono">FFR (&lt;1s) · FCR-D (30s) · mFRR (5-15m)</span>
                </div>
              </div>
            </div>

            {/* Bottom 6-Metric Strip */}
            <div className="inst-card p-3.5 bg-slate-50 border border-slate-200 grid grid-cols-6 gap-3 rounded-xl shrink-0">
              {assetPortfolioData.summaryMetrics.map((item, i) => (
                <div key={i} className="px-3 border-r border-slate-200 last:border-r-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5 font-mono">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 07: INFRASTRUCTURE SITES (BODEN & UTANSJÖ)
       ══════════════════════════════════════════════════════ */
    case "infrastructure_sites":
    case "utansjo_asset":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            {/* 3-Column Comparative Site Matrix */}
            <div className="grid grid-cols-3 gap-6">
              {infrastructureSitesData.sites.map((site, idx) => (
                <div
                  key={idx}
                  className={`inst-card p-6 flex flex-col justify-between border-t-4 ${
                    site.badgeColor === "purple" ? "border-t-[#6b21a8]" : "border-t-[#047857]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                          site.badgeColor === "purple"
                            ? "text-[#6b21a8] bg-purple-50 border-purple-200"
                            : "text-[#047857] bg-emerald-50 border-emerald-200"
                        }`}
                      >
                        {site.status}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">{site.zone}</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-0.5">{site.name}</h3>
                    <p
                      className={`text-sm font-bold uppercase tracking-wider mb-3.5 ${
                        site.badgeColor === "purple" ? "text-[#6b21a8]" : "text-[#047857]"
                      }`}
                    >
                      {site.capacity}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {site.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                          <span
                            className={`font-bold shrink-0 mt-0.5 ${
                              site.badgeColor === "purple" ? "text-[#6b21a8]" : "text-[#047857]"
                            }`}
                          >
                            •
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Site Specs Grid */}
                  <div className="pt-3.5 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-3.5 rounded-b-xl grid grid-cols-2 gap-2">
                    {site.specs.map((sp, sIdx) => (
                      <div key={sIdx}>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{sp.label}</p>
                        <p className="text-sm font-black text-slate-900 font-mono mt-0.5">{sp.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Anchor Banner */}
            <div className="inst-card p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#047857] shrink-0" />
                <p className="text-sm font-bold text-slate-900">
                  Combined Swedish Industrial Footprint:{" "}
                  <span className="text-slate-600 font-normal">
                    14 MW operational hybrid data centre capacity across 18 containers in Boden and Utansjö, supplemented by a shovel-ready 30 MW expansion on the Swedish national grid.
                  </span>
                </p>
              </div>
              <span className="text-xs font-bold text-[#047857] uppercase tracking-wider bg-emerald-100/70 px-3.5 py-1 rounded-full shrink-0 border border-emerald-200">
                14 MW Live + 30 MW Shovel-Ready
              </span>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 07: TRACK RECORD (CLEAN AUDITED NUMBERS & POINTERS)
       ══════════════════════════════════════════════════════ */
    case "track_record":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            <div className="grid grid-cols-3 gap-6">
              {trackRecordMetrics.map((kpi, idx) => (
                <div
                  key={idx}
                  className={`inst-card p-7 flex flex-col ${
                    kpi.highlight ? "border-purple-300 bg-purple-50/30" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                      {kpi.label}
                    </p>
                    <p className="text-5xl font-black text-slate-900 font-mono tracking-tight mb-3">
                      {kpi.value}
                    </p>
                    {kpi.points && (
                      <ul className="space-y-2 pt-3 border-t border-slate-100 mt-auto">
                        {kpi.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-sm text-slate-700 leading-snug flex items-start gap-2">
                            <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Clean Proof Bar without date snapshot */}
            <div className="inst-card p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-sm text-slate-700 shrink-0">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#047857]" />
                <span>
                  <strong>Audited Production Evidence:</strong> All figures verified against historical production telemetry and settlement logs.
                </span>
              </div>
              <span className="font-mono font-semibold text-slate-500 text-xs">
                SvK mFRR &amp; FFR Settlement Records
              </span>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 08: SOFTWARE PLATFORM (3 + 2 BALANCED LAYOUT & BULLETS)
       ══════════════════════════════════════════════════════ */
    case "software_platform":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            {/* Top Row: 3 Modules */}
            <div className="grid grid-cols-3 gap-6">
              {softwareModules.slice(0, 3).map((mod, idx) => (
                <div key={idx} className="inst-card p-6 flex flex-col hover:border-purple-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#6b21a8] bg-purple-50 px-3 py-1 rounded border border-purple-200">
                        {mod.code}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">In-House Module</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-0.5">{mod.name}</h3>
                    <p className="text-xs font-bold text-[#6b21a8] uppercase tracking-wider mb-3">{mod.role}</p>
                    <ul className="space-y-2 mb-3">
                      {mod.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                          <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-2.5 border-t border-slate-100 text-xs font-mono font-semibold text-slate-500">
                    {mod.metrics}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Modules Centered */}
            <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
              {softwareModules.slice(3, 5).map((mod, idx) => (
                <div key={idx} className="inst-card p-6 flex flex-col hover:border-purple-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#6b21a8] bg-purple-50 px-3 py-1 rounded border border-purple-200">
                        {mod.code}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">In-House Module</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-0.5">{mod.name}</h3>
                    <p className="text-xs font-bold text-[#6b21a8] uppercase tracking-wider mb-3">{mod.role}</p>
                    <ul className="space-y-2 mb-3">
                      {mod.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                          <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-2.5 border-t border-slate-100 text-xs font-mono font-semibold text-slate-500">
                    {mod.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 09: CLOSED-LOOP CONTROL ARCHITECTURE (CLEAN DISTINCT STEPS)
       ══════════════════════════════════════════════════════ */
    case "control_loop":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            {/* 4 Core Control Steps */}
            <div className="grid grid-cols-4 gap-6">
              {controlLoopSteps.map((step, idx) => (
                <div key={idx} className="inst-card p-7 flex flex-col justify-between border-t-4 border-t-[#6b21a8]">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#6b21a8] text-white font-bold flex items-center justify-center text-sm font-mono shadow">
                        {step.num}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6b21a8] bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                        {step.stepName}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug">{step.title}</h3>
                    <ul className="space-y-2.5">
                      {step.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                          <span className="text-[#6b21a8] font-bold text-base leading-none shrink-0 mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Proof Cards */}
            <div className="grid grid-cols-2 gap-6 shrink-0">
              <div className="inst-card p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-5 shadow-sm">
                <div className="p-3.5 bg-purple-100 text-[#6b21a8] rounded-xl shrink-0 shadow-xs">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">0.5% Active-Power Accuracy Chain</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    18 live Phoenix Contact industrial power meters sample continuously, satisfying Svenska kraftnät prequalification standards for 10 MW+ tested resources.
                  </p>
                </div>
              </div>

              <div className="inst-card p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-5 shadow-sm">
                <div className="p-3.5 bg-emerald-100 text-[#047857] rounded-xl shrink-0 shadow-xs">
                  <Lock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Embedded SQLite &amp; Disk-Backed Telemetry</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Embedded SQLite database and Parquet telemetry outbox run directly on-site, preserving local control execution and zero data loss through cloud outages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 10: UNIT ECONOMICS (CRISP SOLID BLACK READABLE TEXT)
       ══════════════════════════════════════════════════════ */
    case "unit_economics":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-center h-full gap-6 py-2">
            <div className="grid grid-cols-4 gap-6">
              {unitEconomicsData.map((item, idx) => (
                <div key={idx} className="inst-card p-7 flex flex-col">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-5xl font-black text-slate-900 font-mono tracking-tight mb-3">
                      {item.value}
                    </p>
                    <ul className="space-y-2 pt-2.5 border-t border-slate-100 mt-auto">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                          <span className="text-[#047857] font-bold shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* High-Contrast Bottom Banner */}
            <div className="inst-card p-6 bg-slate-50 border border-purple-200 rounded-2xl flex items-center justify-between shadow-sm shrink-0">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] mb-1 block">
                  Capital Multiplication
                </span>
                <h4 className="text-xl font-black text-slate-900 mb-1">
                  Software-Driven Scalability Without Proportional CapEx
                </h4>
                <p className="text-sm text-slate-600 max-w-4xl leading-relaxed font-normal">
                  The Iceberg and Harbour software layers can orchestrate hundreds of megawatts across Reikna's Norwegian and Swedish data center fleet with zero incremental software development cost.
                </p>
              </div>
              <div className="text-right pl-6 border-l border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Reikna Portfolio Target</p>
                <p className="text-2xl font-black text-[#047857] mt-0.5">300 MW By 2030</p>
              </div>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 12: JOINT TEAM (FLEXIONICS & KOLTRAST - 5 + 5 GRID)
       ══════════════════════════════════════════════════════ */
    case "team_joint":
    case "team_flexionics":
    case "team_koltrast":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="flex flex-col justify-between h-full py-1 gap-3.5">
            {/* Row 1: Flexionics Software & Financial Architecture (5 Cols) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6b21a8] bg-purple-50 px-3 py-0.5 rounded-full border border-purple-200">
                    Flexionics Leadership &amp; Core Engineering
                  </span>
                  <span className="text-sm text-slate-600 font-medium">
                    Software IP, Algorithmic Energy Trading, AI &amp; Capital Markets
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#6b21a8]">Zug, Switzerland</span>
              </div>

              <div className="grid grid-cols-5 gap-3.5">
                {jointTeamData.flexionics.map((member, idx) => (
                  <div
                    key={idx}
                    className="inst-card p-3.5 flex flex-col justify-between border-t-4 border-t-[#6b21a8] bg-white shadow-xs"
                  >
                    <div>
                      <h4 className="text-[15.5px] font-black text-slate-900 leading-tight mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#6b21a8] mb-2 leading-tight">
                        {member.role}
                      </p>
                      <ul className="space-y-1.5">
                        {member.highlights.map((pt, j) => (
                          <li key={j} className="text-[13px] text-slate-700 leading-snug flex items-start gap-1.5">
                            <span className="text-[#6b21a8] font-bold text-xs shrink-0 leading-none mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Koltrast Nordic Power & Infrastructure Operations (5 Cols) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#047857] bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                    Koltrast Nordic Infrastructure &amp; Site Operations
                  </span>
                  <span className="text-sm text-slate-600 font-medium">
                    High-Voltage Grid Engineering, Substation Works &amp; On-Site Technicians
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#047857]">Sweden (SE1 &amp; SE2)</span>
              </div>

              <div className="grid grid-cols-5 gap-3.5">
                {jointTeamData.koltrast.map((member, idx) => (
                  <div
                    key={idx}
                    className="inst-card p-3.5 flex flex-col justify-between border-t-4 border-t-[#047857] bg-white shadow-xs"
                  >
                    <div>
                      <h4 className="text-[15.5px] font-black text-slate-900 leading-tight mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#047857] mb-2 leading-tight">
                        {member.role}
                      </p>
                      <ul className="space-y-1.5">
                        {member.highlights.map((pt, j) => (
                          <li key={j} className="text-[13px] text-slate-700 leading-snug flex items-start gap-1.5">
                            <span className="text-[#047857] font-bold text-xs shrink-0 leading-none mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Grounding Anchor Banner */}
            <div className="inst-card p-3.5 px-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between shadow-sm shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#047857] animate-pulse shrink-0" />
                <p className="text-sm font-bold text-slate-900">
                  Turnkey Execution Capability:{" "}
                  <span className="text-slate-600 font-normal">
                    Seamless synthesis of Tier-1 financial risk management (HKEX, Deutsche Bank), energy quant modeling (Siemens Energy), and certified on-the-ground Swedish high-voltage engineering.
                  </span>
                </p>
              </div>
              <span className="text-xs font-bold text-[#047857] uppercase tracking-wider bg-emerald-100/70 px-3.5 py-1 rounded-full shrink-0 border border-emerald-200">
                10-Member Joint Operating Unit
              </span>
            </div>
          </div>
        </SlideLayout>
      );

    /* ══════════════════════════════════════════════════════
       SLIDE 13: STRATEGIC ACQUISITION SUMMARY (CLEAN & DIGNIFIED)
       ══════════════════════════════════════════════════════ */
    case "closing":
      return (
        <SlideLayout
          category={slide.category}
          slideNumber={slide.slideNumber}
          totalSlides={totalSlides}
          title={slide.title}
          subtitle={slide.subtitle}
        >
          <div className="grid grid-cols-2 gap-7 my-auto py-2">
            {/* Left: What Reikna Acquires */}
            <div className="inst-card p-7 border-t-4 border-t-[#6b21a8] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] bg-purple-50 px-3 py-1 rounded-full border border-purple-200 mb-3 inline-block">
                  100% Equity Perimeter
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Core Assets Acquired</h3>
                <div className="space-y-3.5">
                  {transactionSummary.coreAssets.map((asset, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <p className="text-base font-bold text-slate-900 mb-1">{asset.title}</p>
                      <ul className="space-y-1">
                        {asset.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                            <span className="text-[#6b21a8] font-bold shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 bg-slate-50 -mx-7 -mb-7 p-4.5 rounded-b-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Perimeter Scope</p>
                  <p className="text-sm font-bold text-slate-900">14 MW Live Sites (Boden &amp; Utansjö) + 100% Software IP</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Operating Jurisdiction</p>
                  <p className="text-sm font-bold text-[#6b21a8] font-mono">Switzerland · Sweden</p>
                </div>
              </div>
            </div>

            {/* Right: Strategic Value to Reikna AS */}
            <div className="inst-card p-7 border-t-4 border-t-[#047857] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#047857] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3 inline-block">
                  Reikna Value Creation
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Immediate Strategic Impact</h3>
                <div className="space-y-3.5">
                  {transactionSummary.strategicFit.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />
                        <p className="text-base font-bold text-slate-900">{item.title}</p>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pl-7">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 bg-slate-50 -mx-7 -mb-7 p-4.5 rounded-b-xl flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Acquirer</p>
                  <p className="text-sm font-bold text-slate-900">{transactionSummary.acquirer}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Transaction Structure</p>
                  <p className="text-sm font-bold text-[#047857] font-mono">100% Equity Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </SlideLayout>
      );

    default:
      return <div>Slide Layout Not Found</div>;
  }
};
