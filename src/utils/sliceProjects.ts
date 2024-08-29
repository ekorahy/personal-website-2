import { ProjectsProps } from "@/types/projects";

export default function sliceProjects(projects: ProjectsProps[]) {
  if (projects.length > 2) {
    return projects.slice(0, 2);
  } else {
    return projects;
  }
}