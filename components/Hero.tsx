"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center justify-center text-white overflow-hidden"
      aria-label="NextGrid Lifestyle Hero Section"
    >
      {/* 🖼️ BACKGROUND IMAGE (Optimized) */}
      <Image
        src="https://images.unsplash.com/photo-1520975922284-9e0ce8278c3a?auto=format&fit=crop&w=1600&q=80"
        alt="NextGrid modern men's fashion lifestyle"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* 🌈 GRADIENT + OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* 🔲 GLASS OVERLAY (Depth effect) */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 max-w-5xl px-6 text-center">

        {/* 🧠 SEO HIDDEN TEXT */}
        <h2 className="sr-only">
          NextGrid Lifestyle – Premium Men's Fashion Brand in India
        </h2>

        {/* 🏷️ TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.2em] text-xs md:text-sm text-gray-300 mb-4"
        >
          New Collection 2026
        </motion.p>

        {/* 🔥 MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Elevate Your{" "}
          <span className="text-white/90">Everyday Style</span>
        </motion.h1>

        {/* 💬 DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Discover premium men’s fashion, streetwear, and lifestyle
          essentials crafted for confidence and modern identity.
        </motion.p>

        {/* 🎯 CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <Link
            href="/shop"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition"
          >
            Shop Now
          </Link>

          <Link
            href="/blog"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Explore Trends
          </Link>
        </motion.div>

        {/* 🧭 CATEGORY LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        >
          <Link href="/shop" className="hover:text-white hover:underline">
            Jackets
          </Link>
          <Link href="/shop" className="hover:text-white hover:underline">
            Sneakers
          </Link>
          <Link href="/shop" className="hover:text-white hover:underline">
            Streetwear
          </Link>
          <Link href="/shop" className="hover:text-white hover:underline">
            Accessories
          </Link>
        </motion.div>

        {/* ⭐ TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-gray-400"
        >
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
            ✔ Premium Quality
          </span>
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
            ✔ Fast Delivery
          </span>
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
            ✔ Easy Returns
          </span>
        </motion.div>

      </div>

      {/* 🔻 SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs animate-bounce">
        Scroll ↓
      </div>
    </section>
  );
}