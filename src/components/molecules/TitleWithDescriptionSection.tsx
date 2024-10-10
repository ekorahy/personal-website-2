import { TitleWithDescriptionProps } from "@/types/component";
import clsx from "clsx";
import * as motion from "framer-motion/client";

export default function TitleWithDescriptionSection({
  title,
  description,
  titleVariant,
  descriptionVariant,
  isWithDash = true,
}: TitleWithDescriptionProps) {
  const titleVariantClass = {
    primary: "text-amber-400",
    secondary: "text-zinc-950 dark:text-zinc-50",
  }[titleVariant];

  const descriptionVarianClass = {
    primary: "text-amber-400",
    secondary: "text-zinc-950 dark:text-zinc-50",
  }[descriptionVariant];

  return (
    <>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={clsx(titleVariantClass, "text-2xl", {
          "flex w-full items-center gap-2 whitespace-nowrap": isWithDash,
        })}
      >
        <span className="font-bold">{title}</span>
        {isWithDash && (
          <span
            className={clsx("h-[0.1rem] w-2/4 rounded-full", {
              "bg-zinc-950 dark:bg-zinc-50": titleVariant === "secondary",
              "bg-amber-400": titleVariant === "primary",
            })}
          />
        )}
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={clsx("text-base lg:text-lg", descriptionVarianClass)}
      >
        {description}
      </motion.p>
    </>
  );
}
