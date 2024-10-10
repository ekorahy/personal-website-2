import { TagsFilterProps } from "@/types/blog";
import clsx from "clsx";

import * as motion from "framer-motion/client";

export default function TagsFilter({
  keyword,
  tags,
  onTagHandler,
}: TagsFilterProps) {
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
      className="mb-4 flex flex-col gap-2 sm:flex-row lg:gap-4"
    >
      <h3 className="whitespace-nowrap text-lg font-bold sm:mt-1">
        Search by tag:
      </h3>
      <div className="flex gap-4 overflow-auto pb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={clsx(
              "whitespace-nowrap rounded-full px-8 py-2 text-base hover:bg-amber-400 hover:dark:bg-amber-400 hover:dark:text-zinc-950",
              {
                "bg-amber-400": keyword.toLowerCase() === tag.toLowerCase(),
                "bg-zinc-100 dark:bg-zinc-900":
                  keyword.toLowerCase() !== tag.toLowerCase(),
              },
            )}
            onClick={() => onTagHandler(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
