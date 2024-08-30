import { TagItemProps } from "@/types/blog";

export default function TagItem({ tag }: TagItemProps) {
  return <span className="rounded-3xl border px-8 py-1">{tag}</span>;
}
