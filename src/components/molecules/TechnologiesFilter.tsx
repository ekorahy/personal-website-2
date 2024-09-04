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
            "whitespace-nowrap rounded-full px-8 py-2 shadow duration-300 ease-in-out hover:scale-110",
            {
              "bg-amber-400": selectedTech === tech,
              "bg-zinc-50": selectedTech !== tech,
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
