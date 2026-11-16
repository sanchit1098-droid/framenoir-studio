import React from "react";
import { UploadCloud, Compass, SlidersHorizontal, CheckCircle2, Info } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const ProcessSection: React.FC = () => {
  const stepIcons = [UploadCloud, Compass, SlidersHorizontal, CheckCircle2];

  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F5F0] font-light leading-[1.1] tracking-tight mb-6">
            {siteConfig.process.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#D8D1C3] font-light leading-relaxed">
            {siteConfig.process.subheading}
          </p>
        </div>

        {/* Highlight Note Banner: No Additional Filming Required */}
        <div className="mb-16 p-6 sm:p-8 bg-[#121317] border border-[#C5A880]/30 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/40 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-[#C5A880]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F7F5F0] block mb-1">
              No Travel or On-Site Crew Required
            </span>
            <p className="text-sm text-[#A39D90] font-light leading-relaxed">
              {siteConfig.process.note}
            </p>
          </div>
        </div>

        {/* 4 Process Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.process.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={step.step}
                className="relative bg-[#121317]/60 border border-white/[0.07] p-8 flex flex-col justify-between hover:border-[#C5A880]/40 transition-all duration-300 group rounded-none"
              >
                <div>
                  {/* Step Number & Line */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="font-serif text-3xl sm:text-4xl text-[#C5A880] font-light">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center bg-white/[0.02] border border-white/[0.06] group-hover:border-[#C5A880]/30 transition-colors">
                      <Icon className="w-4 h-4 text-[#A39D90] group-hover:text-[#C5A880] transition-colors" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal mb-3 group-hover:text-[#E5D3B8] transition-colors">
                    {step.title}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-xs uppercase tracking-[0.1em] text-[#C5A880] mb-4 font-medium">
                    {step.description}
                  </p>

                  {/* Operational Details */}
                  <p className="text-xs text-[#A39D90] font-light leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Subtle Progress Indicator */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-[#787368] font-mono">
                  <span>PHASE 0{index + 1} OF 04</span>
                  <span className="w-2 h-2 rounded-full bg-white/[0.08] group-hover:bg-[#C5A880] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Secure File Handling Note */}
        <div className="mt-16 text-center text-xs text-[#A39D90] font-light max-w-xl mx-auto">
          <p>
            We accommodate all professional transfer protocols including Dropbox, Google Workspace, WeTransfer Pro, and Frame.io with non-disclosure agreements available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
