import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function HomeAbout() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
      <div className="group relative mx-auto w-max">
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
      </div>
      <div className="[&>*]:mb-4 [&>p]:text-xl">
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-bold lg:text-5xl">About</h2>
          <div className="h-[0.1rem] w-2/4 bg-black" />
        </div>
        <p>
          Hi, I&apos;m Eko Rahayu Widodo, you can call me Eksa. I&apos;m
          Front-end Engineer based in Indonesia with over a year of experiences
          building website using React Ecosystem.
        </p>
        <p>
          Now I am actively contribute to{" "}
          <Link
            href="https://www.dicoding.com/users/ekorahayu/academies"
            className="group underline hover:text-amber-400"
          >
            Dicoding Indonesia{" "}
            <FiArrowUpRight className="inline group-hover:animate-bounce-up-down" />
          </Link>{" "}
          as an External Code Reviewer and I responsible for providing
          assessments of student project submissions, especially in the
          Front-end Web and React.js learning paths, as well as some basic
          classes of several other learning paths, besides providing assessments
          I also provide advice regarding best practices in writing code based
          on the technology used with the aim to improving the quality and
          efficiency of the code written.
        </p>
        <Link
          className="inline-block bg-amber-400 px-8 py-3 text-xl hover:bg-amber-500"
          href="/about"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
