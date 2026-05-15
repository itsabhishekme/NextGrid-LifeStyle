"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const shopLinks = [
    "All Products",
    "New Arrivals",
    "Best Sellers",
    "Trending",
    "Winter Collection",
    "Luxury Essentials",
  ];

  const companyLinks = [
    "About Us",
    "Our Story",
    "Careers",
    "Press",
    "Contact",
    "Store Locations",
  ];

  const supportLinks = [
    "Help Center",
    "Shipping Info",
    "Returns",
    "Track Order",
    "Size Guide",
    "FAQs",
  ];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-gray-200 bg-white text-black">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-gray-100 blur-3xl opacity-60" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-gray-200 blur-3xl opacity-50" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* TOP FEATURES */}
      <div className="border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-500">

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <Truck size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Free Worldwide Shipping
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Fast and secure delivery for all premium orders across the globe.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-500">

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Secure Shopping
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Your payments and personal information are fully protected.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-500">

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
              <CreditCard size={24} />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Flexible Payments
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Multiple payment options with smooth checkout experience.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">

        {/* BRAND */}
        <div className="lg:col-span-2">

          <div className="flex items-center gap-4 mb-8">

            <div className="relative">
              <Image
                src="/favicon.ico"
                alt="NextGrid Logo"
                width={60}
                height={60}
                className="rounded-2xl shadow-lg"
              />

              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                <Sparkles size={12} />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight">
                NextGrid
              </h2>

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                Lifestyle Collection
              </p>
            </div>

          </div>

          <p className="text-gray-600 leading-relaxed max-w-lg text-[15px]">
            NextGrid creates premium lifestyle fashion inspired by modern
            minimalism, confidence, and timeless street luxury. Every
            collection is designed to elevate your everyday identity with
            comfort, elegance, and bold aesthetics.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email Support
                </p>

                <p className="font-medium">
                  support@nextgrid.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone Number
                </p>

                <p className="font-medium">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Main Office
                </p>

                <p className="font-medium">
                  Mumbai, India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SHOP */}
        <div>

          <h3 className="text-lg font-bold mb-8">
            Shop
          </h3>

          <ul className="space-y-4">

            {shopLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href="/shop"
                  className="group flex items-center justify-between text-gray-600 hover:text-black transition duration-300"
                >
                  <span>{item}</span>

                  <ArrowRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300"
                  />
                </Link>
              </li>
            ))}

          </ul>
        </div>

        {/* COMPANY */}
        <div>

          <h3 className="text-lg font-bold mb-8">
            Company
          </h3>

          <ul className="space-y-4">

            {companyLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href="/about"
                  className="group flex items-center justify-between text-gray-600 hover:text-black transition duration-300"
                >
                  <span>{item}</span>

                  <ArrowRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300"
                  />
                </Link>
              </li>
            ))}

          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>

          <h3 className="text-lg font-bold mb-8">
            Newsletter
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>

          <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-6 shadow-xl">

            <form className="space-y-4">

              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 outline-none focus:border-black transition"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-black text-white font-semibold hover:scale-[1.02] hover:shadow-2xl transition duration-300"
              >
                Subscribe Now
              </button>

            </form>

            <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">

              <p className="text-xs text-gray-500 leading-relaxed">
                By subscribing, you agree to our privacy policy and consent
                to receive updates from our company.
              </p>

            </div>
          </div>

          {/* PAYMENT */}
          <div className="mt-8">

            <p className="text-sm font-medium mb-4">
              Accepted Payments
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "Visa",
                "MasterCard",
                "UPI",
                "PayPal",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium shadow-sm"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-sm text-gray-500 text-center lg:text-left">
            © 2026 NextGrid Lifestyle. Crafted with premium design and
            modern luxury aesthetics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">

            <Link
              href="/privacy-policy"
              className="hover:text-black transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-black transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/shipping"
              className="hover:text-black transition"
            >
              Shipping Policy
            </Link>

            <Link
              href="/returns"
              className="hover:text-black transition"
            >
              Return Policy
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
}