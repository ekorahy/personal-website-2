import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import ProjectsSection from "@/components/templates/ProjectsSection";
import { getProjects } from "@/sanity/lib/querying";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcasing my works in software engineering.",
  keywords: [
    "software engineering",
    "projects",
    "web development",
    "front-end",
    "back-end",
    "mobile applications",
    "open source",
    "digital solutions",
    "user experience",
    "performance optimization",
    "React",
    "JavaScript",
    "programming",
    "front-end development",
    "Eksa",
    "Eko Rahayu Widodo",
  ],
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <ArticleSection>
      <section>
        <div className="mb-4">
          <TitleWithDescriptionSection
            title="Projects"
            description="Showcasing my works."
            titleVariant="secondary"
            descriptionVariant="secondary"
          />
        </div>
        <ProjectsSection initialData={projects} />
      </section>
    </ArticleSection>
  );
}
