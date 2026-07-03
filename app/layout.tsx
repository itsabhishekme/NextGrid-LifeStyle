import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";


import {
  Sparkles,
  ShieldCheck,
  ShoppingBag,
  Globe,
} from "lucide-react";

// 🌍 PREMIUM FONT CONFIGURATION
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// 🌐 WEBSITE CONFIG
const siteConfig = {
  name: "NextGrid Lifestyle",
  shortName: "NextGrid",
  description:
    "NextGrid Lifestyle is a premium destination for modern men's fashion, luxury streetwear, accessories, and elevated lifestyle essentials crafted for the new generation.",
  url: "https://nextgridstyle.com",
  ogImage: "https://nextgridstyle.com/og-image.jpg",
  creator: "NextGrid Team",

  keywords: [
    "NextGrid Lifestyle",
    "modern men fashion",
    "luxury streetwear",
    "fashion India",
    "premium menswear",
    "minimal clothing brand",
    "street style fashion",
    "urban luxury wear",
    "2026 fashion trends",
    "NextGrid India",

    // Brand Keywords
    "NextGrid",
    "NextGrid Lifestyle",
    "NextGrid Fashion",
    "NextGrid India",
    "NextGrid Menswear",
    "NextGrid Streetwear",
    "NextGrid Clothing",
    "NextGrid Apparel",
    "NextGrid Luxury",
    "NextGrid Premium",
    "NextGrid Originals",
    "NextGrid Collection",
    "NextGrid Studio",
    "NextGrid Essentials",
    "NextGrid Modern",
    "NextGrid Urban",
    "NextGrid Wear",
    "NextGrid Clothing Brand",
    "NextGrid Fashion Store",
    "NextGrid Online",

    // Men's Fashion
    "Men's Fashion",
    "Men's Clothing",
    "Men's Apparel",
    "Modern Menswear",
    "Premium Men's Clothing",
    "Luxury Menswear",
    "Contemporary Menswear",
    "Designer Menswear",
    "Fashion for Men",
    "Men's Style",
    "Stylish Men's Clothing",
    "Minimal Menswear",
    "Men's Wardrobe",
    "Fashion Essentials for Men",
    "Timeless Menswear",
    "Classic Men's Style",
    "Modern Gentleman",
    "Refined Men's Fashion",
    "Urban Menswear",
    "Premium Men's Fashion",

    // Streetwear
    "Luxury Streetwear",
    "Streetwear Brand",
    "Street Style",
    "Urban Streetwear",
    "Premium Streetwear",
    "Designer Streetwear",
    "Modern Streetwear",
    "Minimal Streetwear",
    "Streetwear Collection",
    "Street Fashion",
    "Luxury Urban Wear",
    "Streetwear Essentials",
    "Oversized Streetwear",
    "Contemporary Street Style",
    "Casual Streetwear",
    "Youth Streetwear",
    "Creative Street Fashion",
    "Fashion Forward Streetwear",
    "Streetwear Lifestyle",
    "Streetwear Culture",

    // Urban Luxury
    "Urban Luxury Wear",
    "Luxury Casual Wear",
    "Premium Lifestyle Clothing",
    "Modern Urban Fashion",
    "City Style",
    "Luxury Everyday Wear",
    "Contemporary Luxury",
    "Urban Chic",
    "Smart Casual Fashion",
    "Luxury Basics",
    "Minimal Luxury",
    "High-End Casual Wear",
    "Luxury Essentials",
    "Refined Street Style",
    "Urban Fashion Collection",

    // Minimal Fashion
    "Minimal Clothing",
    "Minimal Fashion",
    "Minimalist Wardrobe",
    "Capsule Wardrobe",
    "Timeless Fashion",
    "Essential Clothing",
    "Clean Aesthetic Fashion",
    "Scandinavian Style",
    "Neutral Fashion",
    "Minimal Outfit",
    "Everyday Essentials",
    "Simple Luxury",
    "Quiet Luxury",
    "Monochrome Fashion",
    "Minimal Lifestyle",

    // Clothing Categories
    "Men's T-Shirts",
    "Premium T-Shirts",
    "Oversized T-Shirts",
    "Graphic Tees",
    "Polo Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Linen Shirts",
    "Men's Jeans",
    "Slim Fit Jeans",
    "Straight Fit Jeans",
    "Cargo Pants",
    "Chinos",
    "Joggers",
    "Track Pants",
    "Shorts",
    "Hoodies",
    "Sweatshirts",
    "Jackets",
    "Bomber Jackets",
    "Varsity Jackets",
    "Overshirts",
    "Blazers",
    "Co-ord Sets",
    "Matching Sets",
    "Loungewear",
    "Activewear",
    "Gym Wear",
    "Athleisure",
    "Winter Collection",

    // Lifestyle
    "Modern Lifestyle",
    "Fashion Lifestyle",
    "Luxury Lifestyle",
    "Urban Lifestyle",
    "Men's Lifestyle",
    "Contemporary Living",
    "Creative Lifestyle",
    "Confident Style",
    "Personal Style",
    "Fashion Inspiration",
    "Wardrobe Essentials",
    "Style Guide",
    "Everyday Fashion",
    "Weekend Style",
    "Travel Style",

    // Fashion India
    "Indian Fashion Brand",
    "Fashion Brand India",
    "Premium Clothing India",
    "Luxury Fashion India",
    "Indian Streetwear",
    "Made in India Fashion",
    "Indian Menswear",
    "Indian Designer Brand",
    "Contemporary Indian Fashion",
    "Urban Fashion India",
    "Premium Apparel India",
    "Online Fashion India",
    "India Clothing Brand",
    "Fashion Marketplace India",
    "Designer Clothing India",

    // Ecommerce
    "Buy Men's Clothing Online",
    "Men's Fashion Online",
    "Luxury Fashion Store",
    "Premium Clothing Store",
    "Online Fashion Shopping",
    "Streetwear Online",
    "Designer Clothing Online",
    "Luxury Apparel Online",
    "Fashion Ecommerce",
    "Fashion Marketplace",
    "New Arrivals",
    "Seasonal Collection",
    "Limited Edition",
    "Online Boutique",
    "Fashion Store India",

    // Accessories
    "Men's Sneakers",
    "Luxury Sneakers",
    "Caps",
    "Backpacks",
    "Crossbody Bags",
    "Wallets",
    "Belts",
    "Sunglasses",
    "Minimal Watches",
    "Fashion Accessories",
    "Designer Accessories",
    "Streetwear Accessories",
    "Premium Footwear",
    "Casual Shoes",
    "Luxury Essentials",

    // Fashion Trends
    "2026 Fashion Trends",
    "Men's Fashion Trends 2026",
    "Streetwear Trends",
    "Luxury Fashion Trends",
    "Minimal Fashion Trends",
    "Trending Menswear",
    "Fashion Forecast",
    "Seasonal Fashion Trends",
    "Modern Outfit Ideas",
    "Contemporary Style",
    "Trend Forecasting",
    "Fashion Innovation",
    "Future of Fashion",
    "Next Generation Fashion",
    "Global Fashion Trends",

    // Sustainable Fashion
    "Sustainable Menswear",
    "Ethical Fashion",
    "Eco Friendly Clothing",
    "Organic Cotton Apparel",
    "Slow Fashion",
    "Responsible Fashion",
    "Conscious Fashion",
    "Premium Sustainable Clothing",
    "Minimal Waste Fashion",
    "Eco Luxury Fashion",

    // SEO & Discoverability
    "Best Men's Fashion Brand",
    "Best Streetwear Brand",
    "Luxury Streetwear India",
    "Premium Menswear India",
    "Designer Men's Clothing",
    "Luxury Men's Clothing Online",
    "Minimal Clothing Brand India",
    "Urban Luxury Fashion",
    "High Quality Menswear",
    "Premium Lifestyle Brand",
    "Modern Streetwear India",
    "Luxury Casual Fashion",
    "Online Menswear Store",
    "Affordable Luxury Fashion",
    "Premium Fashion Marketplace"
  ],

};

