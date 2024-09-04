export interface BlogProps {
  currentSlug: string;
  title: string;
  currentImage: string;
  tags: string[];
  description: string;
  createdAt: string;
}

export interface BlogListProps {
  blog: BlogProps[];
}

export interface BlogItemProps {
  slug: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  createdAt: string;
}

export interface TagListProps {
  tags: string[];
}

export interface TagItemProps {
  tag: string;
}

export interface BlogSectionProps {
  initialData: BlogProps[];
}

export interface SearchBarProps {
  keyword: string;
  keywordChange: (newKeyword: string) => void;
  removeKeyword: () => void;
}

export interface TagsFilterProps {
  keyword: string;
  tags: string[];
  onTagHandler: (tag: string) => void;
}