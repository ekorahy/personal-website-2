import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import TitleSection from "../atoms/TitleSection";
import Button from "../atoms/Button";
import ButtonLink from "../atoms/ButtonLink";

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
      <div className="[&>*]:mb-4 [&>p]:text-justify [&>p]:text-base [&>p]:lg:text-lg">
        <TitleSection title="About me" size="2xl" />
        <p>
          Hi, I&apos;m Eko Rahayu Widodo, you can call me Eksa. I am a Front-end
          Engineer based in Indonesia with more than a year of experience
          building websites using React Ecosystem.
        </p>
        <p>
          I currently actively contribute to{" "}
          <ButtonLink
            title="Dicoding Indonesia"
            route="https://www.dicoding.com/users/ekorahayu/academies"
            variant="paragraf"
          />{" "}
          as an External Code Reviewer and responsible for providing assessments
          of projects submitted by students, especially in the Front-end Web and
          React.js learning paths, as well as some basic classes from several
          other learning paths, in addition to providing assessments I also
          provide advice regarding best practices in writing code based on the
          technology used by students with the aim to improve the quality and
          efficiency of the code written.
        </p>
        <Button name="Read more" route="/about" variant="primary" />
      </div>
    </section>
  );
}
