import React from "react";
import Image from "next/image";
import { Sparkles, Compass, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                {siteConfig.about.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F5F0] font-light leading-[1.1] tracking-tight mb-8">
              {siteConfig.about.heading}
            </h2>

            {/* Core About Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#D8D1C3] font-light leading-relaxed mb-12">
              {siteConfig.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Studio Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
              {siteConfig.about.pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-2">
                  <span className="font-serif text-base text-[#F7F5F0] font-normal block text-[#E5D3B8]">
                    {pillar.title}
                  </span>
                  <p className="text-xs text-[#A39D90] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Aesthetic Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#121317] border border-white/[0.08] p-4 sm:p-6 cinematic-card-shadow">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/50">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                  alt="Minimalist modern luxury architecture and interior detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter grayscale-[30%] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-80" />

                {/* Overlay Corner Monogram */}
                <div className="absolute top-4 left-4 p-3 bg-[#0B0C0E]/80 backdrop-blur-md border border-white/10">
                  <span className="font-serif text-xs tracking-[0.2em] text-[#C5A880]">
                    FN // STUDIO
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B0C0E]/85 backdrop-blur-md border border-white/[0.08]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] mb-1 font-medium">
                    Independent Creative Studio
                  </p>
                  <p className="text-xs text-[#ECE7DE] font-light">
                    Remote visual storytelling for premier holiday homes, private estates, and luxury hospitality destinations.
                  </p>
                </div>
              </div>

              {/* Discreet Base Info */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#787368]">
                <span>Origin: {siteConfig.origin}</span>
                <span>Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
