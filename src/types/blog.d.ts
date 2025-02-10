interface BlogProps {
  _id: string;
  slug: Id;
  title: string;
  image: string;
  tags: string[];
  description: string;
  created_at: string;
  estimatedReadingTime: number;
  views: number;
}

interface BlogListProps {
  blog: BlogProps[];
}

interface BlogItemProps {
  _id: string;
  slug: Id;
  title: string;
  image: string;
  description: string;
  created_at: string;
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