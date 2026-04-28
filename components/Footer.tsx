"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 text-black overflow-hidden">

      {/* 🌅 LIGHT GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-gray-100 to-gray-200" />

      {/* 🔝 TOP */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* 🧠 BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/favicon.ico"
              alt="NextGrid Logo"
              width={42}
              height={42}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold tracking-tight">
              NextGrid
            </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Premium fashion for modern men. Designed for confidence,
            simplicity, and bold identity.
          </p>

          {/* 🌐 SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* 🛍️ SHOP */}
        <div>
          <h3 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-800">
            Shop
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/shop" className="hover:text-black">All Products</Link></li>
            <li><Link href="/shop" className="hover:text-black">New Arrivals</Link></li>
            <li><Link href="/shop" className="hover:text-black">Best Sellers</Link></li>
            <li><Link href="/shop" className="hover:text-black">Sale</Link></li>
          </ul>
        </div>

        {/* 📄 COMPANY */}
        <div>
          <h3 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-800">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-black">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            <li><Link href="#" className="hover:text-black">Careers</Link></li>
          </ul>
        </div>

        {/* 📩 NEWSLETTER (GLASS STYLE) */}
        <div>
          <h3 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-800">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Get the latest fashion trends & exclusive offers.
          </p>

          <div className="p-5 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-lg">
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button className="bg-black text-white py-2 rounded-lg font-medium hover:scale-[1.03] transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>© 2026 NextGrid Lifestyle. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-black">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}