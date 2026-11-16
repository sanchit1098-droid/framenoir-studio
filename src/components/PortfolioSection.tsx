"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Film, ArrowUpRight } from "lucide-react";
import { siteConfig, ProjectItem } from "@/data/siteConfig";
import { VideoModal } from "@/components/VideoModal";

interface PortfolioSectionProps {
  onSelectProject?: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative py-28 sm:py-36 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                PORTFOLIO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F5F0] font-light leading-[1.1] tracking-tight">
              Selected Cinematic Work
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#A39D90] font-light leading-relaxed">
            <p>
              An editorial gallery demonstrating our architectural pacing, low-light film grading, and dynamic aerial flow crafted from property footage.
            </p>
          </div>
        </div>

        {/* Concept Disclaimer Pill Banner */}
        <div className="mb-12 p-4 bg-[#121317] border border-[#C5A880]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[#E5D3B8] font-medium tracking-wide">
              Transparency Notice: Independent Concept Studies
            </span>
          </div>
          <p className="text-[#A39D90] font-light text-[11px] sm:text-xs">
            The films below are independent creative concept projects to demonstrate our aesthetic editing standard, not commissioned client work.
          </p>
        </div>

        {/* 2x2 Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#121317] border border-white/[0.08] hover:border-[#C5A880]/50 transition-all duration-500 overflow-hidden cinematic-card-hover cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Media Thumbnail Container (Cinematic 16:9) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} - ${project.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/30 opacity-80" />

                {/* Top Badge: CONCEPT PROJECT */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#F7F5F0] bg-[#0B0C0E]/85 border border-[#C5A880]/50 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    {project.badge}
                  </span>
                </div>

                {/* Duration / Aspect Ratio Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-mono text-[#D8D1C3] bg-black/60 backdrop-blur-sm border border-white/10">
                    {project.duration} • {project.aspectRatio.split(" ")[0]}
                  </span>
                </div>

                {/* Center Play Button with hover ripple */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#0B0C0E]/70 border border-[#C5A880]/60 backdrop-blur-md flex items-center justify-center text-[#F7F5F0] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C5A880] group-hover:text-[#0B0C0E] group-hover:border-[#C5A880] shadow-2xl">
                    <Play className="w-6 h-6 ml-0.5 fill-current transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Bar prompt */}
                <div className="absolute bottom-3 right-4 z-10 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Watch Film</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs text-[#A39D90] uppercase tracking-[0.2em] mb-2 font-medium">
                  <span className="text-[#C5A880]">{project.location}</span>
                  <span className="text-[11px] text-[#787368]">{project.category}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0] font-normal group-hover:text-[#E5D3B8] transition-colors duration-300 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A39D90] font-light leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Action Strip */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#A39D90] group-hover:text-[#ECE7DE] transition-colors flex items-center gap-2">
                    <Film className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>View Concept Breakdown</span>
                  </span>
                  <span className="text-xs text-[#C5A880] font-medium tracking-wider">
                    Preview
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Footer Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A39D90] mb-4">
            Have property footage ready for a cinematic cut?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#C5A880] hover:text-[#E5D3B8] border-b border-[#C5A880]/40 pb-1 hover:border-[#C5A880] transition-colors"
          >
            <span>Request a Concept Cut for Your Property</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Video Modal Experience */}
      <VideoModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProjectForInquiry={onSelectProject}
      />
    </section>
  );
};
