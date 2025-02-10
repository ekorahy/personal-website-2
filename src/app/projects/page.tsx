import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import ProjectsSection from "@/components/templates/ProjectsSection";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/querying";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcasing my works.",
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
    "Ekorahy",
    "Eko Rahayu Widodo",
  ],
};

export default async function Projects() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY,
  });

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
