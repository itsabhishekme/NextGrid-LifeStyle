import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "NextGrid Journal",
  description:
    "Explore luxury fashion, premium streetwear, modern aesthetics, and curated lifestyle inspiration from NextGrid Lifestyle.",
};

const categories = [
  "All",
  "Fashion",
  "Streetwear",
  "Luxury",
  "Lifestyle",
  "Accessories",
  "Sneakers",
  "Minimal",
];

const featuredPosts = [
  {
    title: "The Future Of Men’s Luxury Fashion",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2000&auto=format&fit=crop",
    tag: "Featured",
  },
  {
    title: "Minimal Streetwear Aesthetics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    title: "Luxury Fashion Inspiration",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    tag: "Style Guide",
  },
];

const trendingArticles = [
  {
    title: "Modern Fashion Identity",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Rise Of Luxury Streetwear",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Minimal Accessories Guide",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-white text-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-50 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gray-200 blur-3xl opacity-70" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gray-300 blur-3xl opacity-60" />

      </div>

      {/* HERO */}
      <section className="relative px-6 pb-28 pt-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <Sparkles size={16} />

                <span className="text-xs uppercase tracking-[0.3em] text-gray-700">
                  NextGrid Journal
                </span>

              </div>

              <h1 className="mb-8 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">

                Fashion
                <br />

                <span className="text-gray-400">
                  Stories &
                </span>

                <br />

                Inspiration

              </h1>

              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
                Explore modern streetwear, luxury aesthetics,
                premium lifestyle inspiration, and curated fashion insights.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">

                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 font-bold text-white transition duration-500 hover:scale-105"
                >
                  Explore Fashion

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  href="#latest"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-300 bg-white px-8 py-4 font-semibold transition duration-500 hover:bg-black hover:text-white"
                >
                  Latest Articles
                </Link>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:block">

              <div className="relative overflow-hidden rounded-[40px] border border-gray-200 shadow-2xl">

                <Image
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  width={700}
                  height={900}
                  priority
                  className="h-[720px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 max-w-lg text-white">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">

                    <TrendingUp size={16} />

                    <span className="text-sm">
                      Featured Article
                    </span>

                  </div>

                  <h2 className="mb-5 text-4xl font-black leading-tight">
                    The Future Of Premium Streetwear
                  </h2>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    Read Story

                    <ArrowRight size={16} />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORY */}
      <section className="px-6 pb-14">

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-6 py-3 text-sm font-medium transition duration-500 ${
                index === 0
                  ? "bg-black text-white"
                  : "border border-gray-300 bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

    </main>
  );
}