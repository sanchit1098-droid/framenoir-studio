"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0C0E]"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image (always present behind video and shows immediately) */}
        <div className="absolute inset-0">
          <Image
            src={siteConfig.hero.posterImage}
            alt="Luxury modern architectural villa with infinity pool at dusk"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              videoLoaded && !videoError ? "opacity-30" : "opacity-50"
            }`}
          />
        </div>

        {/* Cinematic Video Background */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            poster={siteConfig.hero.posterImage}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? "opacity-45" : "opacity-0"
            }`}
          >
            <source src={siteConfig.hero.videoUrl} type="video/mp4" />
          </video>
        )}

        {/* Luxury Vignette and Multi-layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/60 to-[#0B0C0E]/70" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(11,12,14,0.75)_100%)]" />
      </div>

      {/* Decorative Subtle Architecture Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.02]" />
        <div className="w-[1px] h-full bg-white/[0.02] hidden md:block" />
        <div className="w-[1px] h-full bg-white/[0.02] hidden lg:block" />
        <div className="w-[1px] h-full bg-white/[0.02]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Eyebrow / Category Tag */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-none border border-[#C5A880]/30 bg-[#0B0C0E]/60 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E5D3B8] font-medium">
            {siteConfig.hero.eyebrow}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F5F0] font-light tracking-[-0.02em] leading-[1.08] max-w-4xl mb-6">
          Your Property. <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E5D3B8]">Our Cinematic Vision.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#D8D1C3] max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          {siteConfig.hero.subheading}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Start a Project (Primary CTA) */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#0B0C0E] bg-[#C5A880] hover:bg-[#D6BD96] transition-all duration-300 shadow-[0_4px_30px_rgba(197,168,128,0.25)] hover:shadow-[0_4px_35px_rgba(197,168,128,0.4)] group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Explore Our Work (Secondary CTA) */}
          <a
            href="#work"
            onClick={(e) => scrollToSection(e, "#work")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#F7F5F0] bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#C5A880]/60 transition-all duration-300 backdrop-blur-sm group"
          >
            <Play className="w-3.5 h-3.5 text-[#C5A880] fill-[#C5A880] transition-transform duration-300 group-hover:scale-110" />
            <span>Explore Our Work</span>
          </a>
        </div>

        {/* Editorial Footnote / Remote Notice */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.25em] text-[#A39D90]">
          <span>Remote Post-Production</span>
          <span className="w-1 h-1 rounded-full bg-[#C5A880]/60" />
          <span>Existing Footage Optimized</span>
          <span className="w-1 h-1 rounded-full bg-[#C5A880]/60 hidden sm:inline" />
          <span className="hidden sm:inline">Worldwide Delivery</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#trust"
        onClick={(e) => scrollToSection(e, "#trust")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#A39D90] hover:text-[#C5A880] transition-colors duration-300 group focus:outline-none"
        aria-label="Scroll to Trust section"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </a>
    </section>
  );
};
