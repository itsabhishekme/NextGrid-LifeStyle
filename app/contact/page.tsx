"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden text-black">

      {/* 🌅 PREMIUM BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070"
          alt="men fashion contact"
          fill
          priority
          className="object-cover"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* 🔥 PAGE WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* 🧠 LEFT SIDE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Let’s Connect
          </h1>

          <p className="text-gray-700 mb-10 leading-relaxed text-lg">
            Whether it's style advice, collaborations, or support — we’re here to help you.
            Reach out and experience premium service.
          </p>

          {/* 📍 INFO */}
          <div className="space-y-4 text-gray-700">
            <p>📧 support@nextgrid.com</p>
            <p>📞 +91 79911 85414</p>
            <p>📍 India</p>
          </div>

          {/* 🔗 CTA */}
          <div className="mt-10">
            <Link
              href="/shop"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl hover:scale-105 transition"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* ✨ FORM (GLASS STYLE) */}
        <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl">

          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Message Sent ✅
              </h2>

              <p className="text-gray-700 mb-6">
                Thank you for reaching out. Our team will contact you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Send a Message
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-xl font-medium hover:scale-[1.03] transition shadow-md"
              >
                Send Message
              </button>
            </form>
          )}

        </div>

      </div>

    </main>
  );
}