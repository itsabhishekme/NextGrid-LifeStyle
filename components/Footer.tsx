"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-24 border-t border-gray-800">

      {/* 🔝 TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 🧠 BRAND */}
        <div>
          {/* 🔥 LOGO + NAME */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/favicon.ico"
              alt="NextGrid Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h2 className="text-white text-xl font-bold tracking-tight">
              NextGrid Lifestyle
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            Premium fashion for modern men. Designed for confidence,
            simplicity, and bold identity.
          </p>

          {/* 🌐 SOCIAL */}
          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <FaFacebookF size={16} />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <FaInstagram size={16} />
            </Link>

            <Link
              href="#"
              aria-label="Twitter"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <FaTwitter size={16} />
            </Link>
          </div>
        </div>

        {/* 🛍️ SHOP */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Shop
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/shop" className="hover:text-white">All Products</Link></li>
            <li><Link href="/shop" className="hover:text-white">New Arrivals</Link></li>
            <li><Link href="/shop" className="hover:text-white">Best Sellers</Link></li>
            <li><Link href="/shop" className="hover:text-white">Sale</Link></li>
          </ul>
        </div>

        {/* 📄 COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* 📩 NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Stay Updated
          </h3>

          <p className="text-sm mb-4">
            Get the latest fashion trends & exclusive offers.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button className="bg-white text-black py-2 rounded-lg font-medium hover:scale-[1.02] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">

          <p>
            © 2026 NextGrid Lifestyle. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}