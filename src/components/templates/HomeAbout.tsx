import Image from "next/image";
import TitleSection from "../atoms/TitleSection";
import Button from "../atoms/Button";
import ButtonLink from "../atoms/ButtonLink";
import * as motion from "framer-motion/client";
import { about } from "@/constant/about";

export default function HomeAbout() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="group relative mx-auto w-max"
      >
        <div className="absolute left-0 right-0 top-0 -z-10 mx-auto h-full w-56 transform border-2 border-amber-400 transition duration-300 ease-in-out group-hover:rotate-12 sm:w-96" />
        <Image
          className="mx-auto hidden grayscale group-hover:grayscale-0 sm:block"
          src="/about.jpg"
          width={350}
          height={450}
          alt="about image"
        />
        <Image
          className="mx-auto grayscale group-hover:grayscale-0 sm:hidden"
          src="/about.jpg"
          width={200}
          height={350}
          alt="about image"
        />
      </motion.div>
      <div className="[&>*]:mb-4 [&>p]:text-base [&>p]:lg:text-lg">
        <TitleSection title="About me" size="2xl" />
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {about[0]}
        </motion.p>
        <motion.p
          className="line-clamp-3"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {about[1]}
        </motion.p>
        <Button name="Read more" route="/about" variant="primary" />
      </div>
    </section>
  );
}
