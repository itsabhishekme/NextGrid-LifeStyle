import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Crown,
  Sparkles,
  ShieldCheck,
  Gem,
  Star,
  Flame,
  CheckCircle2,
  Truck,
  ShoppingBag,
  Eye,
  HeartHandshake,
  Award,
  Quote,
  Users,
  Shirt,
  Watch,
  BadgeCheck,
  Layers3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About NextGrid Lifestyle",
  description:
    "Premium men's fashion brand inspired by modern luxury, minimalism, confidence, and timeless identity.",
};

const values = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Premium Quality",
    desc: "Luxury fabrics crafted with precision and comfort.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Modern Design",
    desc: "Minimal silhouettes inspired by modern culture.",
  },
  {
    icon: <Crown className="h-8 w-8" />,
    title: "Luxury Identity",
    desc: "Fashion created for confidence and individuality.",
  },
];

const stats = [
  {
    number: "50K+",
    label: "Happy Customers",
  },
  {
    number: "120+",
    label: "Premium Products",
  },
  {
    number: "4.9★",
    label: "Customer Rating",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

const collections = [
  {
    title: "Luxury Streetwear",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
  },
  {
    title: "Modern Essentials",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
  },
  {
    title: "Urban Luxury",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
  },
];

export default function About() {
  return (
    <main className="relative overflow-hidden bg-white text-black">

      {/* ====================================================== */}
      {/* 🌤 BACKGROUND */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-gray-200 blur-3xl opacity-70" />

        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-gray-300 blur-3xl opacity-60" />

      </div>

      {/* ====================================================== */}
      {/* 🚀 HERO */}
      {/* ====================================================== */}

      <section className="relative z-10 px-6 py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm">

              <Sparkles className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em] text-gray-700">
                Premium Men's Fashion
              </span>

            </div>

            <h1 className="mb-10 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">

              About
              <br />

              <span className="bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent">
                NextGrid
              </span>

            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Premium streetwear and luxury essentials crafted
              for modern men who lead with confidence,
              individuality, and timeless identity.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-2xl bg-black px-10 py-5 font-bold text-white transition-all duration-500 hover:scale-105"
              >
                Shop Collection

                <ArrowRight className="h-5 w-5" />

              </Link>

              <Link
                href="/collections"
                className="rounded-2xl border border-gray-300 bg-white px-10 py-5 font-semibold transition-all duration-500 hover:bg-black hover:text-white"
              >
                Explore More
              </Link>

            </div>

            {/* MINI FEATURES */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

                <Shirt className="mb-4 h-8 w-8" />

                <h3 className="mb-2 font-bold">
                  Modern Fashion
                </h3>

                <p className="text-sm text-gray-500">
                  Minimal premium aesthetics.
                </p>

              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

                <Watch className="mb-4 h-8 w-8" />

                <h3 className="mb-2 font-bold">
                  Luxury Identity
                </h3>

                <p className="text-sm text-gray-500">
                  Designed for confidence.
                </p>

              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

                <BadgeCheck className="mb-4 h-8 w-8" />

                <h3 className="mb-2 font-bold">
                  Trusted Brand
                </h3>

                <p className="text-sm text-gray-500">
                  Loved by thousands globally.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[45px] border border-gray-200 shadow-[0_40px_120px_rgba(0,0,0,0.15)]">

              <Image
                src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=2070"
                alt="NextGrid Fashion"
                width={1200}
                height={1500}
                priority
                unoptimized
                className="h-[750px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">

                <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">

                  <Crown className="h-4 w-4" />

                  <span className="text-sm">
                    Luxury Identity
                  </span>

                </div>

                <h2 className="text-5xl font-black leading-tight">
                  Modern
                  <br />
                  Fashion
                </h2>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-10 bottom-16 rounded-[35px] border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">

                <ShoppingBag className="h-7 w-7" />

              </div>

              <h3 className="mb-3 text-2xl font-black">
                Premium Brand
              </h3>

              <p className="max-w-[220px] text-sm leading-relaxed text-gray-500">
                Crafted for modern men who value confidence
                and timeless luxury.
              </p>

            </div>

            {/* FLOATING ICON */}
            <div className="absolute -right-5 top-10 rounded-3xl bg-black p-5 text-white shadow-2xl">

              <Flame className="h-8 w-8" />

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* ⚡ STATS */}
      {/* ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-8 rounded-[40px] border border-gray-200 bg-white p-12 shadow-2xl md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >

              <h3 className="mb-3 text-5xl font-black">
                {item.number}
              </h3>

              <p className="text-gray-500">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ====================================================== */}
      {/* 🧠 STORY */}
      {/* ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-36">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[45px] border border-gray-200 shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600"
              alt="Brand Story"
              width={1200}
              height={1500}
              unoptimized
              className="h-[700px] w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <Eye className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em]">
                Our Story
              </span>

            </div>

            <h2 className="mb-8 text-5xl font-black leading-tight md:text-7xl">

              Fashion
              <br />
              Meets Identity

            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              NextGrid Lifestyle was born from a vision to
              redefine men's fashion through confidence,
              minimalism, and modern luxury aesthetics.
            </p>

            <p className="mb-12 text-lg leading-relaxed text-gray-500">
              Every collection is designed to blend timeless
              elegance with elevated streetwear culture for
              modern lifestyles.
            </p>

            <div className="space-y-5">

              {[
                "Luxury Fashion Experience",
                "Premium Modern Streetwear",
                "Minimal Timeless Identity",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="rounded-full bg-black p-2 text-white">

                    <CheckCircle2 className="h-5 w-5" />

                  </div>

                  <p className="text-lg text-gray-700">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* 💎 VALUES */}
      {/* ====================================================== */}

      <section className="relative z-10 px-6 py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-24 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Core Values
            </p>

            <h2 className="text-5xl font-black md:text-7xl">
              Why NextGrid
            </h2>

          </div>

          <div className="grid gap-10 lg:grid-cols-3">

            {values.map((item, index) => (
              <div
                key={index}
                className="rounded-[35px] border border-gray-200 bg-white p-10 shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">

                  {item.icon}

                </div>

                <h3 className="mb-5 text-3xl font-black">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-500">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* 🛍 COLLECTIONS */}
      {/* ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-36">

        <div className="mb-24 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Featured Collections
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Premium Fashion
          </h2>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {collections.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[40px] border border-gray-200 shadow-2xl"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={1500}
                unoptimized
                className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">

                <h3 className="mb-5 text-4xl font-black">
                  {item.title}
                </h3>

                <button className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">

                  Explore

                  <ArrowRight className="h-5 w-5" />

                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}