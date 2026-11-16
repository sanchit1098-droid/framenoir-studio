import React from "react";
import { Clock, Eye, Video, Ratio, MessageSquareCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const WhyChooseUsSection: React.FC = () => {
  const icons = [Clock, Eye, Video, Ratio, MessageSquareCheck];

  return (
    <section
      id="why-choose-us"
      className="relative py-28 sm:py-36 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
              THE STUDIO ADVANTAGE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F5F0] font-light leading-[1.1] tracking-tight mb-6">
            {siteConfig.whyChooseUs.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#D8D1C3] font-light leading-relaxed">
            {siteConfig.whyChooseUs.subheading}
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={reason.title}
                className="relative bg-[#121317]/60 border border-white/[0.08] p-8 sm:p-10 hover:border-[#C5A880]/40 transition-all duration-300 group rounded-none"
              >
                {/* Icon & Counter */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/[0.02] border border-white/[0.08] group-hover:border-[#C5A880]/40 group-hover:bg-[#C5A880]/10 transition-colors">
                    <Icon className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <span className="font-mono text-xs text-[#787368]">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal mb-3 group-hover:text-[#E5D3B8] transition-colors leading-snug">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A39D90] font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Simple Commitment Card */}
          <div className="relative bg-gradient-to-br from-[#121317] to-[#181A22] border border-[#C5A880]/30 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-3">
                OUR COMMITMENT
              </span>
              <h3 className="font-serif text-2xl text-[#F7F5F0] font-normal mb-4">
                Honest, Transparent & Direct
              </h3>
              <p className="text-sm text-[#A39D90] font-light leading-relaxed">
                We believe in genuine craftsmanship over marketing hyperbole. You receive clear quotes, honest production schedules, and high-fidelity video files without hidden licensing gotchas.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <a
                href="#contact"
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] hover:text-[#F7F5F0] transition-colors inline-block"
              >
                Inquire With Your Footage →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
