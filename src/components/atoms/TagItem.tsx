import { TagItemProps } from "@/types/blog";

export default function TagItem({ tag }: TagItemProps) {
  return (
    <span className="whitespace-nowrap rounded-full border bg-white px-8 py-1 dark:bg-black">
      {tag}
    </span>
  );
}
