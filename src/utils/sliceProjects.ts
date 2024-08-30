import { BlogProps } from "@/types/blog";
import { ProjectsProps } from "@/types/projects";

export function sliceProjects(projects: ProjectsProps[]) {
  if (projects.length > 2) {
    return projects.slice(0, 2);
  } else {
    return projects;
  }
}

export function sliceBlog(blog: BlogProps[]) {
  if (blog.length > 3) {
    return blog.slice(0, 3);
  } else {
    return blog;
  }
}