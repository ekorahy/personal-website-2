import Image from "next/image";
import HeroIcon from "../atoms/HeroIcon";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse gap-8 lg:flex-row lg:gap-4">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap text-xl">
            Hi, I&apos;m <span className="font-bold text-amber-400">Eksa</span>
          </p>
          <div className="h-[0.1rem] w-2/4 bg-black" />
        </div>
        <h2 className="mb-4 text-6xl font-bold">Front-end Engineer</h2>
        <p className="mb-8 text-xl">
          Tell me about your <span className="text-amber-400">ideas</span>, I
          will <span className="text-amber-400">manifest</span> them for you
          through <span className="text-amber-400">digital reality</span>.
        </p>
        <div className="flex items-center gap-4 text-xl">
          <Link
            className="bg-amber-400 px-4 py-3 hover:bg-amber-500 lg:px-8 lg:py-4"
            href="/"
          >
            Contact Me
          </Link>
          <Link
            className="border border-amber-400 px-4 py-3 hover:bg-amber-500 lg:px-8 lg:py-4"
            href="/"
          >
            View Projects
          </Link>
        </div>
      </div>
      <div className="group relative z-10 mx-auto h-full overflow-hidden rounded-br-[8rem] rounded-tl-[8rem] bg-amber-400 hover:grayscale-0 lg:rounded-br-[14rem] lg:rounded-tl-[14rem]">
        <Image
          className="z-10 grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
          src="/hero.png"
          height={600}
          width={600}
          alt="Hero image"
        />
        <HeroIcon
          src="/tech/ic-react.svg"
          width={100}
          height={100}
          title="react.js"
          className="absolute left-4 top-20 group-hover:animate-spin sm:left-16 sm:top-40 lg:left-16 lg:top-48"
        />
        <HeroIcon
          src="/tech/ic-nextjs.svg"
          width={200}
          height={200}
          title="next.js"
          className="absolute -bottom-20 -left-10 lg:bottom-10 lg:left-4"
        />
        <HeroIcon
          src="/tech/ic-figma.svg"
          width={50}
          height={20}
          title="figma"
          className="absolute right-20 top-20 rotate-12"
        />
        <HeroIcon
          src="/tech/ic-tailwind.svg"
          width={70}
          height={70}
          title="tailwind"
          className="absolute left-40 top-4 rotate-12 sm:left-80 lg:left-80 lg:top-4"
        />
        <HeroIcon
          src="/tech/ic-typescript.svg"
          width={70}
          height={70}
          title="typescript"
          className="absolute left-10 top-0 -rotate-12 sm:left-36 sm:top-16 lg:left-32 lg:top-10"
        />
        <HeroIcon
          src="/tech/ic-nodejs.svg"
          width={70}
          height={70}
          title="node.js"
          className="absolute bottom-20 right-8 rotate-12 sm:bottom-40 lg:bottom-40 lg:right-16"
        />
        <HeroIcon
          src="/tech/ic-css.svg"
          width={70}
          height={70}
          title="css"
          className="absolute -right-4 -top-4"
        />
        <HeroIcon
          src="/tech/ic-html.svg"
          width={40}
          height={40}
          title="html"
          className="absolute right-4 top-32 sm:top-60 lg:top-60"
        />
        <HeroIcon
          src="/tech/ic-javascript.svg"
          width={70}
          height={70}
          title="javascript"
          className="absolute right-40 top-32 sm:top-48 lg:top-60"
        />
        <HeroIcon
          src="/tech/ic-bootstrap.svg"
          width={70}
          height={70}
          title="bootstrap"
          className="absolute bottom-0 right-1 rotate-45 sm:bottom-10 sm:right-20 lg:bottom-4 lg:right-16"
        />
        <HeroIcon
          src="/tech/ic-redux.svg"
          width={70}
          height={70}
          title="redux"
          className="absolute -left-12 top-40 sm:left-0 sm:top-80 lg:-left-4 lg:top-24"
        />
      </div>
    </section>
  );
}
