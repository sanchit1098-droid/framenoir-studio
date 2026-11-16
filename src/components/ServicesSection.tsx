import React from "react";
import { ArrowUpRight, Check, MonitorPlay, Smartphone, Film, Layers } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const ServicesSection: React.FC = () => {
  const serviceIcons = [Film, Smartphone, MonitorPlay, Layers];

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                OUR SERVICES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F5F0] font-light leading-[1.1] tracking-tight">
              Content That Makes Every Detail Matter
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#A39D90] font-light leading-relaxed">
              Every cut is tuned to articulate architecture, scale, atmosphere and materiality — tailored specifically for high-net-worth audiences across multiple screen sizes.
            </p>
          </div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteConfig.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="relative bg-[#121317]/80 border border-white/[0.08] hover:border-[#C5A880]/40 p-8 sm:p-10 transition-all duration-400 group rounded-none flex flex-col justify-between"
              >
                <div>
                  {/* Service Header: Number, Icon & Aspect ratio */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-white/[0.02] border border-white/[0.08] group-hover:border-[#C5A880]/50 group-hover:bg-[#C5A880]/10 transition-colors">
                        <Icon className="w-5 h-5 text-[#C5A880]" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#C5A880] tracking-wider block">
                          SERVICE // {service.number}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#A39D90]">
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#D8D1C3] bg-white/[0.03] border border-white/[0.06] px-2.5 py-1">
                      {service.aspectRatios.split("/")[0]}
                    </span>
                  </div>

                  {/* Title & Core Description */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0] font-normal mb-4 group-hover:text-[#E5D3B8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A39D90] font-light leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8 pt-6 border-t border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#ECE7DE] font-medium block mb-3">
                      Included Deliverables
                    </span>
                    {service.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#D8D1C3] font-light">
                        <Check className="w-3.5 h-3.5 text-[#C5A880] mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#787368]">
                    Formats: {service.aspectRatios}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] hover:text-[#F7F5F0] transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner for Services */}
        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#121317] via-[#16181F] to-[#121317] border border-[#C5A880]/30 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0] font-normal mb-2">
              Ready to elevate your property presentation?
            </h3>
            <p className="text-sm text-[#A39D90] font-light">
              Send your raw footage link or schedule an editorial consult to determine the ideal edit package for your marketing channels.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#0B0C0E] bg-[#C5A880] hover:bg-[#D6BD96] transition-all shadow-[0_4px_25px_rgba(197,168,128,0.25)] group shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
