import { TagItemProps } from "@/types/blog";

export default function TagItem({ tag }: TagItemProps) {
  return (
    <span className="whitespace-nowrap rounded-3xl border bg-white px-8 py-1">
      {tag}
    </span>
  );
}
