import type { Metadata } from "next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"; // ✅ ADDED

export const metadata: Metadata = {
  title: "NextGrid Lifestyle – Premium Men's Fashion",
  description:
    "Luxury men's fashion, streetwear, and timeless essentials crafted for modern identity.",
};

export default function Home() {
  return (
    <>
      <main className="relative text-black overflow-hidden">

        {/* 🌅 LIGHT PREMIUM BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2070"
            alt="men fashion editorial"
            fill
            priority
            unoptimized
            className="object-cover"
          />

          {/* SOFT LIGHT OVERLAY (NOT BLACK) */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        </div>

        {/* 🔥 HERO */}
        <section className="min-h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-black">
              Elevate Your <span className="text-gray-600">Style</span>
            </h1>

            <p className="text-gray-700 mb-10 text-lg">
              Built for modern men who lead with confidence.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/shop"
                className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Shop Now
              </Link>

              <Link
                href="/collections"
                className="border border-black px-10 py-4 rounded-xl hover:bg-black hover:text-white transition"
              >
                Collections
              </Link>
            </div>

          </div>
        </section>

        {/* 🧥 CATEGORY */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Shop Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["Essentials", "Streetwear", "Luxury"].map((cat, i) => (
              <div
                key={i}
                className="relative h-[420px] rounded-3xl overflow-hidden group"
              >
                <Image
                  src={`https://source.unsplash.com/600x800/?men,${cat},fashion`}
                  alt={cat}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition" />

                <div className="absolute bottom-6 left-6 text-black">
                  <h3 className="text-2xl font-bold">{cat}</h3>
                  <p className="text-sm opacity-70">Explore →</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 TRENDING */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-black">Trending Now</h2>
            <Link href="/shop" className="underline text-sm text-black">
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <ProductCard name="Denim Jacket" price="₹2499" />
            <ProductCard name="Classic Shirt" price="₹1499" />
            <ProductCard name="Urban Sneakers" price="₹3499" />
          </div>
        </section>

        {/* 💎 STORY */}
        <section className="py-32 text-center px-6">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-4xl font-bold mb-6 text-black">
              Designed for Identity
            </h2>

            <p className="text-gray-700 mb-10 leading-relaxed">
              This isn’t just clothing — it’s a reflection of who you are.
              Minimal. Bold. Timeless.
            </p>

            <Link
              href="/about"
              className="bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
            >
              Our Story
            </Link>

          </div>
        </section>

        {/* 🔥 FEATURED */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Featured Collection
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            <ProductCard name="Leather Jacket" price="₹4999" />
            <ProductCard name="Slim Fit Jeans" price="₹1999" />
            <ProductCard name="Minimal Watch" price="₹2999" />
            <ProductCard name="Oversized Hoodie" price="₹1799" />
          </div>
        </section>

        {/* 🧠 TRUST */}
        <section className="py-28 text-center">
          <h2 className="text-4xl font-bold mb-14 text-black">
            Why NextGrid
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-gray-700 max-w-6xl mx-auto px-6">
            <div>
              <h3 className="font-semibold mb-3">Premium Fabric</h3>
              <p>Luxury feel with durability.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Modern Design</h3>
              <p>Minimal yet bold identity.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Fast Delivery</h3>
              <p>Across India.</p>
            </div>
          </div>
        </section>

        {/* 🚀 CTA */}
        <section className="py-32 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Upgrade Your Wardrobe
          </h2>

          <p className="text-gray-700 mb-10">
            Join the next generation of modern men.
          </p>

          <Link
            href="/shop"
            className="bg-black text-white px-12 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Shopping
          </Link>
        </section>

      </main>

      {/* ✅ VERCEL ANALYTICS */}
      <Analytics />
    </>
  );
}