import { getProjects } from "@/sanity/lib/querying";
import ProjectsList from "../organisms/ProjectsList";
import Link from "next/link";


export default async function Projects() {
  const projects = await getProjects();

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex w-full items-center gap-2">
          <h2 className="text-4xl font-bold lg:text-5xl">Projects</h2>
          <div className="h-[0.1rem] w-2/4 bg-black" />
        </div>
        <Link
          className="hidden whitespace-nowrap px-4 py-2 text-xl sm:block"
          href="/projects"
        >
          View More
        </Link>
      </div>
      {projects.length === 0 ? (
        <p>Projects is Empty.</p>
      ) : (
        <ProjectsList projects={projects} />
      )}
      <div className="mt-8 flex justify-center sm:hidden">
        <Link className="px-4 py-2 text-xl" href="/projects">
          View More
        </Link>
      </div>
    </section>
  );
}
