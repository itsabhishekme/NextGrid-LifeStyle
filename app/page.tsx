import type { Metadata } from "next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore NextGrid Lifestyle – premium men's fashion, streetwear, and modern essentials designed for confident living.",
};

export default function Home() {
  return (
    <main>

      {/* 🔥 HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-white overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1520975922284-9e0ce8278c3a?auto=format&fit=crop&w=1600&q=80"
          alt="NextGrid modern men's fashion lifestyle"
          fill
          priority
          unoptimized
          className="object-cover scale-110"
        />

        {/* PREMIUM OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/90" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Redefine <span className="text-white/80">Modern Style</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Crafted for confidence, identity, and timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              Shop Now
            </Link>

            <Link
              href="/blog"
              className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Explore Trends
            </Link>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 text-xs text-gray-400 animate-bounce">
          Scroll ↓
        </div>
      </section>

      {/* 🛍️ TRENDING */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight">
            Trending Collection
          </h2>

          <Link href="/shop" className="text-sm underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ProductCard name="Denim Jacket" price="₹2499" />
          <ProductCard name="Classic Shirt" price="₹1499" />
          <ProductCard name="Sneakers" price="₹2999" />
        </div>
      </section>

      {/* 💎 LUXURY FEATURE STRIP */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Minimal. Bold. Timeless.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            NextGrid Lifestyle isn’t just fashion — it’s identity.
            Every design reflects modern masculinity and refined simplicity.
          </p>

          <Link
            href="/shop"
            className="bg-black text-white px-8 py-3 rounded-xl hover:opacity-90 transition"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* 🔥 FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14 text-center">
          Featured Picks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <ProductCard name="Leather Jacket" price="₹4999" />
          <ProductCard name="Minimal Watch" price="₹2999" />
          <ProductCard name="Slim Fit Jeans" price="₹1999" />
          <ProductCard name="Urban Sneakers" price="₹3499" />
        </div>
      </section>

      {/* 🧠 TRUST */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why NextGrid?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-gray-300">
            <div>
              <h3 className="text-white font-semibold mb-3">
                Premium Quality
              </h3>
              <p>Crafted with precision and premium fabrics.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">
                Modern Design
              </h3>
              <p>Clean aesthetics with bold identity.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">
                Fast Delivery
              </h3>
              <p>Quick & reliable shipping across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-28 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">
          Elevate Your Style Today
        </h2>

        <p className="text-gray-600 mb-10">
          Join a new generation of modern men.
        </p>

        <Link
          href="/shop"
          className="bg-black text-white px-10 py-4 rounded-xl font-medium hover:scale-105 transition"
        >
          Shop Now
        </Link>
      </section>

    </main>
  );
}