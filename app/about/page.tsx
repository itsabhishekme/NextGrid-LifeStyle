import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NextGrid Lifestyle",
  description:
    "Learn about NextGrid Lifestyle – a premium men's fashion brand focused on modern style, minimalism, and confidence.",
};

export default function About() {
  return (
    <main>

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            About NextGrid Lifestyle
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A modern fashion brand built for men who lead with
            confidence, clarity, and identity.
          </p>
        </div>
      </section>

      {/* 🧠 STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            NextGrid Lifestyle was born from a simple belief —
            fashion is more than clothing, it’s identity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We design for modern men who embrace simplicity,
            strength, and authenticity in every aspect of life.
          </p>
        </div>

        {/* IMAGE BLOCK */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
            Brand Image
          </div>
        </div>
      </section>

      {/* 🎯 MISSION / VISION */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To redefine modern fashion by combining minimalism,
              quality, and bold identity into everyday wear.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To become a global symbol of modern lifestyle and
              timeless design.
            </p>
          </div>

        </div>
      </section>

      {/* 💎 VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Quality First",
              desc: "Every piece is crafted with premium materials and attention to detail.",
            },
            {
              title: "Minimal Design",
              desc: "Clean, timeless designs that never go out of style.",
            },
            {
              title: "Confidence",
              desc: "Fashion that empowers you to express your true self.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition"
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

      {/* 👥 TRUST SECTION */}
      <section className="bg-gray-50 py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Modern Men
          </h2>

          <p className="text-gray-600 mb-10">
            Thousands of customers choose NextGrid Lifestyle for
            premium quality and timeless style.
          </p>

          <div className="flex justify-center gap-10 text-sm text-gray-500">
            <span>✔ Premium Fabric</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Easy Returns</span>
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Discover Your Style
          </h2>

          <p className="text-gray-300 mb-8">
            Explore our latest collections and redefine your wardrobe.
          </p>

          <Link
            href="/shop"
            className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

    </main>
  );
}