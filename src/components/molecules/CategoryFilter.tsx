import { CategoryFilterProps } from "@/types/projects";
import clsx from "clsx";
import * as motion from "framer-motion/client";

export default function CategoryFilter({
  category,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="mb-8 flex flex-wrap items-center justify-center gap-2 lg:gap-4"
    >
      {category.map((item) => (
        <button
          key={item}
          className={clsx(
            "whitespace-nowrap rounded-full px-8 py-2 text-base duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:dark:bg-amber-400 hover:dark:text-zinc-950",
            {
              "bg-amber-400": selectedCategory === item,
              "bg-zinc-100 dark:bg-zinc-900": selectedCategory !== item,
            },
          )}
          onClick={() => onCategoryChange(item)}
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
