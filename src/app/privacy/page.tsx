import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Mail, Shield, Lock, FileText } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | FrameNoir Studio",
  description: "Basic handling of enquiry form information and client property footage confidentiality at FrameNoir Studio.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#ECE7DE] selection:bg-[#C5A880]/30 selection:text-[#F7F5F0]">
      {/* Header Bar */}
      <header className="border-b border-white/[0.08] bg-[#0B0C0E]/90 backdrop-blur-md sticky top-0 z-30 py-6">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A39D90] hover:text-[#C5A880] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Studio</span>
          </Link>

          <Link href="/" className="flex flex-col items-end">
            <span className="font-serif text-lg tracking-[0.18em] text-[#F7F5F0]">
              FRAMENOIR
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#787368] -mt-1">
              STUDIO
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Title */}
        <div className="mb-12 pb-8 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C5A880]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
              DATA & PRIVACY
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#F7F5F0] font-light leading-tight mb-4">
            Privacy Policy & Enquiry Information
          </h1>

          <p className="text-sm text-[#A39D90] font-light">
            Last Updated: November 2026 • Basic enquiry information notice
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-sm sm:text-base text-[#D8D1C3] font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A880]" />
              <span>1. Information We Collect Through Enquiry Forms</span>
            </h2>
            <p>
              When you submit a project enquiry on the FrameNoir Studio website, we collect only the information you voluntarily provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#A39D90]">
              <li>Your full name and professional designation</li>
              <li>Your business or luxury property brand name</li>
              <li>Your business email address</li>
              <li>The geographical location of the property</li>
              <li>Your selected project type, footage description, and specific requests</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C5A880]" />
              <span>2. How We Use Your Information</span>
            </h2>
            <p>
              We process your submitted details solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#A39D90]">
              <li>Respond directly to your creative editing enquiries and request further project clarifications.</li>
              <li>Prepare transparent production proposals, deliverables checklists, and quotes.</li>
              <li>Establish remote project collaboration channels.</li>
            </ul>
            <p className="text-[#A39D90]">
              We do not sell, rent, monetize, or disclose your contact details or business information to third-party marketing companies.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C5A880]" />
              <span>3. Property Footage Confidentiality</span>
            </h2>
            <p>
              We acknowledge that luxury villas, private residences, and resort footage may capture sensitive architectural design, proprietary layouts, or private amenities.
            </p>
            <p className="text-[#A39D90]">
              Any video footage, raw drone media, or walkthrough passes provided to FrameNoir Studio for review or editing is treated as strictly confidential. Footage is accessed solely by our editing studio and is never shared, published, or repurposed without explicit written authorization from the property owner or marketing authority. Non-disclosure agreements (NDAs) can be executed upon request prior to footage transfer.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal">
              4. External Form Transmission
            </h2>
            <p className="text-[#A39D90]">
              Enquiry submissions may be securely routed through reputable third-party form processors such as Formspree or direct email relays to deliver your message to our studio inbox at <a href={`mailto:${siteConfig.contact.email}`} className="text-[#F7F5F0] hover:text-[#C5A880] underline">{siteConfig.contact.email}</a>. These processors handle data according to industry-standard transport encryption.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal">
              5. Legal Scope
            </h2>
            <p className="text-[#A39D90]">
              This policy provides a clear, honest overview of how our independent studio handles enquiry submissions. It is not an exhaustive legal representation and does not replace formal contractual agreements signed between FrameNoir Studio and clients upon project commission.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="p-8 bg-[#121317] border border-white/[0.08] space-y-3">
            <h3 className="font-serif text-xl text-[#F7F5F0]">
              Direct Privacy Enquiries
            </h3>
            <p className="text-sm text-[#A39D90]">
              If you have any questions about how your enquiry information or property footage is handled, please reach out to our official studio email:
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-mono text-sm text-[#C5A880] hover:underline inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5A880] hover:text-[#F7F5F0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to FrameNoir Studio Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
