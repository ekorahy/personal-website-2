import { TechnologiesFilterProps } from "@/types/projects";
import clsx from "clsx";

export default function TechnologiesFilter({
  technologies,
  selectedTech,
  onTechChange,
}: TechnologiesFilterProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
      {technologies.map((tech) => (
        <button
          key={tech}
          className={clsx(
            "whitespace-nowrap rounded-full px-8 py-2 duration-300 ease-in-out hover:scale-110 hover:bg-amber-300 hover:dark:bg-amber-300 hover:dark:text-zinc-950",
            {
              "bg-amber-400": selectedTech === tech,
              "border border-zinc-950 bg-white dark:border-zinc-50 dark:bg-black":
                selectedTech !== tech,
            },
          )}
          onClick={() => onTechChange(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
