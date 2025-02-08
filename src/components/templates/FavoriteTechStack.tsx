import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ButtonLink from "../atoms/ButtonLink";
import * as motion from "framer-motion/client";

export default function FavoriteTechStack() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-flow-col md:grid-cols-3">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.1,
          }}
          className="group relative row-span-10 flex min-h-[250px] flex-col justify-between overflow-hidden rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900 lg:p-8"
        >
          <div className="relative z-20 space-y-2">
            <h3 className="text-xl font-semibold">Language</h3>
            <p className="lg:text-lg">
              Use{" "}
              <ButtonLink
                title="JavaScript"
                route="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                variant="paragraph"
              />{" "}
              as the core language and{" "}
              <ButtonLink
                title="TypeScript"
                route="https://www.typescriptlang.org/"
                variant="paragraph"
              />{" "}
              to enhance it with type definitions and static type checking.
            </p>
          </div>
          <Image
            className="absolute -bottom-4 -right-4 duration-300 ease-in-out group-hover:-rotate-45 group-hover:scale-150"
            src="/tech/ic-javascript.svg"
            width={200}
            height={200}
            alt="JavaScript logo image"
          />
          <Image
            className="absolute -bottom-4 right-32 duration-300 ease-in-out group-hover:scale-125"
            src="/tech/ic-typescript.svg"
            width={150}
            height={150}
            alt="TypeScript logo image"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-zinc-100 to-transparent dark:from-zinc-900" />
        </motion.section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.2,
          }}
          className="group relative row-span-5 flex min-h-[250px] flex-col justify-between overflow-hidden rounded-lg bg-cyan-100 p-4 dark:bg-cyan-900 lg:p-8"
        >
          <div className="relative z-20 space-y-2">
            <h3 className="text-xl font-semibold">Front-end Web</h3>
            <p className="lg:text-lg">
              Empowering Front-end Web development with{" "}
              <ButtonLink
                title="React.js"
                route="https://react.dev/"
                variant="paragraph"
              />
              , a robust and efficient JavaScript library for building dynamic
              and scalable user interfaces.
            </p>
          </div>
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:-bottom-24">
            <Image
              className="duration-300 group-hover:animate-spin"
              src="/tech/ic-react.svg"
              width={400}
              height={400}
              alt="React logo image"
            />
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-cyan-100 to-transparent dark:from-cyan-900" />
        </motion.section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.2,
          }}
          className="group relative row-span-5 flex min-h-[250px] flex-col justify-between overflow-hidden rounded-lg bg-green-100 p-4 dark:bg-green-900 lg:p-8"
        >
          <div className="relative z-20 space-y-2">
            <h3 className="text-xl font-semibold">Style</h3>
            <p className="lg:text-lg">
              Elevating Front-end Web styling with{" "}
              <ButtonLink
                title="Tailwind CSS"
                route="https://tailwindcss.com/"
                variant="paragraph"
              />
              , a utility-first framework designed for rapid development,
              responsiveness, and seamless customization.
            </p>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              className="duration-300 ease-in-out group-hover:scale-125 group-hover:animate-pulse"
              src="/tech/ic-tailwind.svg"
              width={200}
              height={200}
              alt="Tailwind logo image"
            />
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-green-100 to-transparent dark:from-green-900" />
        </motion.section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.2,
          }}
          className="group relative row-span-9 flex min-h-[250px] flex-col justify-between overflow-hidden rounded-lg bg-zinc-700 p-4 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 lg:p-8"
        >
          <div className="relative z-20 space-y-2">
            <h3 className="text-xl font-semibold">Framework</h3>
            <p className="lg:text-lg">
              Enhancing Front-end Web performance with{" "}
              <ButtonLink
                title="Next.js"
                route="https://nextjs.org/"
                variant="paragraph"
              />
              , a powerful React framework that excels in optimization, SEO, and
              seamless routing, making applications fast, scalable, and
              user-friendly.
            </p>
          </div>
          <Image
            className="absolute -bottom-8 -right-8 duration-300 ease-in-out group-hover:scale-150"
            src="/tech/ic-nextjs.svg"
            width={200}
            height={200}
            alt="Next.js logo image"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-tl from-zinc-700 to-transparent dark:from-zinc-100" />
        </motion.section>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.2,
          }}
          className="group row-span-1 min-h-[80px] rounded-lg border border-amber-400 p-4 duration-300 ease-in-out hover:bg-amber-400 lg:text-lg"
        >
          <Link
            className="flex h-full items-center justify-center gap-2"
            href="/technologies"
          >
            See more technologies{" "}
            <FaArrowRightLong className="duration-300 ease-in-out group-hover:-rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
