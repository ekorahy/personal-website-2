import { getProjects } from "@/sanity/lib/querying";
import ProjectsList from "../organisms/ProjectsList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";
import { sliceProjects } from "@/utils/sliceProjects";
import EmptyDataImage from "../atoms/EmptyDataImage";

export default async function HomeProjects() {
  const projects = await getProjects();
  const slicedProjects = sliceProjects(projects);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Projects" size="2xl" />
        {projects.length !== 0 && (
          <div className="hidden lg:block">
            <ButtonLink
              title="View More"
              route="/projects"
              variant="tertiary"
            />
          </div>
        )}
      </div>
      {projects.length === 0 ? (
        <EmptyDataImage />
      ) : (
        <ProjectsList projects={slicedProjects} />
      )}
      {projects.length !== 0 && (
        <div className="mt-8 flex justify-center lg:hidden">
          <ButtonLink title="View More" route="/projects" variant="tertiary" />
        </div>
      )}
    </section>
  );
}
