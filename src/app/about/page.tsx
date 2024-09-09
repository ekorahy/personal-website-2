import ButtonLink from "@/components/atoms/ButtonLink";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Eko Rahayu Widodo, also known as Eksa, a passionate Front-end Engineer from Indonesia with experience in building websites using the React Ecosystem. Discover his professional journey, contributions as an External Code Reviewer, and his transition from being a generalist developer to specializing in front-end web applications.",
  keywords: [
    "Eksa",
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
          <div className="group relative mx-auto w-max">
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
          </div>
        </div>
        <div className="[&>*]:mb-4 [&>p]:text-justify [&>p]:text-base [&>p]:lg:text-lg">
          <p>
            Hi, I&apos;m Eko Rahayu Widodo, you can call me Eksa. I am a
            Front-end Engineer based in Indonesia with more than a year of
            experience building websites using React Ecosystem.
          </p>
          <p>
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
          </p>
          <p>
            I am a graduate of the Informatics study program at one of the
            universities in Jakarta, Indonesia. During my study, I learn many
            things, especially in the discipline of software engineering. I have
            experience in developing desktop applications using Java, full-stack
            web using PHP Native, Yii Framework, and JavaScript libraries or
            frameworks such as React.js and Express.js. In addition, I have
            experience in developing mobile applications with Flutter
            (multi-platform) and Kotlin (Android native), as well as developing
            machine learning models using Python and TensorFlow.
          </p>
          <p>
            I learned some of the above technologies but not too deeply, and I
            decided to choose one area that I wanted to work on, in the past few
            years, I have decided to move from being a generalist to
            specializing in front-end development, especially in web
            applications. I made this decision after realizing the huge market
            opportunity in this field, especially with the growing number of
            startups, and companies undergoing digital transformation. With the
            need for fast, responsive, and user-friendly web applications, I see
            a great opportunity to continue to grow and make a significant
            contribution through my ability to create optimal user experience
            and innovative technical solutions. Also due to my passion for
            visual aspects, I thoroughly enjoy working and progressing in this
            field.
          </p>
          <p>
            I learn and deepen my knowledge of front-end development through
            courses, tech documentation, blogs, and YouTube. I combine insights
            from these learning sources to form the foundation for developing
            applications.
          </p>
        </div>
      </section>
    </ArticleSection>
  );
}
