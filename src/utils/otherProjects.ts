import { ProjectsProps } from "@/types/projects";

export function getOtherProjects(projects: ProjectsProps[], name: string) {
  return projects
    .filter(project => project.name !== name)
    .slice(0, 6);
}