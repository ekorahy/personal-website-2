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
      <section
        className="cursor-pointer border-b-4 border-amber-400 shadow" // Set onClick to handle navigation
      >
        <div className="relative h-max">
          <Image
            className="h-60 w-full object-cover"
            src={urlFor(image).url()}
            width={400}
            height={400}
            alt={`${title} image`}
          />
          <span className="absolute bottom-0 right-0 bg-black/30 px-4 py-1 text-white backdrop-blur">
            {formattedDate(createdAt)}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mb-4 line-clamp-3">{description}</p>
          <TagsList tags={tags} />
        </div>
      </section>
    </Link>
  );
}
