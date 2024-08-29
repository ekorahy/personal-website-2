import { ProjectsListProps } from "@/types/projects";
import sliceProjects from "@/utils/sliceProjects";
import ProjectItem from "../molecules/ProjectItem";

export default function ProjectsList({ projects }: ProjectsListProps) {
  const slicedProjects = sliceProjects(projects);
  return (
    <div className="grid grid-cols-1 gap-8">
      {slicedProjects.map(({ currentId, name, currentImage, demo_link }) => (
        <ProjectItem key={currentId} id={currentId} name={name} image={currentImage} demoLink={demo_link} />
      ))}
    </div>
  );
}
