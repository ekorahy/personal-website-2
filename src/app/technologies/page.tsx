import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import TechList from "@/components/organisms/TechList";
import ArticleSection from "@/components/templates/ArticleSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Explore the technologies that I use to tackle problems based on user requirements.",
  keywords: [
    "Ekorahy",
    "Eko Rahayu Widodo",
    "Front-end Engineer",
    "About",
    "React",
    "JavaScript",
    "Web Development",
    "Software Engineering",
    "Java",
    "PHP",
    "Kotlin",
    "Flutter",
    "Machine Learning",
    "Python",
    "TensorFlow",
  ],
};

export default function Technologies() {
  return (
    <ArticleSection>
      <section>
        <TitleWithDescriptionSection
          title="Technologies"
          description="That I use to tackle problems based on user requirements."
          isWithDash
          titleVariant="secondary"
          descriptionVariant="secondary"
        />
        <TechList />
      </section>
    </ArticleSection>
  );
}
