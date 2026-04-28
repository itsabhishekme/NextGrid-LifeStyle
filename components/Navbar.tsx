"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // 🔥 Scroll effect (premium feel)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* 🔥 HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/favicon.ico"
              alt="logo"
              width={38}
              height={38}
              className="rounded-lg group-hover:scale-110 transition"
            />

            <span className="text-xl font-semibold tracking-tight">
              NextGrid LifeStyle
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group"
              >
                <span
                  className={`transition ${
                    isActive(link.href)
                      ? "text-black"
                      : "text-gray-500 group-hover:text-black"
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                    isActive(link.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-4">

            <button type="button" title="Search" className="p-2 hover:bg-black/5 rounded-full transition">
              <Search size={20} />
            </button>

            <Link
              href="/cart"
              className="relative p-2 hover:bg-black/5 rounded-full transition"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </Link>

            <Link
              href="/shop"
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              Shop
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-white backdrop-blur-xl shadow-2xl transform transition duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between px-6 py-5 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button type="button" title="Close menu" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`transition ${
                isActive(link.href)
                  ? "text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="bg-black text-white text-center py-3 rounded-full mt-4"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}