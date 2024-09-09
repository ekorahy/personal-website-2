import { CategoryFilterProps } from "@/types/projects";
import clsx from "clsx";

export default function CategoryFilter({
  category,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-2 lg:gap-4">
      {category.map((item) => (
        <button
          key={item}
          className={clsx(
            "whitespace-nowrap text-base rounded-full px-8 py-2 duration-300 ease-in-out hover:scale-110 hover:bg-amber-300 hover:dark:bg-amber-300 hover:dark:text-zinc-950",
            {
              "bg-amber-400": selectedCategory === item,
              "border border-zinc-950 bg-white dark:border-zinc-50 dark:bg-black":
                selectedCategory !== item,
            },
          )}
          onClick={() => onCategoryChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
