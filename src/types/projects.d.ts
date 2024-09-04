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

export interface StackListProps {
  stack: string[];
}

export interface StackItemProps {
  item: string;
}

export interface FullProjectsProps {
  currentId: string;
  name: string;
  technologies: string[];
  currentImage: string;
  demo_link: string;
}

export interface ProjectSectionProps {
  initialData: FullProjectsProps[];
}

export interface TechnologiesFilterProps {
  technologies: string[];
  selectedTech: string;
  onTechChange: (tech: string) => void;
}