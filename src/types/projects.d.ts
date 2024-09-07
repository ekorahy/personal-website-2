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
  category: string;
}

export interface ProjectSectionProps {
  initialData: FullProjectsProps[];
}

export interface CategoryFilterProps {
  category: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface ButtonPaginationProps {
  variant: "left" | "value" | "next";
  value?: number;
  disabled?: boolean;
  active?: boolean;
  onClick: () => void;
};