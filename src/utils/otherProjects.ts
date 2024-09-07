import { ProjectsProps } from "@/types/projects";

export function getOtherProjects(projects: ProjectsProps[], name: string) {
  const filteredProjects = projects.filter(blog => blog.name !== name);
  const shuffledProjects = filteredProjects.sort(() => Math.random() - 0.5);
  return shuffledProjects.slice(0, 2);
}