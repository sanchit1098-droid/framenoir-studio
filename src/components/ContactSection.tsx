"use client";

import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, HelpCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ContactSectionProps {
  initialProject?: string;
}

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  propertyLocation: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessName?: string;
  email?: string;
  propertyLocation?: string;
  projectType?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProject }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    businessName: "",
    email: "",
    propertyLocation: "",
    projectType: initialProject ? `Similar to ${initialProject}` : "Luxury Property Film (30-60s)",
    message: initialProject ? `Hello FrameNoir Studio, we have footage for our property and would like an edit similar to ${initialProject}.` : "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  // Update projectType if initialProject changes
  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: `Similar to ${initialProject}`,
        message: prev.message || `Hello FrameNoir Studio, we have footage for our property and would like an edit similar to ${initialProject}.`,
      }));
    }
  }, [initialProject]);

  const projectOptions = [
    "Luxury Property Film (30-60s)",
    "Social Media Reels (Vertical 9:16)",
    "Property Marketing Videos (Web & OTAs)",
    "Comprehensive Content Package",
    "Bespoke / Multi-Property Request",
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.businessName.trim()) {
      errs.businessName = "Please enter your business or property brand name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your business email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.propertyLocation.trim()) {
      errs.propertyLocation = "Please specify the property location (e.g., Bali, Dubai, Mallorca).";
    }
    if (!formData.projectType.trim()) {
      errs.projectType = "Please select a project category.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief summary of your project or footage status.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    try {
      if (formEndpoint && formEndpoint.startsWith("http")) {
        // Submit to user-configured Formspree or custom form endpoint
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            businessName: formData.businessName,
            email: formData.email,
            propertyLocation: formData.propertyLocation,
            projectType: formData.projectType,
            message: formData.message,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          const data = await response.json().catch(() => ({}));
          throw new Error(
            data?.error || data?.errors?.[0]?.message || "Failed to submit enquiry. Please try again or email us directly."
          );
        }
      } else {
        // Fallback / Development Simulation mode:
        // Demonstrates realistic validation, loading and success feedback
        await new Promise((resolve) => setTimeout(resolve, 1200));
        console.info(
          "Form submitted in demo/dev mode. To receive real submissions in your inbox, set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local",
          formData
        );
        setIsSuccess(true);
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message || "There was an issue sending your message. Please reach us directly at framenoirstudio01@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      propertyLocation: "",
      projectType: "Luxury Property Film (30-60s)",
      message: "",
    });
    setIsSuccess(false);
    setErrors({});
    setErrorMessage(null);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-[#0B0C0E] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Direct Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-medium">
                  INITIATE COLLABORATION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F5F0] font-light leading-[1.1] tracking-tight mb-6">
                Let&apos;s Create Something Exceptional
              </h2>

              <p className="text-base sm:text-lg text-[#D8D1C3] font-light leading-relaxed mb-10">
                Have a luxury property that deserves a cinematic presentation? Tell us about your project.
              </p>

              {/* Direct Communication Channels */}
              <div className="space-y-6 pt-6 border-t border-white/[0.08]">
                {/* Official Email Link */}
                <div className="group relative p-5 bg-[#121317] border border-white/[0.08] hover:border-[#C5A880]/40 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-[#C5A880]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#A39D90] font-medium">
                        Official Studio Email
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 text-[#A39D90] hover:text-[#C5A880] transition-colors"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-mono text-sm sm:text-base text-[#F7F5F0] hover:text-[#C5A880] transition-colors break-all block"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-[11px] text-[#787368] mt-1 font-light">
                    Direct inquiries, footage links and bespoke briefs
                  </p>
                </div>

                
                {/* Instagram Channel */}
                <a
                  href={siteConfig.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/[0.06] hover:border-[#C5A880]/30 transition-colors text-xs text-[#D8D1C3] group"
                >
                  <span className="tracking-wide">Follow Studio Updates on Instagram</span>
                  <span className="text-[#C5A880] font-mono group-hover:translate-x-0.5 transition-transform">
                    {siteConfig.socialLinks[0].label} →
                  </span>
                </a>
              </div>
            </div>

            {/* Operating Hours Notice */}
            <div className="pt-8 mt-8 border-t border-white/[0.06] text-xs text-[#A39D90] font-light">
              <p className="mb-1 text-[#ECE7DE] font-medium uppercase tracking-[0.15em] text-[10px]">
                Global Remote Availability
              </p>
              <p>{siteConfig.contact.hours}</p>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#121317] border border-white/[0.08] p-8 sm:p-12 cinematic-card-shadow">
              {/* Form Endpoint Guide Toggle (Helpful developer/owner tooltip) */}
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  onClick={() => setShowConfigGuide(!showConfigGuide)}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#787368] hover:text-[#C5A880] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Form Integration Guide</span>
                </button>
              </div>

              {showConfigGuide && (
                <div className="mb-8 p-4 bg-[#0B0C0E] border border-[#C5A880]/30 text-xs text-[#D8D1C3] space-y-2">
                  <p className="font-medium text-[#C5A880]">Connecting to Formspree or your API endpoint:</p>
                  <p className="text-[#A39D90]">
                    1. Create a free form at <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline text-[#F7F5F0]">formspree.io</a>.<br />
                    2. Add <code className="text-[#C5A880]">NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id</code> into your <code className="text-[#C5A880]">.env.local</code> or Vercel environment variables.<br />
                    3. Form submissions will immediately forward to <code className="text-[#C5A880]">{siteConfig.contact.email}</code>.
                  </p>
                </div>
              )}

              {isSuccess ? (
                /* Success State */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl text-[#F7F5F0]">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-[#A39D90] font-light max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to FrameNoir Studio. We will review your property details and contact you at <strong className="text-[#F7F5F0] font-normal">{formData.email}</strong> within 24 business hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-[#0B0C0E] bg-[#C5A880] hover:bg-[#D6BD96] transition-colors"
                    >
                      <span>Send Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-rose-950/40 border border-rose-500/40 text-xs text-rose-200 flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Submission Notice</p>
                        <p className="text-rose-300 font-light mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs uppercase tracking-[0.18em] text-[#D8D1C3] font-medium mb-2"
                      >
                        Full Name <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alistair Vance"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-[#0B0C0E] border text-sm text-[#F7F5F0] placeholder-[#55524B] focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-[#C5A880]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 font-light">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs uppercase tracking-[0.18em] text-[#D8D1C3] font-medium mb-2"
                      >
                        Business / Property Name <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Villa Samsara / Azure Hospitality"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-[#0B0C0E] border text-sm text-[#F7F5F0] placeholder-[#55524B] focus:outline-none transition-colors ${
                          errors.businessName
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-[#C5A880]"
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-rose-400 mt-1 font-light">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Business Email & Property Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-[0.18em] text-[#D8D1C3] font-medium mb-2"
                      >
                        Business Email <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@yourcompany.com"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-[#0B0C0E] border text-sm text-[#F7F5F0] placeholder-[#55524B] focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-[#C5A880]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 font-light">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="propertyLocation"
                        className="block text-xs uppercase tracking-[0.18em] text-[#D8D1C3] font-medium mb-2"
                      >
                        Property Location <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        id="propertyLocation"
                        name="propertyLocation"
                        value={formData.propertyLocation}
                        onChange={handleChange}
                        placeholder="e.g. Uluwatu, Bali / Dubai Marina"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-[#0B0C0E] border text-sm text-[#F7F5F0] placeholder-[#55524B] focus:outline-none transition-colors ${
                          errors.propertyLocation
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-[#C5A880]"
                        }`}
                      />
                      {errors.propertyLocation && (
                        <p className="text-[11px] text-rose-400 mt-1 font-light">{errors.propertyLocation}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs uppercase tracking-[0.18em] text-[#D8D1C3] font-medium mb-2"
                    >
                      Type of Project <span className="text-[#C5A880]">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-[#0B0C0E] border border-white/10 text-sm text-[#F7F5F0] focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      {projectOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0B0C0E] text-[#ECE7DE]">
                          {opt}
                        </option>
                      ))}
                      {initialProject && (
                        <option value={`Similar to ${initialProject}`} className="bg-[#0B0C0E] text-[#C5A880]">
                          Similar to {initialProject}
                        </option>
                      )}
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.18em] text-[#D8D1C3] font-medium mb-2"
                    >
                      Project Details & Footage Status <span className="text-[#C5A880]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the property, existing footage available (e.g. 4K drone passes, camera walkthroughs), and intended marketing platforms..."
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#0B0C0E] border text-sm text-[#F7F5F0] placeholder-[#55524B] focus:outline-none transition-colors ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-white/10 focus:border-[#C5A880]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 font-light">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase tracking-[0.22em] font-medium text-[#0B0C0E] bg-[#C5A880] hover:bg-[#D6BD96] transition-all duration-300 shadow-[0_4px_30px_rgba(197,168,128,0.25)] ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0B0C0E] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#787368] font-light">
                    By submitting this form, you agree to our basic handling of enquiry information solely for corresponding about your project. No footage is shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
