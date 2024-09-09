import { HireMeItemProps } from "@/types/hireme";

export default function HireMeItem({
  title,
  description,
  icon,
}: HireMeItemProps) {
  return (
    <div className="flex flex-col bg-white px-4 py-12 text-center shadow-2xl shadow-zinc-100 dark:bg-black dark:shadow-zinc-900">
      <span className="mx-auto mb-2 w-max rounded-full border border-amber-400 p-3 text-2xl text-amber-400">
        {icon}
      </span>
      <h4 className="mb-1 text-base font-bold">{title}</h4>
      <p className="text-base">{description}</p>
    </div>
  );
}
