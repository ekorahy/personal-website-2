import { getProjects } from "@/sanity/lib/querying";
import ProjectsList from "../organisms/ProjectsList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Projects" />
        <div className="hidden lg:block">
          <ButtonLink title="View More" route="/projects" variant="tertiary" />
        </div>
      </div>
      {projects.length === 0 ? (
        <p>Projects is Empty.</p>
      ) : (
        <ProjectsList projects={projects} />
      )}
      <div className="mt-8 flex justify-center lg:hidden">
        <ButtonLink title="View More" route="/projects" variant="tertiary" />
      </div>
    </section>
  );
}
