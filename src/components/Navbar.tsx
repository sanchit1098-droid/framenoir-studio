"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.querySelector(href);
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
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B0C0E]/90 backdrop-blur-md py-4 border-b border-white/[0.08] shadow-2xl"
            : "bg-transparent py-6 md:py-8 border-b border-white/[0.03]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="group flex flex-col items-start focus:outline-none focus:ring-1 focus:ring-[#C5A880]/50 rounded-sm"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-[#F7F5F0] font-normal group-hover:text-[#C5A880] transition-colors duration-300">
                FRAMENOIR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block animate-pulse" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A39D90] font-light -mt-0.5">
              STUDIO
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-[#D8D1C3] hover:text-[#F7F5F0] transition-colors duration-200 relative py-1 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#F7F5F0] bg-white/[0.04] hover:bg-[#C5A880] hover:text-[#0B0C0E] border border-[#C5A880]/40 hover:border-[#C5A880] transition-all duration-300 rounded-none shadow-sm hover:shadow-[0_0_20px_rgba(197,168,128,0.25)] group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:text-[#0B0C0E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#ECE7DE] hover:text-[#C5A880] focus:outline-none focus:ring-1 focus:ring-[#C5A880]/50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col space-y-6 pt-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A39D90]">Navigation</p>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-serif text-3xl text-[#ECE7DE] hover:text-[#C5A880] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="space-y-6 pt-8 border-t border-white/[0.08]">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="flex items-center justify-between w-full px-6 py-4 text-xs uppercase tracking-[0.2em] font-medium text-[#0B0C0E] bg-[#C5A880] hover:bg-[#D6BD96] transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="text-xs text-[#A39D90] space-y-1">
            <p className="tracking-wide">Direct Studio Inquiry:</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[#F7F5F0] hover:text-[#C5A880] transition-colors font-mono text-[11px]"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
