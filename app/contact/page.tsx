"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🧠 LEFT SIDE (INFO) */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions about our products, collaborations, or your order?
            We’d love to hear from you. Reach out and our team will respond quickly.
          </p>

          {/* 📍 INFO BLOCK */}
          <div className="space-y-4 text-sm text-gray-600">
            <p>📧 support@nextgrid.com</p>
            <p>📞 +91 79911 85414</p>
            <p>📍 India</p>
          </div>

          {/* 🔗 QUICK LINKS */}
          <div className="mt-8">
            <Link href="/shop" className="text-black underline">
              Explore Collection →
            </Link>
          </div>
        </div>

        {/* ✨ FORM CARD */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          {submitted ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Message Sent ✅
              </h2>

              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We’ll get back to you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-black text-white px-6 py-2 rounded-lg"
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
              <h2 className="text-xl font-semibold mb-2">
                Send a Message
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                required
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
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