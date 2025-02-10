interface Id {
  current: string;
  _type: string;
}

interface ProjectsProps {
  id: Id;
  name: string;
  image: string;
  category: string;
  demo_link: string;
}

interface ProjectsListProps {
  projects: ProjectsProps[];
}

interface ProjectItemProps {
  id: Id;
  name: string;
  image: string;
  demoLink: string;
  category: string;
  index: number;
}

interface StackListProps {
  stack: string[];
}

interface StackItemProps {
  item: string;
}

interface FullProjectsProps {
  id: Id;
  name: string;
  image: string;
  technologies: string[];
  currentImage: string;
  demo_link: string;
  category: string;
}

interface ProjectSectionProps {
  initialData: FullProjectsProps[];
}

interface CategoryFilterProps {
  category: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

interface ButtonPaginationProps {
  variant: "left" | "value" | "next";
  value?: number;
  disabled?: boolean;
  active?: boolean;
  onClick: () => void;
};