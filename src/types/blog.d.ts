interface BlogProps {
  currentSlug: string;
  _id: string;
  title: string;
  currentImage: string;
  tags: string[];
  description: string;
  createdAt: string;
  estimatedReadingTime: number;
  views: number;
}

interface BlogListProps {
  blog: BlogProps[];
}

interface BlogItemProps {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  createdAt: string;
  estimatedReadingTime: number;
  views: number;
  index: number;
}

interface TagListProps {
  tags: string[];
}

interface TagItemProps {
  tag: string;
}

interface BlogSectionProps {
  initialData: BlogProps[];
}

interface SearchBarProps {
  keyword: string;
  keywordChange: (newKeyword: string) => void;
  removeKeyword: () => void;
}

interface TagsFilterProps {
  keyword: string;
  tags: string[];
  onTagHandler: (tag: string) => void;
}