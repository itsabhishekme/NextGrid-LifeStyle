"use client";

import { useState } from "react";

import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative overflow-hidden bg-white text-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* SOFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* GLOW */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gray-200 blur-3xl opacity-60" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gray-300 blur-3xl opacity-50" />

      </div>

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              {/* BADGE */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <Sparkles size={16} />

                <span className="text-xs uppercase tracking-[0.3em] text-gray-700">
                  Premium Support
                </span>

              </div>

              {/* HEADING */}
              <h1 className="mb-8 text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl">

                Let’s Create
                <br />

                <span className="text-gray-400">
                  Something
                </span>

                <br />

                Extraordinary

              </h1>

              {/* DESCRIPTION */}
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-600">
                Connect with NextGrid Lifestyle for collaborations,
                premium support, luxury fashion consulting,
                and modern styling experiences tailored for you.
              </p>

              {/* BUTTONS */}
              <div className="mb-14 flex flex-col gap-5 sm:flex-row">

                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 font-bold text-white transition duration-500 hover:scale-105"
                >
                  Explore Collection

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gray-300 bg-white px-8 py-4 font-semibold text-black transition duration-500 hover:bg-black hover:text-white"
                >
                  Read Journal
                </Link>

              </div>

              {/* STATS */}
              <div className="mb-16 flex flex-wrap gap-12">

                <div>

                  <h3 className="mb-2 text-4xl font-black">
                    25K+
                  </h3>

                  <p className="text-gray-500">
                    Happy Customers
                  </p>

                </div>

                <div>

                  <h3 className="mb-2 text-4xl font-black">
                    120+
                  </h3>

                  <p className="text-gray-500">
                    Premium Collections
                  </p>

                </div>

                <div>

                  <h3 className="mb-2 text-4xl font-black">
                    4.9
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500">

                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={16}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                </div>

              </div>

              {/* INFO GRID */}
              <div className="grid gap-5 sm:grid-cols-2">

                {/* CARD */}
                <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Mail size={24} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold">
                    Email Support
                  </h3>

                  <p className="mb-3 text-gray-500">
                    Reach our support team anytime.
                  </p>

                  <span className="text-sm font-medium">
                    support@nextgrid.com
                  </span>

                </div>

                {/* CARD */}
                <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Phone size={24} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold">
                    Call Us
                  </h3>

                  <p className="mb-3 text-gray-500">
                    Premium customer assistance.
                  </p>

                  <span className="text-sm font-medium">
                    +91 79911 85414
                  </span>

                </div>

                {/* CARD */}
                <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <MapPin size={24} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold">
                    Headquarters
                  </h3>

                  <p className="mb-3 text-gray-500">
                    Global luxury fashion support.
                  </p>

                  <span className="text-sm font-medium">
                    Bengaluru, India
                  </span>

                </div>

                {/* CARD */}
                <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Clock3 size={24} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold">
                    Working Hours
                  </h3>

                  <p className="mb-3 text-gray-500">
                    Dedicated premium support.
                  </p>

                  <span className="text-sm font-medium">
                    Mon - Sat / 9AM - 8PM
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              {/* TOP IMAGE */}
              <div className="absolute -right-8 -top-10 hidden overflow-hidden rounded-[35px] border border-gray-200 shadow-2xl xl:block">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="Fashion"
                  className="h-[240px] w-[200px] object-cover"
                />

              </div>

              {/* FORM */}
              <div className="overflow-hidden rounded-[40px] border border-gray-200 bg-white p-8 shadow-2xl md:p-10">

                {/* HEADER */}
                <div className="mb-10">

                  <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-3">

                    <MessageSquare size={16} />

                    <span className="text-xs uppercase tracking-[0.3em] text-gray-700">
                      Contact Form
                    </span>

                  </div>

                  <h2 className="mb-4 text-4xl font-black">
                    Send Message
                  </h2>

                  <p className="max-w-lg text-gray-500">
                    Fill out the form below and our team will
                    contact you shortly with premium support.
                  </p>

                </div>

                {/* SUCCESS */}
                {submitted ? (
                  <div className="py-16 text-center">

                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">

                      <CheckCircle2 size={44} />

                    </div>

                    <h3 className="mb-5 text-4xl font-black">
                      Message Sent
                    </h3>

                    <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-gray-500">
                      Thank you for contacting NextGrid Lifestyle.
                      Our team will connect with you shortly.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 font-bold text-white transition duration-500 hover:scale-105"
                    >
                      Send Another

                      <ArrowRight size={18} />

                    </button>

                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >

                    {/* ROW */}
                    <div className="grid gap-6 md:grid-cols-2">

                      <div>

                        <label className="mb-3 block text-sm font-medium text-gray-600">
                          Full Name
                        </label>

                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="h-16 w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 text-black outline-none placeholder:text-gray-400 focus:border-black"
                        />

                      </div>

                      <div>

                        <label className="mb-3 block text-sm font-medium text-gray-600">
                          Email Address
                        </label>

                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="h-16 w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 text-black outline-none placeholder:text-gray-400 focus:border-black"
                        />

                      </div>

                    </div>

                    {/* SUBJECT */}
                    <div>

                      <label className="mb-3 block text-sm font-medium text-gray-600">
                        Subject
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Project Discussion"
                        className="h-16 w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 text-black outline-none placeholder:text-gray-400 focus:border-black"
                      />

                    </div>

                    {/* MESSAGE */}
                    <div>

                      <label className="mb-3 block text-sm font-medium text-gray-600">
                        Message
                      </label>

                      <textarea
                        required
                        rows={6}
                        placeholder="Write your message..."
                        className="w-full rounded-3xl border border-gray-300 bg-gray-50 px-5 py-5 text-black outline-none placeholder:text-gray-400 focus:border-black"
                      />

                    </div>

                    {/* FEATURES */}
                    <div className="grid gap-5 md:grid-cols-3">

                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center transition duration-500 hover:shadow-xl">

                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                          <ShieldCheck size={20} />
                        </div>

                        <h4 className="mb-2 font-bold">
                          Secure
                        </h4>

                        <p className="text-sm text-gray-500">
                          Encrypted data protection
                        </p>

                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center transition duration-500 hover:shadow-xl">

                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                          <Headphones size={20} />
                        </div>

                        <h4 className="mb-2 font-bold">
                          Support
                        </h4>

                        <p className="text-sm text-gray-500">
                          Fast premium assistance
                        </p>

                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center transition duration-500 hover:shadow-xl">

                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                          <Clock3 size={20} />
                        </div>

                        <h4 className="mb-2 font-bold">
                          Response
                        </h4>

                        <p className="text-sm text-gray-500">
                          Reply within 24 hours
                        </p>

                      </div>

                    </div>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      className="group flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-black font-bold text-white transition duration-500 hover:scale-[1.02]"
                    >
                      Send Message

                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />

                    </button>

                  </form>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}