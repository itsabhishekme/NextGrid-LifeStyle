"use client";

import { useMemo, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Flame,
  ShoppingBag,
  Sparkles,
  Star,
  Filter,
  ShieldCheck,
  Truck,
  Heart,
  Eye,
  BadgeCheck,
  Crown,
  ChevronRight,
} from "lucide-react";

import ProductCard from "@/components/ProductCard";

type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
};

const products: Product[] = [
  {
    name: "Luxury T-Shirt",
    price: 999,
    category: "Shirts",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
  },
  {
    name: "Premium Jeans",
    price: 1999,
    category: "Shirts",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200",
  },
  {
    name: "Luxury Watch",
    price: 3999,
    category: "Accessories",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200",
  },
  {
    name: "Modern Sneakers",
    price: 2999,
    category: "Shoes",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },
  {
    name: "Leather Jacket",
    price: 4999,
    category: "Jackets",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200",
  },
  {
    name: "Streetwear Hoodie",
    price: 2499,
    category: "Jackets",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
  },
  {
    name: "Classic Cap",
    price: 699,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200",
  },
  {
    name: "Urban Sneakers",
    price: 3499,
    category: "Shoes",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200",
  },
];

const categories = [
  "All",
  "Jackets",
  "Shirts",
  "Shoes",
  "Accessories",
];

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");

  const filteredProducts = useMemo(() => {
    let result =
      category === "All"
        ? products
        : products.filter(
            (product) => product.category === category
          );

    if (sort === "low") {
      return [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      return [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    return result;
  }, [category, sort]);

  return (
    <main className="relative overflow-hidden bg-white text-black">

      {/* ================================================= */}
      {/* 🌤 BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-gray-200 blur-3xl opacity-70" />

        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-gray-300 blur-3xl opacity-60" />

      </div>

      {/* ================================================= */}
      {/* 🚀 HERO */}
      {/* ================================================= */}

      <section className="relative z-10 px-6 py-36">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm">

              <Sparkles className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em] text-gray-700">
                Premium Collection
              </span>

            </div>

            <h1 className="mb-10 text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">

              Luxury
              <br />

              <span className="bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent">
                Fashion
              </span>

            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Explore elevated streetwear, premium essentials,
              and timeless fashion crafted for modern confidence.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              <button className="inline-flex items-center gap-3 rounded-2xl bg-black px-10 py-5 font-bold text-white transition-all duration-500 hover:scale-105">

                Shop Now

                <ArrowRight className="h-5 w-5" />

              </button>

              <button className="rounded-2xl border border-gray-300 bg-white px-10 py-5 font-semibold transition-all duration-500 hover:bg-black hover:text-white">

                Explore More

              </button>

            </div>

            {/* MINI FEATURES */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

                <ShieldCheck className="mb-4 h-8 w-8" />

                <h3 className="mb-2 font-bold">
                  Premium Quality
                </h3>

                <p className="text-sm text-gray-500">
                  Luxury craftsmanship.
                </p>

              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

                <Truck className="mb-4 h-8 w-8" />

                <h3 className="mb-2 font-bold">
                  Fast Shipping
                </h3>

                <p className="text-sm text-gray-500">
                  Worldwide delivery.
                </p>

              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">

                <BadgeCheck className="mb-4 h-8 w-8" />

                <h3 className="mb-2 font-bold">
                  Trusted Brand
                </h3>

                <p className="text-sm text-gray-500">
                  Loved globally.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[45px] border border-gray-200 shadow-[0_40px_120px_rgba(0,0,0,0.15)]">

              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070"
                alt="Fashion Hero"
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
                    Modern Luxury
                  </span>

                </div>

                <h2 className="text-5xl font-black leading-tight">
                  Premium
                  <br />
                  Streetwear
                </h2>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-10 bottom-16 rounded-[35px] border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">

                <ShoppingBag className="h-7 w-7" />

              </div>

              <h3 className="mb-3 text-2xl font-black">
                New Collection
              </h3>

              <p className="max-w-[220px] text-sm leading-relaxed text-gray-500">
                Designed for confidence and modern identity.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* 📊 STATS */}
      {/* ================================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 rounded-[40px] border border-gray-200 bg-white p-12 shadow-2xl md:grid-cols-4">

          {[
            "50K+",
            "120+",
            "4.9★",
            "24/7",
          ].map((item, index) => (
            <div
              key={index}
              className="text-center"
            >

              <h3 className="mb-3 text-5xl font-black">
                {item}
              </h3>

              <p className="text-gray-500">
                {[
                  "Happy Customers",
                  "Premium Products",
                  "Customer Rating",
                  "Support",
                ][index]}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ================================================= */}
      {/* 🎯 FILTER BAR */}
      {/* ================================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="rounded-[35px] border border-gray-200 bg-white p-8 shadow-2xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>

              <div className="mb-4 flex items-center gap-3">

                <Filter className="h-6 w-6" />

                <h2 className="text-3xl font-black">
                  Shop Collection
                </h2>

              </div>

              <p className="text-gray-500">
                Explore premium fashion categories.
              </p>

            </div>

            {/* CATEGORIES */}
            <div className="flex flex-wrap gap-4">

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    category === cat
                      ? "bg-black text-white shadow-lg"
                      : "border border-gray-300 bg-white hover:bg-black hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}

            </div>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-2xl border border-gray-300 bg-white px-6 py-4 font-medium outline-none"
            >

              <option value="popular">
                Sort: Popular
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

            </select>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* 🛍 PRODUCTS */}
      {/* ================================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <Flame className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em]">
                Trending Products
              </span>

            </div>

            <h2 className="text-5xl font-black md:text-7xl">
              Featured Collection
            </h2>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-lg">

            <p className="text-lg font-semibold">
              Showing {filteredProducts.length} Products
            </p>

          </div>

        </div>

        {/* GRID */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-[40px] border border-gray-200 bg-white py-32 text-center shadow-2xl">

            <h3 className="mb-4 text-4xl font-black">
              No Products Found
            </h3>

            <p className="mb-8 text-gray-500">
              Try changing categories or filters.
            </p>

            <button
              onClick={() => setCategory("All")}
              className="rounded-2xl bg-black px-8 py-4 font-semibold text-white"
            >
              Reset Filters
            </button>

          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">

            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group"
              >

                <div className="mb-5 overflow-hidden rounded-[35px] border border-gray-200 shadow-2xl">

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={1500}
                    unoptimized
                    className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <ProductCard
                  name={product.name}
                  price={`₹${product.price}`}
                />

              </div>
            ))}

          </div>
        )}

      </section>

      {/* ================================================= */}
      {/* 💎 BANNER */}
      {/* ================================================= */}

      <section className="relative z-10 px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-20 rounded-[45px] border border-gray-200 bg-white p-14 shadow-2xl lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-3">

              <Heart className="h-5 w-5" />

              <span className="text-sm uppercase tracking-[0.3em]">
                Premium Identity
              </span>

            </div>

            <h2 className="mb-8 text-5xl font-black leading-tight md:text-7xl">

              Designed
              <br />
              For Confidence

            </h2>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
              Every collection reflects luxury craftsmanship,
              minimal aesthetics, and timeless modern identity.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-2xl bg-black px-10 py-5 font-bold text-white transition hover:scale-105"
            >

              Learn More

              <ChevronRight className="h-5 w-5" />

            </Link>

          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-[40px] border border-gray-200 shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600"
              alt="Luxury Fashion"
              width={1200}
              height={1500}
              unoptimized
              className="h-[600px] w-full object-cover"
            />

          </div>

        </div>

      </section>

    </main>
  );
}