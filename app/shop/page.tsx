"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

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

  // 🔥 FILTER + SORT (optimized)
  const filtered = useMemo(() => {
    let result =
      category === "All"
        ? products
        : products.filter((p) => p.category === category);

    if (sort === "low") {
      return [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      return [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, sort]);

  return (
    <main className="bg-white">

      {/* 🔥 HERO */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Shop Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Discover premium fashion designed for modern men.
          </p>
        </div>
      </section>

      {/* 🧭 FILTER BAR */}
      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* CATEGORY */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-black text-white scale-105"
                  : "border hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SORT */}
        <select
          aria-label="Sort products"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded-lg text-sm focus:outline-none hover:border-black transition"
        >
          <option value="popular">Sort by: Popular</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </section>

      {/* 📊 PRODUCT COUNT */}
      <div className="max-w-7xl mx-auto px-6 mb-6 text-sm text-gray-500">
        Showing {filtered.length} products
      </div>

      {/* 🛍️ GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">
              No products found in this category.
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
                className="hover:scale-[1.03] transition duration-300"
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

      {/* 🚀 CTA */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Upgrade Your Wardrobe
          </h2>

          <p className="text-gray-300 mb-8">
            Step into confidence with NextGrid Lifestyle.
          </p>

          <Link
            href="/"
            className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

    </main>
  );
}