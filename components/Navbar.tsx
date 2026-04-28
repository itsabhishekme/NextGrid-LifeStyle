"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // ✅ Safe scroll lock with cleanup
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
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16"
        aria-label="Main Navigation"
      >
        {/* 🔥 LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
        >
          <Image
            src="/favicon.ico"
            alt="NextGrid Logo"
            width={36}
            height={36}
            priority
            className="rounded-md group-hover:scale-105 transition"
          />

          <span className="text-xl font-bold tracking-tight group-hover:opacity-80 transition">
            NextGrid LifeStyle
          </span>
        </Link>

        {/* 🖥️ DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition ${
                isActive(link.href)
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}

              {isActive(link.href) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* 🔍 ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <Search size={20} />
          </button>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>

          <Link
            href="/shop"
            className="bg-black text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* 📱 MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Toggle Menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* 📱 MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between px-6 py-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            type="button"
            aria-label="Close Menu"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${
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
            className="bg-black text-white text-center py-3 rounded-xl mt-4"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* 🌑 BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}