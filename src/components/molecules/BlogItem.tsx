"use client";

import { urlFor } from "@/sanity/lib/image";
import { BlogItemProps } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import formattedDate from "@/utils/formattedDate";
import { IoMdEye, IoMdTime } from "react-icons/io";
import { incrementViews } from "@/sanity/lib/querying";
import { motion } from "framer-motion";

export default function BlogItem({
  id,
  slug,
  title,
  image,
  description,
  createdAt,
  estimatedReadingTime,
  views,
  index,
}: BlogItemProps) {
  const handleItemClick = async () => {
    try {
      await incrementViews(id);
    } catch (error) {
      throw error;
    }
  };
  return (
    <motion.li
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: (index + 1) / 10,
      }}
      onClick={handleItemClick}
    >
      <Link href={`/blog/${slug}`}>
        <section className="h-full transform cursor-pointer border-b-4 border-amber-400 bg-zinc-100 shadow transition-transform duration-300 hover:scale-105 dark:bg-zinc-900">
          <div className="relative h-max">
            <Image
              className="h-60 w-full object-cover"
              src={urlFor(image).url()}
              width={400}
              height={400}
              alt={`${title} image`}
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-black/30 px-4 py-1 text-white backdrop-blur">
              {formattedDate(createdAt)}
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2">
                <IoMdTime />
                <span className="bg-amber-400 px-2 text-sm lg:text-base">
                  {estimatedReadingTime} min read
                </span>
              </p>
              <p className="flex items-center gap-2 px-2">
                <IoMdEye />{" "}
                <span className="bg-amber-400 px-2 text-sm lg:text-base">
                  {views} views
                </span>
              </p>
            </div>
            <h3 className="my-2 line-clamp-3 text-lg font-bold lg:text-xl">
              {title}
            </h3>
            <p className="mb-4 line-clamp-3 text-justify text-base lg:text-lg">
              {description}
            </p>
          </div>
        </section>
      </Link>
    </motion.li>
  );
}
