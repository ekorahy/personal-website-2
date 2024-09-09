import { TagsFilterProps } from "@/types/blog";
import clsx from "clsx";

export default function TagsFilter({
  keyword,
  tags,
  onTagHandler,
}: TagsFilterProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 lg:gap-4 sm:flex-row">
      <h3 className="whitespace-nowrap text-lg font-bold sm:mt-1">
        Search by tag:
      </h3>
      <div className="flex gap-4 overflow-auto pb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={clsx(
              "whitespace-nowrap text-base rounded-full px-8 py-2 hover:bg-amber-300 hover:dark:bg-amber-300 hover:dark:text-zinc-950",
              {
                "bg-amber-400": keyword.toLowerCase() === tag.toLowerCase(),
                "border border-zinc-950 bg-white dark:border-zinc-50 dark:bg-black":
                  keyword.toLowerCase() !== tag.toLowerCase(),
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
