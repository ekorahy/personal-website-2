import ButtonLink from "@/components/atoms/ButtonLink";
import Feedbacks from "@/components/molecules/Feedbacks";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import { Metadata } from "next";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { about } from "@/constant/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Eko Rahayu Widodo, also known as Ekorahy, a passionate Front-end Engineer from Indonesia with experience in building websites using the React Ecosystem. Discover his professional journey, contributions as an External Code Reviewer, and his transition from being a generalist developer to specializing in front-end web applications.",
  keywords: [
    "Ekorahy",
    "Eko Rahayu Widodo",
    "Front-end Engineer",
    "About",
    "React",
    "JavaScript",
    "Dicoding Indonesia",
    "Web Development",
    "Software Engineering",
    "Code Reviewer",
    "Java",
    "PHP",
    "Kotlin",
    "Flutter",
    "Machine Learning",
    "Python",
    "TensorFlow",
  ],
};

export default function About() {
  return (
    <ArticleSection>
      <section className="[&>*]:mb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col justify-center">
            <TitleWithDescriptionSection
              title="About"
              description="Short story about me."
              titleVariant="secondary"
              descriptionVariant="secondary"
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="group relative mx-auto w-max"
          >
            <div className="absolute left-0 right-0 top-0 -z-0 mx-auto h-full w-56 transform border-2 border-amber-400 transition duration-300 ease-in-out group-hover:rotate-12 sm:w-96" />
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
        </div>
        <div className="[&>*]:mb-4 [&>p]:text-base [&>p]:lg:text-lg">
          {about.map((item, index) => (
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </section>
    </ArticleSection>
  );
}
