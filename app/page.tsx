"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Crown,
  Flame,
  Heart,
  ShoppingBag,
  Sparkles,
  Star,
  ShieldCheck,
  Truck,
  Gem,
  BadgeCheck,
  Play,
  ChevronRight,
  Eye,
} from "lucide-react";

const hero =
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=3200";

const luxuryBanner =
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=3200";

const gallery = [
  {
    title: "Luxury Identity",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2400",
  },

  {
    title: "Streetwear Culture",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2400",
  },

  {
    title: "Minimal Fashion",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2400",
  },

  {
    title: "Luxury Sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2400",
  },

  {
    title: "Editorial Style",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2400",
  },

  {
    title: "Modern Black",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2400",
  },

  {
    title: "Luxury Mood",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2400",
  },

  {
    title: "Premium Drop",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2400",
  },

  {
    title: "Fashion Editorial",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2400",
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
    title: "Classic Tee",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1800",
  },

  {
    title: "Urban Sneakers",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-15%] top-0 h-[900px] w-[900px] rounded-full bg-neutral-200/50 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[700px] w-[700px] rounded-full bg-neutral-300/40 blur-3xl" />
      </div>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative px-6 pt-10 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[65px]">
            <Image
              src={hero}
              alt="Luxury Fashion"
              width={3200}
              height={2200}
              priority
              unoptimized
              className="
                h-[1050px]
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

            <div className="absolute left-8 top-1/2 max-w-4xl -translate-y-1/2 text-white md:left-16">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-7 py-4 backdrop-blur-2xl">
                <Sparkles className="h-5 w-5" />

                <span className="text-sm uppercase tracking-[0.4em]">
                  Premium Streetwear
                </span>
              </div>

              <h1 className="mb-10 text-6xl font-black leading-[0.9] md:text-8xl xl:text-[10rem]">
                NEXT
                <br />

                <span className="bg-gradient-to-r from-white via-neutral-300 to-white bg-clip-text text-transparent">
                  FASHION
                </span>
              </h1>

              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Premium luxury collections crafted for
                modern streetwear culture and timeless
                fashion identity.
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
                  Explore Collection
                </Link>
              </div>
            </div>

            {/* FLOAT */}

            <div className="absolute bottom-10 right-10 hidden lg:flex">
              <button
                className="
                  flex
                  items-center
                  gap-5
                  rounded-full
                  bg-white/10
                  px-8
                  py-5
                  text-white
                  backdrop-blur-2xl
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
                  <Play className="h-7 w-7 fill-black" />
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Watch Collection
                  </p>

                  <h4 className="text-xl font-bold">
                    Fashion Film
                  </h4>
                </div>
              </button>
            </div>
          </div>

          {/* GRID */}

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {gallery.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[45px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={2200}
                  height={2200}
                  unoptimized
                  className="
                    h-[700px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
                    <Crown className="h-4 w-4" />

                    <span className="text-sm">
                      Premium Collection
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
      {/* STATS */}
      {/* ====================================================== */}

      <section className="relative px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {[
            "25K+",
            "4.9★",
            "120+",
            "24/7",
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[35px]
                border
                border-black/10
                bg-white
                p-10
                text-center
                shadow-2xl
              "
            >
              <h3 className="text-6xl font-black">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* BIG SHOWCASE */}
      {/* ====================================================== */}

      <section className="relative px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <div className="mb-24 flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-white">
                <Sparkles className="h-5 w-5" />

                <span className="text-sm uppercase tracking-[0.3em]">
                  Editorial Fashion
                </span>
              </div>

              <h2 className="text-6xl font-black leading-none md:text-8xl">
                Featured
                <br />
                Showcase
              </h2>
            </div>

            <Link
              href="/gallery"
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
              View Gallery
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          {/* BIG IMAGE */}

          <div className="relative overflow-hidden rounded-[60px]">
            <Image
              src={luxuryBanner}
              alt="Luxury Showcase"
              width={3200}
              height={2200}
              unoptimized
              className="
                h-[1000px]
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

            <div className="absolute left-10 top-1/2 max-w-3xl -translate-y-1/2 text-white md:left-16">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-2xl">
                <Flame className="h-5 w-5" />

                <span className="text-sm uppercase tracking-[0.3em]">
                  Trending Fashion
                </span>
              </div>

              <h2 className="mb-8 text-7xl font-black leading-[0.9] md:text-9xl">
                URBAN
                <br />

                <span className="bg-gradient-to-r from-white via-neutral-400 to-white bg-clip-text text-transparent">
                  IDENTITY
                </span>
              </h2>

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
                "
              >
                Shop Collection
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* LARGE IMAGE GRID */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {gallery.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[50px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={2600}
                  height={2600}
                  unoptimized
                  className="
                    h-[850px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-6xl font-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* SMALL GRID */}

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {gallery.slice(5, 9).map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  bg-white
                  shadow-2xl
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1800}
                  height={2200}
                  unoptimized
                  className="
                    h-[600px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

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
                  <div className="mb-4 flex items-center gap-3">
                    <Eye className="h-5 w-5" />

                    <span className="text-sm">
                      Trending
                    </span>
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

      <section className="relative px-6 pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-6xl font-black md:text-8xl">
              New Arrivals
            </h2>

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
                  rounded-[40px]
                  bg-white
                  shadow-2xl
                "
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1600}
                    height={1800}
                    unoptimized
                    className="
                      h-[520px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
                    PREMIUM
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="mb-4 text-3xl font-black">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">
                      {item.price}
                    </p>

                    <button className="rounded-2xl bg-black p-4 text-white">
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

      <section className="relative px-6 pb-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {[
            {
              title: "Premium Quality",
              icon: <ShieldCheck className="h-8 w-8" />,
            },

            {
              title: "Fast Delivery",
              icon: <Truck className="h-8 w-8" />,
            },

            {
              title: "Luxury Craftsmanship",
              icon: <Gem className="h-8 w-8" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[40px]
                border
                border-black/10
                bg-white
                p-12
                shadow-2xl
              "
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">
                {item.icon}
              </div>

              <h3 className="mb-4 text-4xl font-black">
                {item.title}
              </h3>

              <p className="leading-relaxed text-neutral-500">
                Crafted for luxury fashion culture with
                timeless identity and premium aesthetics.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}