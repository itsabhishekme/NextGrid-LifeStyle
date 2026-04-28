"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Image from "next/image";

type Product = {
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { name: "T-Shirt", price: 999, category: "Shirts" },
  { name: "Jeans", price: 1999, category: "Shirts" },
  { name: "Watch", price: 3999, category: "Accessories" },
  { name: "Shoes", price: 2999, category: "Shoes" },
  { name: "Leather Jacket", price: 4999, category: "Jackets" },
  { name: "Sneakers", price: 3499, category: "Shoes" },
  { name: "Hoodie", price: 1999, category: "Jackets" },
  { name: "Cap", price: 599, category: "Accessories" },
];

const categories = ["All", "Jackets", "Shirts", "Shoes", "Accessories"];

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let result =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);

    if (sort === "low") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [category, sort]);

  return (
    <main className="relative overflow-hidden text-black">

      {/* 🌅 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070"
          alt="shop fashion"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* 🔥 HERO */}
      <section className="py-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Shop Collection
          </h1>
          <p className="text-gray-700 text-lg">
            Premium essentials crafted for modern men.
          </p>
        </div>
      </section>

      {/* 🧭 FILTER BAR (GLASS STYLE) */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 backdrop-blur-xl bg-white/60 rounded-2xl shadow-lg">

        {/* CATEGORY */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                category === cat
                  ? "bg-black text-white scale-105"
                  : "bg-white border hover:bg-black hover:text-white"
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
          className="border px-4 py-2 rounded-xl text-sm bg-white"
          aria-label="Sort products"
        >
          <option value="popular">Sort by: Popular</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </section>

      {/* 📊 PRODUCT COUNT */}
      <div className="max-w-7xl mx-auto px-6 mt-6 text-sm text-gray-600">
        Showing {filtered.length} products
      </div>

      {/* 🛍️ GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              No products found.
            </p>
            <button
              onClick={() => setCategory("All")}
              className="bg-black text-white px-6 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filtered.map((product, i) => (
              <div
                key={i}
                className="hover:scale-[1.05] transition duration-300"
              >
                <ProductCard
                  name={product.name}
                  price={`₹${product.price}`}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 💎 STYLE BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="p-12 rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Designed for Modern Identity
          </h2>
          <p className="text-gray-600 mb-6">
            Every piece reflects minimalism, confidence, and timeless design.
          </p>
          <Link
            href="/about"
            className="bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Upgrade Your Wardrobe
        </h2>

        <p className="text-gray-700 mb-10">
          Step into confidence with NextGrid Lifestyle.
        </p>

        <Link
          href="/"
          className="bg-black text-white px-10 py-4 rounded-xl font-medium hover:scale-105 transition shadow-lg"
        >
          Back to Home
        </Link>
      </section>

    </main>
  );
}