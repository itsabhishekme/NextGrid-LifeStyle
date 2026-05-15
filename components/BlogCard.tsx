import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Clock3,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  Sparkles,
} from "lucide-react";

type BlogCardProps = {
  title: string;
};

const blogImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
];

export default function BlogCard({
  title,
}: BlogCardProps) {
  const randomImage =
    blogImages[
      Math.floor(Math.random() * blogImages.length)
    ];

  return (
    <article
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

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <Image
          src={randomImage}
          alt={title}
          width={1200}
          height={900}
          unoptimized
          className="
            h-[320px]
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* TOP BADGE */}
        <div className="absolute left-5 top-5">

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">

            <Sparkles className="h-4 w-4" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Featured
            </span>

          </div>

        </div>

        {/* SAVE BUTTON */}
        <button
          className="
            absolute
            right-5
            top-5
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

          <Bookmark className="h-5 w-5" />

        </button>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-5 left-5 right-5 text-white">

          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">

            <div className="flex items-center gap-2">

              <Clock3 className="h-4 w-4" />

              <span>5 Min Read</span>

            </div>

            <div className="flex items-center gap-2">

              <Eye className="h-4 w-4" />

              <span>12.5K Views</span>

            </div>

          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur-xl">

            Fashion Journal

          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        {/* CATEGORY */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
            Luxury Streetwear
          </span>

        </div>

        {/* TITLE */}
        <h2
          className="
            mb-5
            text-3xl
            font-black
            leading-tight
            tracking-tight
            transition
            duration-300
            group-hover:text-gray-600
          "
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mb-8 leading-relaxed text-gray-500">
          Explore premium fashion inspiration, modern streetwear
          culture, luxury styling tips, and timeless aesthetics
          designed for elevated personalities and modern lifestyles.
        </p>

        {/* AUTHOR */}
        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="overflow-hidden rounded-full border border-gray-200">

              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                alt="Author"
                width={55}
                height={55}
                unoptimized
                className="h-[55px] w-[55px] object-cover"
              />

            </div>

            <div>

              <h4 className="font-bold">
                NextGrid Team
              </h4>

              <p className="text-sm text-gray-500">
                Fashion Editor
              </p>

            </div>

          </div>

          {/* STATS */}
          <div className="flex items-center gap-5 text-gray-500">

            <div className="flex items-center gap-2">

              <Heart className="h-5 w-5" />

              <span className="text-sm font-medium">
                2.1K
              </span>

            </div>

            <div className="flex items-center gap-2">

              <MessageCircle className="h-5 w-5" />

              <span className="text-sm font-medium">
                320
              </span>

            </div>

          </div>

        </div>

        {/* BUTTON */}
        <Link
          href="#"
          className="
            group/button
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-black
            px-7
            py-4
            font-semibold
            text-white
            transition-all
            duration-500
            hover:scale-105
          "
        >

          Read Full Article

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

      {/* BOTTOM GLOW */}
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

    </article>
  );
}