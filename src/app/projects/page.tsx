import TitleSection from "@/components/atoms/TitleSection";
import ProjectsList from "@/components/organisms/ProjectsList";
import { getProjects } from "@/sanity/lib/querying";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <article className="mt-20">
      <section className="[&>*]:mb-8">
        <TitleSection title="Projects" />
        {
          projects.length > 0 ? (
            <ProjectsList projects={projects} />
          ) : (
            <p>Projects is empty.</p>
          )
        }
      </section>
    </article>
  );
}
