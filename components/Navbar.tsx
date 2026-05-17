"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
  submenu?: {
    name: string;
    href: string;
  }[];
};

export default function Navbar() {
  const pathname = usePathname() || "";

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
      submenu: [
        { name: "Men", href: "/shop/men" },
        { name: "Women", href: "/shop/women" },
        { name: "Accessories", href: "/shop/accessories" },
      ],
    },
    {
      name: "Collections",
      href: "/collections",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Body Scroll Lock
  useEffect(() => {
    const original = document.body.style.overflow;

    document.body.style.overflow =
      open || searchOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open, searchOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-black text-white text-xs tracking-wide">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <p className="uppercase">
            Free Shipping On Orders Above ₹1999
          </p>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/track-order">Track Order</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white/70 backdrop-blur-2xl shadow-2xl border-b border-black/5"
            : "top-9 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/logo/nextgrid-lifestyle.png"
                  alt="logo"
                  width={44}
                  height={44}
                  className="rounded-2xl group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl tracking-tight">
                  NextGrid
                </span>

                <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Lifestyle
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {link.name}

                    {link.submenu && (
                      <ChevronDown
                        size={15}
                        className="group-hover:rotate-180 transition duration-300"
                      />
                    )}
                  </Link>

                  {/* UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-black transition-all duration-300 ${
                      isActive(link.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />

                  {/* DROPDOWN */}
                  {link.submenu && (
                    <div className="absolute top-10 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-2xl rounded-2xl p-5 min-w-[220px] border border-gray-100">
                      <div className="flex flex-col gap-4">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-black transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="hidden lg:flex items-center gap-3">

              {/* SEARCH */}
              <button
                type="button"
                title="Search"
                onClick={() => setSearchOpen(true)}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <Search size={18} />
              </button>

              {/* ACCOUNT */}
              <Link
                href="/account"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <User size={18} />
              </Link>

              {/* WISHLIST */}
              <Link
                href="/wishlist"
                className="relative w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <Heart size={18} />

                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  4
                </span>
              </Link>

              {/* CART */}
              <Link
                href="/cart"
                className="relative w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                <ShoppingBag size={18} />

                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>

              {/* BUTTON */}
              <Link
                href="/shop"
                className="ml-3 bg-black text-white px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                Shop Now
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* SEARCH MODAL */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] transition duration-300 ${
          searchOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-start justify-center pt-40 px-6">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Search Products
              </h2>

              <button
                onClick={() => setSearchOpen(false)}
              >
                <X />
              </button>
            </div>

            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search premium products..."
                className="w-full h-16 rounded-2xl border border-gray-200 pl-14 pr-5 text-lg outline-none focus:border-black transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[90] shadow-2xl transition-all duration-500 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-24 border-b">

          <div>
            <h2 className="font-bold text-xl">
              Menu
            </h2>

            <p className="text-sm text-gray-500">
              Explore categories
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-4 border-b border-gray-100 text-lg transition ${
                isActive(link.href)
                  ? "font-bold text-black"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="grid grid-cols-2 gap-4 mt-8">

            <Link
              href="/wishlist"
              className="border rounded-2xl py-4 flex items-center justify-center gap-2"
            >
              <Heart size={18} />
              Wishlist
            </Link>

            <Link
              href="/cart"
              className="border rounded-2xl py-4 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Cart
            </Link>
          </div>

          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="mt-8 bg-black text-white py-4 rounded-2xl text-center font-semibold"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      {/* MOBILE BACKDROP */}
      {(open || searchOpen) && (
        <div
          className="fixed inset-0 bg-black/40 z-[70]"
          onClick={() => {
            setOpen(false);
            setSearchOpen(false);
          }}
        />
      )}
    </>
  );
}