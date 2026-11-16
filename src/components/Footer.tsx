"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#070809] border-t border-white/[0.08] text-[#A39D90] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.06]">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="#hero" className="inline-flex flex-col items-start group">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl tracking-[0.18em] text-[#F7F5F0] font-normal group-hover:text-[#C5A880] transition-colors">
                  FRAMENOIR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#787368] font-light -mt-0.5">
                STUDIO
              </span>
            </Link>

            <p className="text-sm text-[#A39D90] font-light leading-relaxed max-w-sm">
              Remote cinematic video post-production studio crafting luxury property films for private villas, holiday-home operators, and boutique hospitality brands worldwide.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#787368] block mb-1">
                Official Studio Contact
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-mono text-sm text-[#ECE7DE] hover:text-[#C5A880] transition-colors inline-flex items-center gap-2 group"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{siteConfig.contact.email}</span>
                <ArrowUpRight className="w-3 h-3 text-[#A39D90] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F7F5F0] font-medium">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C5A880] transition-colors tracking-wide block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Global Studio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#F7F5F0] font-medium">
              Connect & Portfolio
            </p>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C5A880] transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{social.name}</span>
                    <span className="font-mono text-[11px] text-[#787368] group-hover:text-[#C5A880] transition-colors flex items-center gap-1">
                      {social.label}
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Privacy Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787368]">
          <p className="text-center sm:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved. Remote Creative Post-Production.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#ECE7DE] transition-colors tracking-wide"
            >
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[11px] text-[#A39D90]">
              Operating Across Global Time Zones
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
