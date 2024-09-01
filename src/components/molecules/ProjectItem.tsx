import { urlFor } from "@/sanity/lib/image";
import { ProjectItemProps } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../atoms/ButtonLink";
import { PiGlobeThin } from "react-icons/pi";

export default function ProjectItem({
  id,
  name,
  image,
  demoLink,
}: ProjectItemProps) {
  return (
    <section className="">
      <div className="group relative mb-4">
        <Image
          className="w-full object-cover"
          src={urlFor(image).url()}
          width={560}
          height={448}
          alt={`${name} image`}
        />
        <Link
          className="absolute bottom-0 left-0 right-0 top-0 hidden items-center justify-center group-hover:flex"
          href={`/project/${id}`}
        >
          <h3 className="group/title flex items-center gap-2 overflow-hidden rounded-full bg-zinc-950/40 px-8 py-4 text-xl font-bold text-zinc-50 backdrop-blur">
            <PiGlobeThin className="text-2xl transition-transform duration-300 ease-in-out group-hover/title:scale-[5] group-hover/title:text-zinc-50/20" />
            <span>{name}</span>
          </h3>
        </Link>
      </div>
      <div className="flex items-center gap-4 [&>*]:text-xl">
        <ButtonLink title="Detail" route={`/project/${id}`} variant="default" />
        <ButtonLink title="Visit Website" route={demoLink} variant="default" />
      </div>
    </section>
  );
}
