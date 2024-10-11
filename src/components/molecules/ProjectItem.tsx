import { urlFor } from "@/sanity/lib/image";
import { ProjectItemProps } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../atoms/ButtonLink";
import { PiGlobeThin } from "react-icons/pi";
import * as motion from "framer-motion/client";
import { AiOutlineAndroid } from "react-icons/ai";

export default function ProjectItem({
  id,
  name,
  image,
  demoLink,
  category,
  index,
}: ProjectItemProps) {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: (index + 1) / 10,
      }}
    >
      <div className="group relative mb-2">
        <Image
          className="h-60 w-full object-cover sm:h-80 md:h-96 lg:h-80 xl:h-96"
          src={urlFor(image).url()}
          width={560}
          height={448}
          alt={`${name} image`}
        />
        <Link
          className="absolute bottom-0 left-0 right-0 top-0 hidden items-center justify-center group-hover:flex"
          href={`/projects/${id}`}
        >
          <h3 className="group/title line-clamp-1 flex items-center gap-2 overflow-hidden rounded-full bg-zinc-950/40 px-8 py-4 text-xl font-bold text-zinc-50 backdrop-blur">
            {category === "Android App" ? (
              <AiOutlineAndroid className="text-xl transition-transform duration-300 ease-in-out group-hover/title:scale-[5] group-hover/title:text-zinc-50/20 lg:text-2xl" />
            ) : (
              <PiGlobeThin className="text-xl transition-transform duration-300 ease-in-out group-hover/title:scale-[5] group-hover/title:text-zinc-50/20 lg:text-2xl" />
            )}
            <span>{name}</span>
          </h3>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ButtonLink
          title="Detail"
          route={`/projects/${id}`}
          variant="default"
        />
        <ButtonLink
          title={category === "Android App" ? "Visit" : "Visit Website"}
          route={demoLink}
          variant="default"
        />
      </div>
    </motion.section>
  );
}
