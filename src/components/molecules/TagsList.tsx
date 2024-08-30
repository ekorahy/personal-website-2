import { TagListProps } from "@/types/blog";
import TagItem from "../atoms/TagItem";

export default function TagsList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag, idx) => (
        <TagItem key={idx} tag={tag} />
      ))}
    </div>
  );
}
