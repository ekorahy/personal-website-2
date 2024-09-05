import { urlFor } from "@/sanity/lib/image";
import { BlogItemProps } from "@/types/blog";
import Image from "next/image";
import TagsList from "./TagsList";
import Link from "next/link";
import formattedDate from "@/utils/formattedDate";

export default function BlogItem({
  slug,
  title,
  image,
  tags,
  description,
  createdAt,
}: BlogItemProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <section className="h-full transform cursor-pointer border-b-4 border-amber-400 bg-white shadow-2xl shadow-zinc-100 transition-transform duration-300 hover:scale-105 dark:bg-black dark:shadow-zinc-900">
        <div className="relative h-max">
          <Image
            className="h-60 w-full object-cover"
            src={urlFor(image).url()}
            width={400}
            height={400}
            alt={`${title} image`}
          />
          <span className="absolute bottom-0 right-0 bg-black/30 px-4 py-1 text-lg text-white backdrop-blur">
            {formattedDate(createdAt)}
          </span>
        </div>
        <div className="p-4">
          <h3 className="mb-2 mt-2 line-clamp-3 text-xl font-bold">{title}</h3>
          <p className="mb-4 line-clamp-3 text-lg">{description}</p>
        </div>
      </section>
    </Link>
  );
}
