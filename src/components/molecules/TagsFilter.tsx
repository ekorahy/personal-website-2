import { TagsFilterProps } from "@/types/blog";
import clsx from "clsx";

export default function TagsFilter({
  keyword,
  tags,
  onTagHandler,
}: TagsFilterProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 sm:flex-row">
      <h3 className="whitespace-nowrap text-xl font-bold sm:mt-1 lg:text-lg">
        Search by tag:
      </h3>
      <div className="flex gap-4 overflow-auto pb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={clsx(
              "whitespace-nowrap rounded-full px-8 py-2 shadow hover:bg-amber-300",
              {
                "bg-amber-400": keyword.toLowerCase() === tag.toLowerCase(),
                "bg-zinc-50": keyword.toLowerCase() !== tag.toLowerCase(),
              },
            )}
            onClick={() => onTagHandler(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
