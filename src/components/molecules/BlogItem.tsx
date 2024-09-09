"use client";

import { urlFor } from "@/sanity/lib/image";
import { BlogItemProps } from "@/types/blog";
import Image from "next/image";
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
            <span className="absolute bottom-0 right-0 bg-black/30 px-4 py-1 text-sm text-white backdrop-blur lg:text-base">
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
            <h3 className="my-2 line-clamp-3 text-base font-bold lg:text-lg">
              {title}
            </h3>
            <p className="mb-4 line-clamp-3 text-justify text-base lg:text-lg">
              {description}
            </p>
          </div>
        </section>
      </Link>
    </li>
  );
}