// 🧠 SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Premium Modern Fashion`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.creator,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.creator,
  publisher: siteConfig.name,

  category: "fashion",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "NextGrid Lifestyle Fashion Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@nextgrid",
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: ["/favicon.ico"],
  },

  verification: {
    google: "weGpqdMpx3QRhD0siqAtXZHzFfEqiYZs4-XTp08WmqA",
  },

  other: {
    "theme-color": "#000000",
    "color-scheme": "light",
  },
};

// 📱 MOBILE VIEWPORT SETTINGS
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
  colorScheme: "light",
};



// 🏗️ ROOT LAYOUT
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`
          ${inter.className}
          ${inter.variable}
          bg-white
          text-black
          antialiased
          overflow-x-hidden
          selection:bg-black
          selection:text-white
        `}
      >
        {/* ========================================================= */}
        {/* 🔥 GLOBAL TOP PROGRESS LINE */}
        {/* ========================================================= */}
        <div className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-gradient-to-r from-black via-neutral-700 to-black" />

        {/* ========================================================= */}
        {/* 🌈 BACKGROUND DECOR */}
        {/* ========================================================= */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-neutral-200/40 blur-3xl" />

          <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-neutral-300/30 blur-3xl" />
        </div>

        {/* ========================================================= */}
        {/* 🌐 MAIN APPLICATION */}
        {/* ========================================================= */}
        <div className="relative flex min-h-screen flex-col">
          {/* 🔝 NAVBAR */}
          <header className="sticky top-0 z-[100]">
            <Navbar />
          </header>

          {/* ========================================================= */}
          {/* 📄 PAGE CONTENT */}
          {/* ========================================================= */}
          <main
            id="main-content"
            className="
              relative
              flex-1
              focus:outline-none
            "
          >
            {/* 🌟 PAGE WRAPPER */}
            <div className="relative min-h-screen">
              {children}
            </div>
          </main>

          {/* ========================================================= */}
          {/* 🔻 FOOTER */}
          {/* ========================================================= */}
          <Footer />
        </div>

        {/* ========================================================= */}
        {/* 🧠 ORGANIZATION STRUCTURED DATA */}
        {/* ========================================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",

              name: siteConfig.name,

              url: siteConfig.url,

              logo: `${siteConfig.url}/logo.png`,

              image: siteConfig.ogImage,

              description: siteConfig.description,

              sameAs: [
                "https://instagram.com/nextgrid",
                "https://facebook.com/nextgrid",
                "https://twitter.com/nextgrid",
                "https://youtube.com/",
              ],

              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9999999999",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />

        {/* ========================================================= */}
        {/* 🛍️ WEBSITE STRUCTURED DATA */}
        {/* ========================================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",

              name: siteConfig.name,

              url: siteConfig.url,

              potentialAction: {
                "@type": "SearchAction",
                target: `${siteConfig.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ========================================================= */}
        {/* 🛒 BRAND STRUCTURED DATA */}
        {/* ========================================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",

              name: "NextGrid",

              slogan: "Modern Fashion for Modern Men",

              url: siteConfig.url,

              logo: `${siteConfig.url}/logo.png`,
            }),
          }}
        />

        {/* ========================================================= */}
        {/* ⚡ PERFORMANCE + ANALYTICS */}
        {/* ========================================================= */}
        <Analytics />


        {/* ========================================================= */}
        {/* 🎯 NOSCRIPT FALLBACK */}
        {/* ========================================================= */}
        <noscript>
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              background: "#000",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            Please enable JavaScript to experience the full
            functionality of NextGrid Lifestyle.
          </div>
        </noscript>
      </body>
    </html>
  );
}