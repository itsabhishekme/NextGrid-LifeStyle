import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Required for static export (APK / Capacitor)
  output: "export",

  // ✅ Fix for Image component (no server in export mode)
  images: {
    unoptimized: true,
  },

  // ✅ Optional but recommended (prevents trailing slash issues in Android WebView)
  trailingSlash: true,

  // ✅ Avoid strict React double-render issues in production builds
  reactStrictMode: false,
};

export default nextConfig;