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

// ✨ PREMIUM BADGES
const features = [
  {
    icon: <Sparkles className="h-4 w-4" />,
    text: "Luxury Streetwear",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    text: "Secure Shopping",
  },
  {
    icon: <ShoppingBag className="h-4 w-4" />,
    text: "Premium Collection",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    text: "Worldwide Style",
  },
];

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
        {/* ✨ ANNOUNCEMENT BAR */}
        {/* ========================================================= */}
        <div className="relative z-50 hidden border-b border-neutral-200 bg-black text-white lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-3 text-xs font-medium tracking-wide">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-neutral-200"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
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