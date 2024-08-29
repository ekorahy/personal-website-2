export interface ProjectsProps {
  currentId: string;
  name: string;
  currentImage: string;
  demo_link: string;
}

export interface ProjectsListProps {
  projects: ProjectsProps[];
}

export interface ProjectItemProps {
  id: string;
  name: string;
  image: string;
  demoLink: string;
}