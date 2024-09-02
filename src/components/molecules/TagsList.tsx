import { TagListProps } from "@/types/blog";
import TagItem from "../atoms/TagItem";

export default function TagsList({ tags }: TagListProps) {
  return (
    <div className="flex items-center gap-2 overflow-auto lg:flex-wrap lg:justify-center">
      {tags.map((tag, idx) => (
        <TagItem key={idx} tag={tag} />
      ))}
    </div>
  );
}
