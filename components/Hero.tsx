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
  Eye,
  Award,
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
    label: "Luxury Rating",
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
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2200",

    icon: <Shirt className="h-6 w-6" />,
  },

  {
    title: "Premium Accessories",

    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2200",

    icon: <Watch className="h-6 w-6" />,
  },

  {
    title: "Modern Eyewear",

    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2200",

    icon: <Glasses className="h-6 w-6" />,
  },
];

const bigGallery = [
  {
    title: "Modern Identity",

    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3200",
  },

  {
    title: "Luxury Wear",

    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=3200",
  },

  {
    title: "Street Culture",

    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=3200",
  },
];

const gallery = [
  {
    title: "Luxury Sneakers",

    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2200",
  },

  {
    title: "Minimal Style",

    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2200",
  },

  {
    title: "Premium Drop",

    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2200",
  },

  {
    title: "Luxury Fashion",

    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2200",
  },

  {
    title: "Street Luxury",

    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2200",
  },

  {
    title: "Editorial Style",

    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2200",
  },
];

const products = [
  {
    title: "Luxury Hoodie",

    price: "₹2,999",

    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1800",
  },

  {
    title: "Minimal Jacket",

    price: "₹4,999",

    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800",
  },

  {
    title: "Urban Sneakers",

    price: "₹5,499",

    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800",
  },

  {
    title: "Classic Tee",

    price: "₹1,499",

    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1800",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-neutral-200/60 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[700px] w-[700px] rounded-full bg-neutral-300/40 blur-3xl" />
      </div>

      {/* ====================================================== */}
      {/* EXTRA PREMIUM TOP SECTION */}
      {/* ====================================================== */}

      <section className="relative px-6 pt-10 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* HUGE TOP IMAGE */}

          <div className="relative overflow-hidden rounded-[70px]">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=3200"
              alt="Luxury Fashion"
              width={3200}
              height={2200}
              priority
              unoptimized
              className="
                h-[1100px]
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

            <div className="absolute left-10 top-1/2 max-w-5xl -translate-y-1/2 text-white md:left-16">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-7 py-4 backdrop-blur-2xl">
                <Award className="h-5 w-5" />

                <span className="text-sm uppercase tracking-[0.4em]">
                  Premium Collection 2026
                </span>
              </div>

              <h1 className="mb-10 text-6xl font-black leading-[0.9] md:text-8xl xl:text-[11rem]">
                MODERN
                <br />

                <span className="bg-gradient-to-r from-white via-neutral-300 to-white bg-clip-text text-transparent">
                  STREET
                </span>

                <br />
                LUXURY
              </h1>

              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-2xl">
                Premium fashion crafted for elevated identity
                and timeless streetwear culture.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-white
                    px-10
                    py-5
                    font-bold
                    text-black
                    transition-all
                    duration-500
                    hover:scale-105
                  "
                >
                  Shop Collection
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
                    border-white/20
                    bg-white/10
                    px-10
                    py-5
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Explore More
                </Link>
              </div>
            </div>

            {/* FLOAT CARD */}

            <div className="absolute bottom-10 right-10 hidden lg:block">
              <div className="rounded-[40px] bg-white/10 p-8 backdrop-blur-2xl">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-black">
                  <ShoppingBag className="h-9 w-9" />
                </div>

                <h3 className="mb-3 text-3xl font-black text-white">
                  Premium Drop
                </h3>

                <p className="max-w-[260px] text-gray-300">
                  Exclusive luxury collections for modern
                  streetwear culture.
                </p>
              </div>
            </div>
          </div>

          {/* BIG IMAGE GRID */}

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {bigGallery.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[45px]
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={2400}
                  height={2400}
                  unoptimized
                  className="
                    h-[760px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-10 left-10 text-white">
                  <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
                    <Sparkles className="h-4 w-4" />

                    <span className="text-sm">
                      Trending Fashion
                    </span>
                  </div>

                  <h3 className="text-5xl font-black leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}

      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
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
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
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
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="
                mb-12
                max-w-2xl
                text-lg
                leading-relaxed
                text-neutral-600
                md:text-xl
              "
            >
              Premium essentials designed for modern luxury
              fashion lovers and timeless streetwear culture.
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

            {/* FLOAT */}

            <div className="absolute -right-5 bottom-10 rounded-3xl bg-black p-5 text-white shadow-2xl">
              <Flame className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}