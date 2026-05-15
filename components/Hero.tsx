"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Star,
  ShoppingBag,
  Sparkles,
  Crown,
  Heart,
  ShieldCheck,
  Truck,
  Gem,
  Flame,
  Play,
  CheckCircle2,
  Eye,
  Award,
  BadgeCheck,
  Shirt,
  Watch,
  Glasses,
  Layers3,
  ChevronRight,
} from "lucide-react";

const heroStats = [
  {
    number: "25K+",
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

const categories = [
  {
    title: "Luxury Streetwear",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600",
    icon: <Shirt className="h-6 w-6" />,
  },
  {
    title: "Premium Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1600",
    icon: <Watch className="h-6 w-6" />,
  },
  {
    title: "Modern Eyewear",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600",
    icon: <Glasses className="h-6 w-6" />,
  },
];

const gallery = [
  {
    title: "Modern Identity",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2200",
  },
  {
    title: "Luxury Wear",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200",
  },
  {
    title: "Street Culture",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
  },
  {
    title: "Premium Sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },
];

const products = [
  {
    title: "Luxury Hoodie",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
  },
  {
    title: "Minimal Jacket",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
  },
  {
    title: "Urban Sneakers",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },
  {
    title: "Classic Tee",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-neutral-200/60 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-neutral-300/40 blur-3xl" />
      </div>

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/10
                bg-black
                px-6
                py-3
                text-white
              "
            >
              <Crown className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em]">
                Premium Men's Fashion
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                mb-8
                text-6xl
                font-black
                leading-[0.9]
                tracking-tight
                sm:text-7xl
                md:text-8xl
                xl:text-[9rem]
              "
            >
              Fashion
              <br />

              <span className="bg-gradient-to-r from-black via-neutral-500 to-black bg-clip-text text-transparent">
                Meets
              </span>

              <br />

              Luxury
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                mb-12
                max-w-2xl
                text-lg
                leading-relaxed
                text-neutral-600
                md:text-xl
              "
            >
              Premium streetwear and timeless essentials
              crafted for modern men with elevated identity,
              confidence, and luxury aesthetics.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <Link
                href="/shop"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-black
                  px-10
                  py-5
                  font-bold
                  text-white
                  transition-all
                  duration-500
                  hover:scale-105
                "
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/collections"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  px-10
                  py-5
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-500
                  hover:bg-black
                  hover:text-white
                "
              >
                Explore Collection
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {heroStats.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-black/10
                    bg-white
                    p-6
                    shadow-xl
                  "
                >
                  <h3 className="mb-2 text-4xl font-black">
                    {item.number}
                  </h3>

                  <p className="text-sm text-neutral-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative h-[820px] w-[560px] overflow-hidden rounded-[45px] shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2200"
                alt="Fashion"
                fill
                priority
                unoptimized
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-2xl">
                  <Sparkles className="h-4 w-4" />

                  <span className="text-sm">
                    Premium Edition
                  </span>
                </div>

                <h2 className="text-5xl font-black leading-tight">
                  Urban
                  <br />
                  Streetwear
                </h2>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                -left-12
                bottom-20
                rounded-[35px]
                border
                border-black/10
                bg-white
                p-8
                shadow-2xl
              "
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                <ShoppingBag className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-2xl font-black">
                New Arrival
              </h3>

              <p className="max-w-[220px] text-sm leading-relaxed text-neutral-500">
                Luxury collections designed for modern men.
              </p>
            </div>

            {/* FLOATING ICON */}
            <div className="absolute -right-5 bottom-10 rounded-3xl bg-black p-5 text-white shadow-2xl">
              <Flame className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CATEGORY SECTION */}
      {/* ====================================================== */}

      <section className="relative px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black px-6 py-3 text-white">
              <Layers3 className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em]">
                Categories
              </span>
            </div>

            <h2 className="text-5xl font-black md:text-7xl">
              Explore Style
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {categories.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  shadow-2xl
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1400}
                  height={1600}
                  unoptimized
                  className="
                    h-[650px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 text-white">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                    {item.icon}
                  </div>

                  <h3 className="mb-4 text-4xl font-black">
                    {item.title}
                  </h3>

                  <button
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-white
                      px-6
                      py-3
                      font-semibold
                      text-black
                    "
                  >
                    Explore
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* BIG GALLERY */}
      {/* ====================================================== */}

      <section className="relative px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="text-5xl font-black md:text-7xl">
              Editorial Gallery
            </h2>
          </div>

          {/* TOP GRID */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* BIG IMAGE */}
            <div className="relative overflow-hidden rounded-[45px] lg:col-span-7">
              <Image
                src={gallery[0].image}
                alt={gallery[0].title}
                width={2200}
                height={2600}
                priority
                unoptimized
                className="
                  h-[850px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 text-white">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <Crown className="h-4 w-4" />

                  <span className="text-sm">
                    Luxury Editorial
                  </span>
                </div>

                <h3 className="text-6xl font-black leading-tight">
                  Modern
                  <br />
                  Identity
                </h3>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-8 lg:col-span-5">
              {gallery.slice(1, 3).map((item, index) => (
                <div
                  key={index}
                  className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1400}
                    height={1200}
                    unoptimized
                    className="
                      h-[410px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-black">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SMALL GALLERY */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  shadow-2xl
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={1200}
                  unoptimized
                  className="
                    h-[450px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                  TRENDING
                </div>

                <button
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-white
                    p-3
                    text-black
                  "
                >
                  <Heart className="h-5 w-5" />
                </button>

                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="mb-5 text-3xl font-black">
                    {item.title}
                  </h3>

                  <button
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-white
                      px-6
                      py-3
                      font-semibold
                      text-black
                    "
                  >
                    Explore
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PRODUCTS */}
      {/* ====================================================== */}

      <section className="relative px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-5xl font-black md:text-7xl">
                New Arrivals
              </h2>
            </div>

            <Link
              href="/shop"
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border
                border-black/10
                px-8
                py-4
                font-semibold
                transition
                hover:bg-black
                hover:text-white
              "
            >
              View All
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-[35px]
                  bg-white
                  shadow-2xl
                "
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={1400}
                    unoptimized
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                    NEW
                  </div>
                </div>

                <div className="p-7">
                  <div className="mb-4 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="mb-3 text-2xl font-black">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">
                      {item.price}
                    </p>

                    <button
                      className="
                        rounded-2xl
                        bg-black
                        p-4
                        text-white
                      "
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FEATURES */}
      {/* ====================================================== */}

      <section className="relative px-6 py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-5xl font-black md:text-7xl">
              Why NextGrid
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: <ShieldCheck className="h-7 w-7" />,
                title: "Premium Quality",
              },
              {
                icon: <Truck className="h-7 w-7" />,
                title: "Fast Delivery",
              },
              {
                icon: <Sparkles className="h-7 w-7" />,
                title: "Luxury Design",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[35px]
                  border
                  border-black/10
                  bg-white
                  p-10
                  shadow-2xl
                "
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-3xl font-black">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-neutral-500">
                  Crafted for elevated men's luxury fashion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}