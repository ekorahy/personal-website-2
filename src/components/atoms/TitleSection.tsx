import { TitleSectionProps } from "@/types/component";
import clsx from "clsx";
import * as motion from "framer-motion/client";

export default function TitleSection({
  title,
  isWithDash = true,
  variant = "secondary",
  size = "3xl",
  alignment = "left",
}: TitleSectionProps) {
  const titleVariantClass = {
    primary: "text-amber-400",
    secondary: "text-zinc-950 dark:text-zinc-50",
  }[variant];

  const titleSizeClass = {
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  }[size];

  const titleAlignmentClass = {
    left: "text-left",
    center: "text-center mx-auto mb-4",
  }[alignment];

  return (
    <motion.h2
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={clsx(titleVariantClass, titleSizeClass, titleAlignmentClass, {
        "flex w-full items-center gap-2 whitespace-nowrap": isWithDash,
      })}
    >
      <span className="font-bold">{title}</span>
      {isWithDash && (
        <span
          className={clsx("h-[0.1rem] w-2/4 rounded-full", {
            "bg-zinc-950 dark:bg-zinc-50": variant === "secondary",
            "bg-amber-400": variant === "primary",
          })}
        />
      )}
    </motion.h2>
  );
}
