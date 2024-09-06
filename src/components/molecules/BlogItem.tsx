"use client";

import { urlFor } from "@/sanity/lib/image";
import { BlogItemProps } from "@/types/blog";
import Image from "next/image";
import TagsList from "./TagsList";
import Link from "next/link";
import formattedDate from "@/utils/formattedDate";
import { IoMdEye, IoMdTime } from "react-icons/io";
import { incrementViews } from "@/sanity/lib/querying";

export default function BlogItem({
  id,
  slug,
  title,
  image,
  description,
  createdAt,
  estimatedReadingTime,
  views,
}: BlogItemProps) {
  const handleItemClick = async () => {
    try {
      await incrementViews(id);
    } catch (error) {
      throw error;
    }
  };
  return (
    <li onClick={handleItemClick}>
      <Link href={`/blog/${slug}`}>
        <section className="h-full transform cursor-pointer border-b-4 border-amber-400 shadow transition-transform duration-300 hover:scale-105">
          <div className="relative h-max">
            <Image
              className="h-60 w-full object-cover"
              src={urlFor(image).url()}
              width={400}
              height={400}
              alt={`${title} image`}
            />
            <span className="absolute bottom-0 right-0 bg-black/30 px-4 py-1 text-xl text-white backdrop-blur lg:text-lg">
              {formattedDate(createdAt)}
            </span>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 px-2 bg-amber-400">
                <IoMdTime />
                {estimatedReadingTime} min read
              </p>
              <p className="flex items-center gap-2 px-2 bg-amber-400">
                <IoMdEye /> {views} views
              </p>
            </div>
            <h3 className="mb-2 mt-4 line-clamp-3 text-2xl font-bold lg:text-xl">
              {title}
            </h3>
            <p className="mb-4 line-clamp-3 text-xl lg:text-lg">
              {description}
            </p>
          </div>
        </section>
      </Link>
    </li>
  );
}
