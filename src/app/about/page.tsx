import ButtonLink from "@/components/atoms/ButtonLink";
import Feedbacks from "@/components/molecules/Feedbacks";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import { Metadata } from "next";
import Image from "next/image";
import * as motion from "framer-motion/client";

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
              descriptionVariant="primary"
            />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
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
        <div className="[&>*]:mb-4 [&>p]:text-justify [&>p]:text-base [&>p]:lg:text-lg">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            Hi, I am Eko Rahayu Widodo, you can call me Eko. I am a Front-end
            Engineer based in Indonesia with more than a year of experience
            building websites using React Ecosystem.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            I currently actively contribute to{" "}
            <ButtonLink
              title="Dicoding Indonesia"
              route="https://www.dicoding.com/users/ekorahayu/academies"
              variant="paragraf"
            />{" "}
            as an External Code Reviewer and responsible for providing
            assessments of projects submitted by students, especially in the
            Front-end Web and React.js learning paths, as well as some basic
            classes from several other learning paths, in addition to providing
            assessments I also provide advice regarding best practices in
            writing code based on the technology used by students with the aim
            to improve the quality and efficiency of the code written.
          </motion.p>
          <Feedbacks />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            I am a lifelong learner with experience in the programming world
            since 2019. Over the years, I have explored various technologies,
            including desktop application development (Java), full-stack web
            development (PHP native, Yii2, Laravel), front-end web development
            (React), back-end development (Node.js, Hapi), native Android
            development (Kotlin, XML, Jetpack Compose), machine learning models
            (Python, TensorFlow), and multi-platform app development (Dart,
            Flutter). While I have learned several of these technologies, I
            decided not to dive too deeply into all of them.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            In recent years, I&#39;ve chosen to specialize in front-end
            development, particularly for web applications. This decision is
            driven by my dedication to creating visually appealing designs and
            delivering seamless user experiences. I am passionate about the
            visual aspects of web development and the challenge of crafting
            intuitive, responsive, and user-friendly applications. My commitment
            to optimizing user experience and creating innovative technical
            solutions has solidified my focus in this field, where I truly enjoy
            working and continuously growing.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            I learn and deepen my knowledge of front-end development through
            courses, tech documentation, blogs, and YouTube. I combine insights
            from these learning sources to form the foundation for developing
            applications.
          </motion.p>
        </div>
      </section>
    </ArticleSection>
  );
}
