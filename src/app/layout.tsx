import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://framenoir.studio"),
  title: "FrameNoir Studio | Luxury Property Cinematic Video Editing",
  description: "We transform existing luxury property footage into cinematic films and premium marketing content for villas, resorts and hospitality brands.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0C0E] text-[#E8E4DC] font-sans antialiased selection:bg-[#C5A880]/30 selection:text-[#F7F5F0]">
        {children}
      </body>
    </html>
  );
}
