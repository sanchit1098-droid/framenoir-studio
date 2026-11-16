import type { Metadata } from "next";
import { StudioHome } from "@/components/StudioHome";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "FrameNoir Studio | Luxury Property Cinematic Video Editing",
  description:
    "We transform existing luxury property footage into cinematic marketing films for villas, resorts and international hospitality brands. Remote post-production based in India.",
  keywords: [
    "luxury property video editing",
    "cinematic villa video",
    "resort marketing film",
    "luxury real estate video editing",
    "hospitality video post-production",
    "remote video editor luxury villas",
    "Bali villa video editing",
    "Maldives resort video editing",
    "FrameNoir Studio",
  ],
  authors: [{ name: "FrameNoir Studio" }],
  openGraph: {
    title: "FrameNoir Studio | Luxury Property Cinematic Video Editing",
    description:
      "We transform existing luxury property footage into cinematic films and premium marketing content for villas, resorts and hospitality brands.",
    url: "https://framenoir.studio",
    siteName: "FrameNoir Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "FrameNoir Studio — Cinematic Luxury Property Video Editing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrameNoir Studio | Luxury Property Cinematic Video Editing",
    description:
      "We transform existing luxury property footage into cinematic films and premium marketing content for villas, resorts and hospitality brands.",
    images: ["https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    url: "https://framenoir.studio",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Worldwide (Remote)",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Property Video Editing Services",
      itemListElement: siteConfig.services.map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StudioHome />
    </>
  );
}
