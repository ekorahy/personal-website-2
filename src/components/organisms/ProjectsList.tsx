import { ProjectsListProps } from "@/types/projects";
import ProjectItem from "../molecules/ProjectItem";

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {projects.map(({ currentId, name, currentImage, demo_link }) => (
        <ProjectItem
          key={currentId}
          id={currentId}
          name={name}
          image={currentImage}
          demoLink={demo_link}
        />
      ))}
    </div>
  );
}
