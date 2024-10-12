export default function TagItem({ tag }: TagItemProps) {
  return (
    <span className="whitespace-nowrap rounded-full bg-white/60 px-8 py-1 backdrop-blur dark:bg-black/60">
      {tag}
    </span>
  );
}
