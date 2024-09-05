import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ProjectsSection from "@/components/templates/ProjectsSection";
import { getProjects } from "@/sanity/lib/querying";

export default async function Projects() {
  const projects = await getProjects();
  console.log(projects);

  return (
    <article className="my-20">
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
    </article>
  );
}
