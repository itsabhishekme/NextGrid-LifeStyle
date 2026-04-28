import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About NextGrid Lifestyle",
  description:
    "Learn about NextGrid Lifestyle – a premium men's fashion brand focused on modern style, minimalism, and confidence.",
};

export default function About() {
  return (
    <main className="relative overflow-hidden text-black">

      {/* 🌅 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070"
          alt="fashion background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* 🔥 HERO */}
      <section className="py-32 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About NextGrid
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A premium fashion experience designed for modern men who lead
            with confidence and identity.
          </p>
        </div>
      </section>

      {/* 🧠 STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            NextGrid Lifestyle was born from a simple belief — fashion is not just clothing, it's identity.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We design for men who value clarity, confidence, and timeless style.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=2070"
            alt="brand story"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 🎯 MISSION / VISION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">

        <div className="p-10 rounded-3xl backdrop-blur-xl bg-white/60 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To redefine modern fashion through minimalism, quality, and identity.
          </p>
        </div>

        <div className="p-10 rounded-3xl backdrop-blur-xl bg-white/60 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To become a global symbol of timeless fashion and modern lifestyle.
          </p>
        </div>

      </section>

      {/* 💎 VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Quality First",
              desc: "Premium materials crafted with precision.",
            },
            {
              title: "Minimal Design",
              desc: "Clean, timeless aesthetics.",
            },
            {
              title: "Confidence",
              desc: "Style that empowers identity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg hover:scale-105 transition"
            >
              <h4 className="font-semibold mb-3 text-lg">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 👥 TRUST */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Trusted by Modern Men
        </h2>

        <p className="text-gray-700 mb-10">
          Thousands trust NextGrid Lifestyle for premium quality and timeless fashion.
        </p>

        <div className="flex justify-center gap-10 text-sm text-gray-600">
          <span>✔ Premium Fabric</span>
          <span>✔ Fast Delivery</span>
          <span>✔ Easy Returns</span>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Discover Your Style
        </h2>

        <p className="text-gray-700 mb-10">
          Explore our latest collections and redefine your wardrobe.
        </p>

        <Link
          href="/shop"
          className="bg-black text-white px-10 py-4 rounded-xl font-medium hover:scale-105 transition shadow-lg"
        >
          Shop Now
        </Link>
      </section>

    </main>
  );
}