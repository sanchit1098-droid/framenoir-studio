import React from "react";
import { Globe2, Film, TrendingUp } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const TrustSection: React.FC = () => {
  const icons = [Globe2, Film, TrendingUp];

  return (
    <section
      id="trust"
      className="relative py-24 sm:py-32 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
              POSITIONING & ETHOS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F5F0] font-light leading-[1.15] mb-6 tracking-tight">
            {siteConfig.trust.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#D8D1C3] font-light leading-relaxed">
            {siteConfig.trust.text}
          </p>
        </div>

        {/* 3 Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {siteConfig.trust.valueProps.map((prop, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={prop.title}
                className="relative p-8 sm:p-10 bg-[#121317]/60 border border-white/[0.06] hover:border-[#C5A880]/30 transition-all duration-300 group rounded-none"
              >
                {/* Top Number indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] bg-white/[0.02] group-hover:border-[#C5A880]/40 group-hover:bg-[#C5A880]/10 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <span className="font-mono text-xs text-[#A39D90]/50 tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal mb-3 group-hover:text-[#E5D3B8] transition-colors duration-200">
                  {prop.title}
                </h3>

                <p className="text-sm text-[#A39D90] font-light leading-relaxed">
                  {prop.description}
                </p>

                {/* Subtle bottom edge line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/0 to-transparent group-hover:via-[#C5A880]/40 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Transparent Collaboration Notice */}
        <div className="mt-16 p-6 sm:p-8 bg-white/[0.02] border border-white/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C5A880]" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#ECE7DE] font-medium">
              Transparent Global Studio
            </p>
          </div>
          <p className="text-xs text-[#A39D90] font-light max-w-2xl leading-relaxed">
            We collaborate with property management teams remotely, strictly editing client-provided authorized footage. We do not invent client rosters or claim production credits where we did not edit the film.
          </p>
        </div>
      </div>
    </section>
  );
};
