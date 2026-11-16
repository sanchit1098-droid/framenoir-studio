"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const StudioHome: React.FC = () => {
  const [inquiryProject, setInquiryProject] = useState<string | undefined>(undefined);

  const handleSelectProject = (projectTitle: string) => {
    setInquiryProject(projectTitle);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0C0E] text-[#ECE7DE] selection:bg-[#C5A880]/30 selection:text-[#F7F5F0]">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* Hero Section with Cinematic Video Background */}
        <Hero />

        {/* Trust / Positioning Section */}
        <TrustSection />

        {/* Portfolio Section with 4 Concept Projects & Video Modal */}
        <PortfolioSection onSelectProject={handleSelectProject} />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section (How It Works) */}
        <ProcessSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* About Section (Behind the Frame) */}
        <AboutSection />

        {/* Contact Section with Interactive Form & Email Links */}
        <ContactSection initialProject={inquiryProject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
};
