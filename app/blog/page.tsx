import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NextGrid Blog",
  description:
    "Explore NextGrid Lifestyle blog – fashion trends, style guides, and modern men's lifestyle insights.",
};

export default function Blog() {
  return (
    <main className="relative overflow-hidden text-black">

      {/* 🌅 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070"
          alt="blog fashion"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* 🔥 HERO */}
      <section className="py-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            NextGrid Journal
          </h1>
          <p className="text-lg text-gray-700">
            Fashion insights, trends, and modern lifestyle stories.
          </p>
        </div>
      </section>

      {/* 🧭 CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-4">
        {["All", "Fashion", "Lifestyle", "Trends"].map((cat, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full text-sm transition ${
              i === 0
                ? "bg-black text-white"
                : "bg-white/60 backdrop-blur border hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* ✨ FEATURED ARTICLE */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl group">
          <Image
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070"
            alt="featured article"
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 text-white max-w-xl">
            <p className="text-sm uppercase tracking-wider mb-2">
              Featured Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of Men’s Fashion in 2026
            </h2>

            <Link
              href="#"
              className="inline-block bg-white text-black px-6 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Read Article →
            </Link>
          </div>
        </div>

      </section>

      {/* 📝 BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <BlogCard title="Men Fashion 2026" />
          <BlogCard title="Minimal Style Guide" />
          <BlogCard title="Streetwear Trends" />
          <BlogCard title="Best Outfit Ideas" />
          <BlogCard title="Wardrobe Essentials" />
          <BlogCard title="Luxury vs Streetwear" />
        </div>
      </section>

      {/* 🧠 NEWSLETTER */}
      <section className="py-24 text-center px-6">
        <div className="max-w-xl mx-auto p-10 rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl">

          <h2 className="text-3xl font-bold mb-4">
            Stay Inspired
          </h2>

          <p className="text-gray-600 mb-6">
            Get weekly fashion insights and style tips.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Upgrade Your Style
        </h2>

        <p className="text-gray-700 mb-10">
          Explore our latest collections and redefine your fashion.
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