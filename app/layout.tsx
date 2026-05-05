import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; // ✅ ADDED

// 🔤 FONT (Premium Look)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgridstyle.com"),

  title: {
    default: "NextGrid Lifestyle | Modern Men Fashion",
    template: "%s | NextGrid Lifestyle",
  },

  description:
    "NextGrid Lifestyle is a premium destination for modern men's fashion, streetwear, and lifestyle essentials. Elevate your style with curated collections.",

  keywords: [
    "men fashion",
    "nextgrid lifestyle",
    "streetwear India",
    "modern men clothing",
    "fashion brand India",
    "mens style 2026",
  ],

  authors: [{ name: "NextGrid Team" }],
  creator: "NextGrid",
  publisher: "NextGrid",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://nextgridstyle.com",
  },

  openGraph: {
    title: "NextGrid Lifestyle",
    description:
      "Premium men's fashion and lifestyle brand. Discover modern streetwear and timeless essentials.",
    url: "https://nextgridstyle.com",
    siteName: "NextGrid Lifestyle",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid Lifestyle",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NextGrid Lifestyle",
    description:
      "Premium men's fashion and lifestyle brand.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "weGpqdMpx3QRhD0siqAtXZHzFfEqiYZs4-XTp08WmqA",
  },
};

// 📱 Viewport (Mobile Optimization)
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black antialiased`}
      >
        {/* 🔥 SCROLL PROGRESS BAR */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-black/80 z-[999]" />

        {/* 🔝 GLOBAL WRAPPER */}
        <div className="flex min-h-screen flex-col">

          {/* 🔝 NAVBAR */}
          <Navbar />

          {/* 🌐 MAIN CONTENT */}
          <main
            id="main-content"
            className="flex-1 focus:outline-none"
          >
            {children}
          </main>

          {/* 🔻 FOOTER */}
          <Footer />

        </div>

        {/* 🧠 STRUCTURED DATA (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NextGrid Lifestyle",
              url: "https://nextgridstyle.com",
              logo: "https://nextgridstyle.com/logo.png",
              sameAs: [
                "https://instagram.com/",
                "https://facebook.com/",
                "https://twitter.com/",
              ],
            }),
          }}
        />

        {/* ✅ VERCEL ANALYTICS */}
        <Analytics />

      </body>
    </html>
  );
}