import TitleSection from "@/components/atoms/TitleSection";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ProjectsList from "@/components/organisms/ProjectsList";
import { getProjects } from "@/sanity/lib/querying";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <article className="my-20">
      <section>
        <div className="mb-4">
          <TitleWithDescriptionSection
            title="Projects"
            description="Showcasing my works."
            titleVariant="secondary"
            descriptionVariant="primary"
          />
        </div>
        {projects.length > 0 ? (
          <ProjectsList projects={projects} />
        ) : (
          <p>Projects is empty.</p>
        )}
      </section>
    </article>
  );
}
