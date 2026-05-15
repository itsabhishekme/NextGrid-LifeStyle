import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Heart,
  Eye,
  ShoppingBag,
  Star,
  Sparkles,
  ShieldCheck,
  Truck,
} from "lucide-react";

type ProductCardProps = {
  name: string;
  price: string;
};

const productImages = [
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
];

export default function ProductCard({
  name,
  price,
}: ProductCardProps) {
  const randomImage =
    productImages[
      Math.floor(Math.random() * productImages.length)
    ];

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[35px]
        border
        border-gray-200
        bg-white
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
      "
    >

      {/* TOP BADGE */}
      <div className="absolute left-5 top-5 z-20">

        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">

          <Sparkles className="h-4 w-4" />

          <span className="text-xs font-bold uppercase tracking-[0.2em]">
            Premium
          </span>

        </div>

      </div>

      {/* FAVORITE */}
      <button
        className="
          absolute
          right-5
          top-5
          z-20
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white/90
          shadow-lg
          backdrop-blur-xl
          transition
          hover:scale-110
        "
      >

        <Heart className="h-5 w-5" />

      </button>

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <Image
          src={randomImage}
          alt={name}
          width={1200}
          height={1200}
          unoptimized
          className="
            h-[420px]
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

        {/* QUICK ACTIONS */}
        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-20
            flex
            -translate-x-1/2
            translate-y-10
            gap-3
            opacity-0
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >

          <button
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-xl
              transition
              hover:scale-110
            "
          >

            <Eye className="h-5 w-5" />

          </button>

          <button
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              shadow-xl
              transition
              hover:scale-110
            "
          >

            <ShoppingBag className="h-5 w-5" />

          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        {/* CATEGORY */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
            Luxury Fashion
          </span>

        </div>

        {/* NAME */}
        <h3
          className="
            mb-4
            text-3xl
            font-black
            leading-tight
            tracking-tight
            transition
            duration-300
            group-hover:text-gray-600
          "
        >
          {name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-6 leading-relaxed text-gray-500">
          Discover premium craftsmanship, modern aesthetics,
          and elevated fashion designed for confidence,
          comfort, and timeless luxury identity.
        </p>

        {/* RATING */}
        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-2 text-yellow-500">

            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                className="h-5 w-5 fill-yellow-500"
              />
            ))}

            <span className="ml-2 text-sm font-semibold text-gray-600">
              4.9 Rating
            </span>

          </div>

          <div className="text-sm font-medium text-gray-500">
            120+ Reviews
          </div>

        </div>

        {/* FEATURES */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">

            <div className="rounded-full bg-black p-2 text-white">

              <ShieldCheck className="h-4 w-4" />

            </div>

            <div>

              <h4 className="text-sm font-bold">
                Premium Quality
              </h4>

              <p className="text-xs text-gray-500">
                Luxury materials
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">

            <div className="rounded-full bg-black p-2 text-white">

              <Truck className="h-4 w-4" />

            </div>

            <div>

              <h4 className="text-sm font-bold">
                Fast Delivery
              </h4>

              <p className="text-xs text-gray-500">
                Worldwide shipping
              </p>

            </div>

          </div>

        </div>

        {/* PRICE + BUTTON */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* PRICE */}
          <div>

            <p className="mb-1 text-sm uppercase tracking-[0.2em] text-gray-400">
              Starting From
            </p>

            <h4 className="text-4xl font-black">
              {price}
            </h4>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <button
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-gray-300
                bg-white
                px-6
                py-4
                font-semibold
                transition-all
                duration-500
                hover:bg-black
                hover:text-white
              "
            >
              Wishlist
            </button>

            <Link
              href="#"
              className="
                group/button
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-black
                px-7
                py-4
                font-bold
                text-white
                transition-all
                duration-500
                hover:scale-105
              "
            >

              Buy Now

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition
                  duration-300
                  group-hover/button:translate-x-1
                "
              />

            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[4px]
          w-full
          bg-gradient-to-r
          from-black
          via-gray-400
          to-black
        "
      />

    </div>
  );
}