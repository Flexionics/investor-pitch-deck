import React from "react";

interface SlideLayoutProps {
  children: React.ReactNode;
  category: string;
  slideNumber: number;
  totalSlides: number;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  category,
  slideNumber,
  totalSlides,
  title,
  subtitle,
}) => {
  const isCover = slideNumber === 1;

  return (
    <div className="slide-canvas relative select-none bg-white text-slate-900 flex flex-col justify-between w-[1920px] h-[1080px] overflow-hidden">
      {/* Top Header Bar (Non-Cover Slides) */}
      {!isCover && (
        <header className="relative z-10 px-16 pt-7 pb-4 flex items-center justify-between border-b border-slate-200 shrink-0">
          {/* Left: Prominent Brand Wordmarks & Category */}
          <div className="flex items-center gap-3">
            <span className="font-black text-[#6b21a8] tracking-tight text-2xl uppercase">
              FLEXIONICS
            </span>
            <span className="text-slate-300 font-light text-2xl">/</span>
            <span className="font-black text-[#047857] tracking-tight text-2xl uppercase">
              KOLTRAST
            </span>
            <div className="h-5 w-[1.5px] bg-slate-300 mx-2" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#6b21a8] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
              {category}
            </span>
          </div>

          {/* Right: Deal Context */}
          <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
            <span>Confidential Strategic Acquisition</span>
            <div className="h-4 w-[1px] bg-slate-300" />
            <span>
              Prepared for <strong className="text-slate-900 font-bold">Reikna AS</strong>
            </span>
          </div>
        </header>
      )}

      {/* Slide Title Section (Non-Cover Slides) */}
      {!isCover && (
        <div className="relative z-10 px-16 pt-5 pb-3 shrink-0">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 mt-1 max-w-6xl leading-snug font-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Main Slide Content Area - Expands to fill available vertical height without dead zones */}
      <main
        className={`relative z-10 flex-1 px-16 ${
          isCover ? "py-8" : "py-4"
        } flex flex-col justify-between overflow-hidden`}
      >
        {children}
      </main>

      {/* Slide Bottom Footer */}
      {!isCover && (
        <footer className="relative z-10 px-16 py-4 flex items-center justify-between border-t border-slate-200 text-sm text-slate-500 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-700">
              Koltrast Energy Solutions AB (Swedish Subsidiary) &amp; Flexionics Energy AG (Swiss Parent)
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i + 1 === slideNumber
                      ? "w-8 bg-[#6b21a8]"
                      : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono font-bold text-slate-900 text-sm">
              {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
            </span>
          </div>
        </footer>
      )}
    </div>
  );
};
