import { urlFor } from "@/sanity/lib/image";
import { ProjectItemProps } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  id,
  name,
  image,
  demoLink,
}: ProjectItemProps) {
  return (
    <section className="group">
      <div className="relative mb-4">
        <Image
          className="object-cover h-60 w-full sm:h-96 lg:h-[50rem]"
          src={urlFor(image).url()}
          width={400}
          height={256}
          alt={`${name} image`}
        />
        <h3 className="text-4xl font-bold hidden absolute inset-0 group-hover:flex items-center justify-center text-white bg-zinc-950 bg-opacity-50">
          {name}
        </h3>
      </div>
      <div className="[&>*]:text-xl flex gap-4 items-center ">
        <Link href={`/project/${id}`}>Detail</Link>
        <Link href={demoLink}>Visit Website</Link>
      </div>
    </section>
  );
}
