import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore NextGrid Lifestyle blog – fashion trends, style guides, and modern men's lifestyle insights.",
  keywords: [
    "men fashion blog",
    "style guide men",
    "streetwear trends",
    "NextGrid blog",
  ],
};

export default function Blog() {
  return (
    <main>

      {/* 🔥 HERO SECTION */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NextGrid Blog
          </h1>
          <p className="text-lg text-gray-600">
            Discover the latest trends, styling tips, and modern fashion insights.
          </p>
        </div>
      </section>

      {/* 🧭 CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-4 text-sm">
        <button className="px-4 py-2 bg-black text-white rounded-full">
          All
        </button>
        <button className="px-4 py-2 border rounded-full hover:bg-black hover:text-white">
          Fashion
        </button>
        <button className="px-4 py-2 border rounded-full hover:bg-black hover:text-white">
          Lifestyle
        </button>
        <button className="px-4 py-2 border rounded-full hover:bg-black hover:text-white">
          Trends
        </button>
      </section>

      {/* ✨ FEATURED ARTICLE */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center mb-6">
          <span className="text-gray-500">Featured Image</span>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          The Future of Men’s Fashion in 2026
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl">
          Discover how minimalism, bold identity, and streetwear are shaping the future of modern men’s fashion.
        </p>

        <Link
          href="#"
          className="text-black font-medium underline"
        >
          Read Full Article →
        </Link>
      </section>

      {/* 📝 BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">
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

      {/* 🚀 CTA SECTION */}
      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Upgrade Your Style
          </h2>

          <p className="text-gray-300 mb-8">
            Explore our latest collections and redefine your fashion game.
          </p>

          <Link
            href="/shop"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

    </main>
  );
}