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
  Sparkles,
  Globe2,
  CheckCircle2,
  HeartHandshake,
  BadgeCheck,
  Crown,
} from "lucide-react";

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {

  const shopLinks = [
    "New Arrivals",
    "Luxury Streetwear",
    "Minimal Collection",
    "Trending Fashion",
    "Premium Essentials",
    "Accessories",
    "Lifestyle Wear",
    "Exclusive Drops",
  ];

  const companyLinks = [
    "About Us",
    "Our Story",
    "Store Locations",
    "Careers",
    "Media & Press",
    "Affiliates",
    "Brand Values",
    "Contact",
  ];

  const supportLinks = [
    "Help Center",
    "Track Order",
    "Shipping Policy",
    "Returns & Refunds",
    "Privacy Policy",
    "Terms & Conditions",
    "FAQs",
    "Size Guide",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      href: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={18} />,
      href: "https://twitter.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} />,
      href: "https://facebook.com",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={18} />,
      href: "https://youtube.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={18} />,
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white text-black">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-gray-100 blur-3xl opacity-70" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gray-200 blur-3xl opacity-60" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:75px_75px]" />

      </div>

      {/* ================================================= */}
      {/* TOP HERO */}
      {/* ================================================= */}

      <div className="relative border-b border-gray-200">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row">

          {/* LEFT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">

              <Sparkles className="h-4 w-4" />

              <span className="text-xs uppercase tracking-[0.35em] text-gray-600">
                Premium Lifestyle Brand
              </span>

            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">

              Redefining
              <br />

              <span className="bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent">
                Modern Fashion
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">

              Welcome to NextGrid Style, where luxury,
              confidence, creativity, and modern identity
              come together to shape the future of fashion.

            </p>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-5">

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-9 py-5 font-semibold text-white transition-all duration-500 hover:scale-105"
            >
              Explore Collection

              <ArrowRight className="h-5 w-5" />

            </Link>

            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">

                <Crown className="h-6 w-6" />

              </div>

              <div>

                <h3 className="font-bold">
                  Premium Experience
                </h3>

                <p className="text-sm text-gray-500">
                  Crafted for modern luxury lifestyle.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <div className="border-b border-gray-200">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-[32px] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white transition duration-500 group-hover:scale-110">

              <Truck size={28} />

            </div>

            <h3 className="mb-3 text-xl font-black">
              Worldwide Shipping
            </h3>

            <p className="text-sm leading-relaxed text-gray-500">
              Premium fast delivery experience for customers around the globe.
            </p>

          </div>

          <div className="group rounded-[32px] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white transition duration-500 group-hover:scale-110">

              <ShieldCheck size={28} />

            </div>

            <h3 className="mb-3 text-xl font-black">
              Secure Payments
            </h3>

            <p className="text-sm leading-relaxed text-gray-500">
              Advanced encrypted checkout with trusted payment protection.
            </p>

          </div>

          <div className="group rounded-[32px] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white transition duration-500 group-hover:scale-110">

              <HeartHandshake size={28} />

            </div>

            <h3 className="mb-3 text-xl font-black">
              Customer Support
            </h3>

            <p className="text-sm leading-relaxed text-gray-500">
              Dedicated support team focused on premium shopping experience.
            </p>

          </div>

          <div className="group rounded-[32px] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white transition duration-500 group-hover:scale-110">

              <BadgeCheck size={28} />

            </div>

            <h3 className="mb-3 text-xl font-black">
              Trusted Quality
            </h3>

            <p className="text-sm leading-relaxed text-gray-500">
              Luxury-inspired premium materials crafted for everyday comfort.
            </p>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* MAIN FOOTER */}
      {/* ================================================= */}

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-5">

        {/* ================================================= */}
        {/* BRAND */}
        {/* ================================================= */}

        <div className="lg:col-span-2">

          {/* LOGO */}

          <div className="mb-8 flex items-center gap-5">

            <div className="relative">

              <Image
                src="/favicon.ico"
                alt="NextGrid Logo"
                width={80}
                height={80}
                className="rounded-[28px] border border-gray-200 shadow-2xl"
              />

              <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-xl">

                <Sparkles size={13} />

              </div>

            </div>

            <div>

              <h2 className="text-5xl font-black tracking-tight">
                NextGrid
              </h2>

              <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
                Lifestyle Collection
              </p>

            </div>

          </div>

          {/* DESCRIPTION */}

          <p className="max-w-xl text-[15px] leading-relaxed text-gray-600">

            NextGrid Lifestyle creates modern luxury fashion
            inspired by confidence, minimalism, creativity,
            and premium streetwear culture. Every collection
            is designed to elevate individuality and redefine
            everyday style through comfort and sophistication.

          </p>

          {/* STATS */}

          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

              <h3 className="mb-1 text-3xl font-black">
                50K+
              </h3>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Customers
              </p>

            </div>

            <div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

              <h3 className="mb-1 text-3xl font-black">
                4.9★
              </h3>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Ratings
              </p>

            </div>

            <div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

              <h3 className="mb-1 text-3xl font-black">
                120+
              </h3>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Products
              </p>

            </div>

          </div>

          {/* CONTACT */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">

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

            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">

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

            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">

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

          {/* SOCIAL */}

          <div className="mt-12">

            <div className="mb-5 flex items-center gap-3">

              <Globe2 className="h-5 w-5" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
                Follow Us
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  aria-label={item.name}
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-2xl"
                >

                  <span className="transition duration-500 group-hover:scale-110">
                    {item.icon}
                  </span>

                </Link>
              ))}

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* SHOP LINKS */}
        {/* ================================================= */}

        <div>

          <h3 className="mb-8 text-2xl font-black">
            Shop
          </h3>

          <ul className="space-y-5">

            {shopLinks.map((item, index) => (
              <li key={index}>

                <Link
                  href="/shop"
                  className="group flex items-center justify-between text-gray-600 transition duration-300 hover:text-black"
                >

                  <span>{item}</span>

                  <ArrowRight
                    size={16}
                    className="opacity-0 -translate-x-2 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />

                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* ================================================= */}
        {/* COMPANY */}
        {/* ================================================= */}

        <div>

          <h3 className="mb-8 text-2xl font-black">
            Company
          </h3>

          <ul className="space-y-5">

            {companyLinks.map((item, index) => (
              <li key={index}>

                <Link
                  href="/about"
                  className="group flex items-center justify-between text-gray-600 transition duration-300 hover:text-black"
                >

                  <span>{item}</span>

                  <ArrowRight
                    size={16}
                    className="opacity-0 -translate-x-2 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />

                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* ================================================= */}
        {/* NEWSLETTER */}
        {/* ================================================= */}

        <div>

          <h3 className="mb-8 text-2xl font-black">
            Newsletter
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-gray-600">
            Subscribe to receive exclusive luxury fashion
            drops, premium offers, and modern lifestyle inspiration.
          </p>

          <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-2xl">

            <form className="space-y-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 outline-none transition focus:border-black"
              />

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-black font-semibold text-white transition-all duration-500 hover:scale-[1.02]"
              >
                Subscribe Now

              </button>

            </form>

            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4">

              <div className="flex items-start gap-3">

                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />

                <p className="text-xs leading-relaxed text-gray-500">
                  Get early access to premium collections,
                  exclusive offers, and upcoming launches.
                </p>

              </div>

            </div>

          </div>

          {/* PAYMENTS */}

          <div className="mt-8">

            <p className="mb-4 text-sm font-semibold">
              Accepted Payments
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "Visa",
                "MasterCard",
                "UPI",
                "PayPal",
                "Apple Pay",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition duration-300 hover:shadow-lg"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* BOTTOM */}
      {/* ================================================= */}

      <div className="border-t border-gray-200">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 lg:flex-row">

          <p className="text-center text-sm text-gray-500 lg:text-left">
            © 2026 NextGrid Lifestyle. Crafted with premium
            modern luxury aesthetics and timeless fashion identity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">

            {supportLinks.map((item, index) => (
              <Link
                key={index}
                href="/"
                className="transition duration-300 hover:text-black"
              >
                {item}
              </Link>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}