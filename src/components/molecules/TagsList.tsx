import { TagListProps } from "@/types/blog";
import TagItem from "../atoms/TagItem";

export default function TagsList({ tags }: TagListProps) {
  return (
    <div className="absolute bottom-4 right-4 flex flex-wrap items-center justify-end gap-2 lg:bottom-8 lg:right-8">
      {tags.map((tag, idx) => (
        <TagItem key={idx} tag={tag} />
      ))}
    </div>
  );
}
