/**
 * FrameNoir Studio — Central Configuration File
 * 
 * =======================================================================
 * HOW TO CUSTOMIZE THIS FILE:
 * =======================================================================
 * 1. OFFICIAL CONTACT & SOCIAL:
 *    - Update `contact.email` to change the studio email globally.
 *    - Update `socialLinks` with your actual profile links.
 * 
 * 2. PORTFOLIO & VIDEOS:
 *    - To use your own MP4 files: drop them into the `/public/videos/` folder 
 *      and set `videoUrl: '/videos/your-film.mp4'`.
 *    - To use your own custom thumbnails: drop them into `/public/images/` 
 *      and set `thumbnail: '/images/your-thumb.jpg'`.
 *    - Concept projects: The label "Concept Project" is intentionally retained 
 *      until you have genuine client commissions to display.
 * 
 * 3. FORMSPREE ENDPOINT:
 *    - Configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your `.env.local` or Vercel environment variables.
 * =======================================================================
 */

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  aspectRatio: string;
  badge: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  aspectRatios: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subheadline: string;
  description: string;
  origin: string;
  contact: {
  email: string;
  hours: string;
};
  socialLinks: {
    name: string;
    url: string;
    label: string;
  }[];
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    videoUrl: string;
    posterImage: string;
  };
  trust: {
    heading: string;
    text: string;
    valueProps: {
      title: string;
      description: string;
    }[];
  };
  projects: ProjectItem[];
  services: ServiceItem[];
  process: {
    heading: string;
    subheading: string;
    note: string;
    steps: ProcessStep[];
  };
  whyChooseUs: {
    heading: string;
    subheading: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
  about: {
    heading: string;
    eyebrow: string;
    paragraphs: string[];
    pillars: {
      title: string;
      description: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  name: "FrameNoir Studio",
  tagline: "We transform existing luxury property footage into cinematic marketing films.",
  subheadline: "Your Property. Our Cinematic Vision.",
  description: "Independent creative post-production studio transforming existing luxury villa and resort footage into cinematic promotional films for international hospitality brands.",
  origin: "India (Serving Global Luxury Brands Remotely)",
  
  contact: {
  email: "framenoirstudio01@gmail.com",
  hours: "Remote Studio — Mon to Sat (Operating across IST, CET, GMT, EST & SGT)",
},

  socialLinks: [
   {
      name: "Instagram",
      url: "https://instagram.com/studioframenoir", // REPLACE with your official Instagram handle
      label: "@studioframenoir",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@framenoirstudio-official", // REPLACE with your YouTube channel
      label: "youtube.com/@framenoirstudio-offiical",
    },
  ],

  hero: {
    eyebrow: "CINEMATIC LUXURY PROPERTY POST-PRODUCTION",
    headline: "Your Property. Our Cinematic Vision.",
    subheading: "We transform existing luxury property footage into cinematic films and premium marketing content for villas, resorts and hospitality brands.",
    // Sample high-definition video of luxury pool villa during sunset
    // To replace: Place your MP4 in /public/videos/hero-cinematic.mp4 and change path below to '/videos/hero-cinematic.mp4'
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-home-with-a-pool-during-sunset-42999-large.mp4",
    posterImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2070&q=85",
  },

  trust: {
    heading: "Premium Visual Storytelling for Luxury Hospitality",
    text: "From private villas in Bali to beachfront resorts in the Maldives, we help luxury hospitality brands present their properties through cinematic visual content.",
    valueProps: [
      {
        title: "Remote Editing",
        description: "Seamless post-production collaboration with villa operators and marketing managers across international time zones, with zero travel overhead.",
      },
      {
        title: "No Additional Filming Required",
        description: "Unlock the true potential of your existing 4K drone passes, walkthrough footage, and professional archives through thoughtful re-editing and grading.",
      },
      {
        title: "Content for Digital Marketing",
        description: "Precision-crafted horizontal flagship films for web headers and OTAs, alongside vertical cuts engineered for Instagram Reels and YouTube Shorts.",
      },
    ],
  },

  projects: [
    {
      id: "tropical-villa-bali",
      title: "Tropical Villa",
      location: "Bali, Indonesia",
      category: "Architectural & Landscape Film",
      duration: "0:45",
      aspectRatio: "16:9 / 2.39:1 Cinema",
      badge: "Concept Project",
      thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tropical-resort-with-wooden-cabins-and-pool-42861-large.mp4",
      description: "A serene visual pacing study harmonizing brutalist tropical architecture with jungle canopies, open-air living pavilions, and infinity water reflections.",
      highlights: [
        "Atmospheric color grading balancing jungle foliage and limestone",
        "Ambient natural sound design layered with acoustic strings",
        "Paced architectural reveal focusing on indoor-outdoor transitions",
      ],
    },
    {
      id: "oceanfront-retreat-maldives",
      title: "Oceanfront Retreat",
      location: "Baa Atoll, Maldives",
      category: "Overwater Villa & Lagoon Reel",
      duration: "0:50",
      aspectRatio: "16:9 Cinema & 9:16 Vertical",
      badge: "Concept Project",
      thumbnail: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-resort-in-the-maldives-43003-large.mp4",
      description: "Capturing the luminous crystalline blues and warm timber decks of an ultra-luxury overwater sanctuary from golden hour through twilight.",
      highlights: [
        "Refined aerial sequencing highlighting lagoon isolation",
        "Sunset sky enhancement with balanced turquoise water tone curves",
        "Subtle motion stabilization on dynamic water craft footage",
      ],
    },
    {
      id: "modern-luxury-residence-dubai",
      title: "Modern Luxury Residence",
      location: "Palm Jumeirah, Dubai",
      category: "Architectural Showcase & Walkthrough",
      duration: "0:55",
      aspectRatio: "16:9 4K Master",
      badge: "Concept Project",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-architectural-home-with-pool-and-palm-trees-42998-large.mp4",
      description: "A sharp, high-contrast edit emphasizing monumental glass facades, Italian marble textures, and twilight cityscape skyline perspectives.",
      highlights: [
        "Sleek architectural rhythm synced to refined electronic ambient score",
        "Fine detail preservation in low-light interior marble and brass fixtures",
        "Clean graphic title placement tailored for luxury property listings",
      ],
    },
    {
      id: "mediterranean-estate-french-riviera",
      title: "Mediterranean Estate",
      location: "Cap d'Antibes, French Riviera",
      category: "Historic Estate & Sunset Film",
      duration: "0:60",
      aspectRatio: "16:9 / 2.39:1 Cinema",
      badge: "Concept Project",
      thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-panoramic-view-of-a-villa-by-the-sea-during-sunset-42997-large.mp4",
      description: "Timeless Côte d'Azur elegance brought to life through sun-drenched terrace compositions, ancient olive groves, and panoramic Mediterranean coastal vistas.",
      highlights: [
        "Warm Kodak film-inspired color profile with gentle highlight roll-off",
        "Rich sensory audio design featuring cicadas, gentle surf, and breeze",
        "Story-driven progression from daytime warmth to evening candlelit dinner",
      ],
    },
  ],

  services: [
    {
      id: "luxury-property-films",
      number: "01",
      title: "Luxury Property Films",
      tagline: "Flagship Cinematic Showcases",
      description: "30–60 second cinematic promotional videos highlighting architecture, interiors, amenities and surroundings. Crafted with editorial pacing, custom color grading, and evocative sound design.",
      deliverables: [
        "30–60s master showcase film",
        "Custom cinematic color grading & audio mastering",
        "Licensed atmospheric music tailored to property tone",
        "Subtle branded title cards and property coordinates",
      ],
      aspectRatios: "16:9 (4K UHD) / 2.39:1 Anamorphic crop",
    },
    {
      id: "social-media-reels",
      number: "02",
      title: "Social Media Reels",
      tagline: "High-Engagement Vertical Cuts",
      description: "Short vertical videos for Instagram Reels, Facebook and YouTube Shorts. Engineered with strong opening hooks, dynamic transitions, and modern pacing that captivates high-net-worth travelers.",
      deliverables: [
        "15–30s high-retention vertical edits",
        "Fast-paced architectural cutdowns & amenity spotlights",
        "Platform-optimised audio mixing & optional captions",
        "Multiple hook variations for A/B testing",
      ],
      aspectRatios: "9:16 Vertical (1080x1920)",
    },
    {
      id: "property-marketing-videos",
      number: "03",
      title: "Property Marketing Videos",
      tagline: "Direct-Booking & Listing Films",
      description: "Promotional content for property websites, direct booking websites and digital advertising campaigns. Designed to guide prospective guests through the spatial flow and luxury lifestyle experience.",
      deliverables: [
        "Website hero video background loops (no audio)",
        "Comprehensive walkthrough marketing edits",
        "Digital ad cutdowns for Meta & YouTube ad placements",
        "Clean, unbranded cuts for MLS and private broker networks",
      ],
      aspectRatios: "16:9, 1:1 Square & 9:16 Vertical",
    },
    {
      id: "content-packages",
      number: "04",
      title: "Content Packages",
      tagline: "Comprehensive Multi-Format Deliveries",
      description: "Multiple edited videos and different aspect ratios created from the same authorised footage. A complete multi-channel visual content bank from a single footage repository.",
      deliverables: [
        "1x Main 60s Cinematic Property Film",
        "3x Distinct 15–30s Vertical Social Reels",
        "1x Website Ambient Loop (seamless 10-15s)",
        "Stills gallery extracted from 4K video frames",
      ],
      aspectRatios: "Full Multi-Platform Delivery Suite",
    },
  ],

  process: {
    heading: "An Effortless Remote Editing Process",
    subheading: "A seamless 4-step creative workflow tailored for international hospitality operators.",
    note: "Additional on-site filming is not required when suitable existing footage is available. We work directly with your existing 4K drone passes, camera walkthroughs, and raw video files.",
    steps: [
      {
        step: "01",
        title: "Share Your Footage",
        description: "The client shares existing property footage through an agreed file-sharing service.",
        details: "Upload raw footage, drone passes, interior video clips, or archival b-roll via Google Drive, Dropbox, WeTransfer, or Frame.io. No expensive on-site crew scheduling needed.",
      },
      {
        step: "02",
        title: "Creative Direction",
        description: "We discuss the property's identity, target audience, desired style and intended platform.",
        details: "We align on your visual tone (e.g. moody dusk, sun-drenched minimalism, or vibrant tropical luxury), key architectural focal points, brand guidelines, and target distribution channels.",
      },
      {
        step: "03",
        title: "Cinematic Editing",
        description: "We edit the footage with refined pacing, colour grading, sound design and properly licensed music.",
        details: "Our studio handles frame-by-frame pacing, custom color correction and LUT application, natural ambient audio layering (water, wind, atmosphere), and fully cleared commercial soundtracks.",
      },
      {
        step: "04",
        title: "Final Delivery",
        description: "The finished videos are delivered in agreed formats and resolutions.",
        details: "Receive high-bitrate master files ready for web embedding, direct-booking landing pages, and broadcast, plus mobile-optimized exports for Instagram Reels and TikTok.",
      },
    ],
  },

  whyChooseUs: {
    heading: "Luxury Visuals. Flexible Collaboration.",
    subheading: "Dedicated post-production partnership designed around the needs of luxury hospitality brands.",
    reasons: [
      {
        title: "Remote Collaboration Across International Time Zones",
        description: "Based in India and operating seamlessly across European, Middle Eastern, Asian, and American time zones with prompt communication and structured milestone updates.",
      },
      {
        title: "A Focus on Luxury Hospitality Aesthetics",
        description: "We specialize exclusively in high-end architecture and villa presentation. We understand the visual cues, negative space, and lighting standards expected by ultra-high-net-worth guests.",
      },
      {
        title: "Editing from Client-Provided Authorised Footage",
        description: "Maximize your existing visual assets without the cost, travel permits, weather risks, and operational disruption of bringing camera crews to your property.",
      },
      {
        title: "Platform-Specific Video Formats",
        description: "Every frame is thoughtfully formatted for its destination — from 2.39:1 widescreen cinema for large desktop displays to 9:16 vertical cuts for high-retention mobile consumption.",
      },
      {
        title: "Clear Communication & Agreed Revisions",
        description: "Transparent production timelines, timecoded review links, and structured revision rounds to ensure the final films reflect your exact brand standards.",
      },
    ],
  },

  about: {
    heading: "Behind the Frame",
    eyebrow: "OUR PHILOSOPHY",
    paragraphs: [
      "FrameNoir Studio is an independent creative video editing studio focused on cinematic content for luxury properties and hospitality brands.",
      "Our approach combines visual storytelling, thoughtful editing and refined presentation to help properties communicate their atmosphere, design and guest experience.",
      "Working remotely, we collaborate with property operators and hospitality businesses using their existing authorised footage.",
    ],
    pillars: [
      {
        title: "Architectural Respect",
        description: "We let space breathe. Cuts are measured to celebrate architectural symmetry, material textures, and natural ambient light.",
      },
      {
        title: "Atmospheric Grading",
        description: "Subtle filmic tones that highlight golden-hour warmth, turquoise water clarity, and the gentle shadows of twilight.",
      },
      {
        title: "Sensory Soundscapes",
        description: "Layered environmental sound design — palm breeze, gentle water lap, acoustic elegance — that evokes the physical feeling of being there.",
      },
    ],
  },
};
