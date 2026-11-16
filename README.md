# FrameNoir Studio — Cinematic Luxury Property Video Editing

An international-grade, fully responsive web application for **FrameNoir Studio**, an independent post-production creative studio based in India providing remote cinematic video editing to international luxury villa operators, holiday-home management companies, resorts, and hospitality brands worldwide.

Designed with an aesthetic inspired by high-end architectural monographs and luxury hospitality maisons: dark charcoal noir, warm ivory typography, muted brass/gold accents, and generous whitespace.

---

## 🏛️ Brand Positioning & Identity

* **Brand Name**: FrameNoir Studio
* **Positioning**: *"We transform existing luxury property footage into cinematic marketing films."*
* **Official Studio Email**: `framenoirstudio01@gmail.com`
* **Studio Base**: India (Remote Worldwide Service across IST, CET, GMT, EST, and SGT)
* **Design Aesthetic**: Minimal, cinematic, editorial serif headings, dark mode luxury, 16:9 / 2.39:1 widescreen video frames.

---

## 📂 Project Architecture

```text
├── public/
│   ├── favicon.ico
│   ├── icon.svg             # FrameNoir gold monogram icon
│   ├── images/               # Drop your custom high-res property photos here
│   └── videos/               # Drop your custom MP4 property videos here
├── src/
│   ├── app/
│   │   ├── api/contact/      # Serverless contact submission API
│   │   ├── privacy/          # Dedicated Privacy & Footage Confidentiality page
│   │   ├── globals.css       # Tailwind v4 theme, luxury typography & utilities
│   │   ├── layout.tsx        # Cormorant Garamond & Plus Jakarta Sans typography
│   │   ├── page.tsx          # Homepage with JSON-LD Schema & metadata
│   │   ├── robots.ts         # Search engine crawl rules
│   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive header with scroll glassmorphism & mobile menu
│   │   ├── Hero.tsx          # Fullscreen cinematic video background with poster fallback
│   │   ├── TrustSection.tsx  # Positioning and 3 core value propositions
│   │   ├── PortfolioSection.tsx # 4 Concept project cards with hover video triggers
│   │   ├── VideoModal.tsx    # Interactive cinema theater player with custom controls
│   │   ├── ServicesSection.tsx  # 4 Tailored editing services & deliverables
│   │   ├── ProcessSection.tsx   # 4-Step remote editing workflow
│   │   ├── WhyChooseUsSection.tsx # 5 Pillars of luxury collaboration
│   │   ├── AboutSection.tsx  # "Behind the Frame" studio profile
│   │   ├── ContactSection.tsx # Validated project inquiry form + direct channels
│   │   ├── Footer.tsx        # Dynamic copyright, social links & direct mailto
│   │   ├── BackToTop.tsx     # Smooth scroll back to top button
│   │   └── StudioHome.tsx    # State coordinator between portfolio and inquiry form
│   └── data/
│       └── siteConfig.ts     # ⚡ CENTRAL CONFIGURATION FILE (Edit everything here!)
├── .env.example              # Sample environment variables
├── .env.local                # Local environment configuration
├── next.config.ts            # Image domain rules & Next.js config
├── package.json              # Dependencies and build scripts
└── tsconfig.json             # TypeScript configuration
```

---

## 🛠️ Step-by-Step Customization Guide

All project content, text, media paths, and contact information are centralized in:
👉 `src/data/siteConfig.ts`

### 1. How to Replace Videos with Your Own MP4 Files
1. Place your exported property video files inside the `/public/videos/` directory:
   - e.g., `/public/videos/bali-villa.mp4`
   - e.g., `/public/videos/maldives-resort.mp4`
   - e.g., `/public/videos/dubai-residence.mp4`
   - e.g., `/public/videos/french-riviera.mp4`
   - e.g., `/public/videos/hero-cinematic.mp4`
2. Open `src/data/siteConfig.ts`.
3. Locate the `projects` array or `hero` object.
4. Update the `videoUrl` property to match your file path:
   ```ts
   // In hero:
   videoUrl: "/videos/hero-cinematic.mp4",

   // In projects:
   {
     id: "tropical-villa-bali",
     title: "Tropical Villa",
     videoUrl: "/videos/bali-villa.mp4",
     ...
   }
   ```
5. *(Optional)* You can also use direct streaming MP4 links from AWS S3, Cloudflare R2, or Vimeo Pro direct MP4 links.

### 2. How to Replace Project Thumbnails and Photos
1. Place your high-resolution JPG or WebP images into `/public/images/`.
2. Open `src/data/siteConfig.ts`.
3. Update `thumbnail` or `posterImage`:
   ```ts
   thumbnail: "/images/bali-thumb.jpg",
   ```
   *(Remote URLs from Unsplash, Pexels, or your CDN are also supported directly).*

### 3. How to Update Email, WhatsApp, and Social Links
In `src/data/siteConfig.ts`:
* **Official Email**: Set under `contact.email`:
  ```ts
  email: "framenoirstudio01@gmail.com",
  ```
  *(This is already set and updates across the contact section, footer, and mailto links).*
* **WhatsApp**: Update your country code and phone number:
  ```ts
  whatsappNumber: "+91 98765 43210", // Your phone number
  whatsappUrl: "https://wa.me/919876543210?text=Hello%20FrameNoir%20Studio...",
  ```
* **Instagram & Socials**: Update URLs in the `socialLinks` array:
  ```ts
  socialLinks: [
    { name: "Instagram", url: "https://instagram.com/framenoirstudio", label: "@framenoirstudio" },
    ...
  ]
  ```

### 4. How to Connect the Contact Form (Formspree)
The contact form is pre-wired to submit to Formspree or any standard HTTP POST webhook.
1. Visit [https://formspree.io](https://formspree.io) and register a free account.
2. Click **"+ New Form"** and name it `"FrameNoir Studio Inquiries"`.
3. Set the notification recipient to `framenoirstudio01@gmail.com`.
4. Copy your unique Formspree URL (e.g., `https://formspree.io/f/mqkopzlw`).
5. In your project root, open `.env.local` (or create it) and add:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
6. When deploying to **Vercel**, add the same environment variable under **Settings → Environment Variables**.
*(If left unset, the form runs in local simulation mode with realistic loading and success validation).*

---

## 🚀 Running Locally

Ensure you have Node.js 18+ installed.

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

4. **Verify production build**:
   ```bash
   npm run build
   ```

---

## 🚢 Deploying to Vercel via GitHub

### Step 1: Push Code to a GitHub Repository
1. Initialize git in this directory (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "feat: FrameNoir Studio luxury video editing website"
   ```
2. Create a new repository on your GitHub account called `framenoir-studio`.
3. Link and push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/framenoir-studio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..." → "Project"**.
3. Select your `framenoir-studio` repository and click **Import**.
4. In the **Environment Variables** section, add:
   * `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app` (or custom domain)
   * `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/your_form_id`
5. Click **Deploy**.
6. Vercel will build and assign you a global high-performance CDN URL with automatic SSL certificates!

---

## ⚖️ Legal & Ethical Standards
* **Concept Projects**: All demo films are clearly designated with a `Concept Project` badge to ensure honest presentation without misrepresenting client commissions.
* **No Artificial Guarantees**: We do not claim fabricated years of operation, artificial awards, or unverified booking guarantees.
* **Footage Privacy**: Client footage is treated with strict confidentiality and never shared with third parties.
