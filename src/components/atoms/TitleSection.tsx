import { TitleSectionProps } from "@/types/component";
import clsx from "clsx";

export default function TitleSection({
  title,
  isWithDash = true,
}: TitleSectionProps) {
  return (
    <h2
      className={clsx("", {
        "mb-8 text-center text-2xl": !isWithDash,
        "flex w-full items-center gap-2 whitespace-nowrap text-3xl": isWithDash,
      })}
    >
      <span className="font-bold">{title}</span>
      {isWithDash && (
        <span className="h-[0.1rem] w-2/4 rounded-full bg-zinc-950" />
      )}
    </h2>
  );
}
