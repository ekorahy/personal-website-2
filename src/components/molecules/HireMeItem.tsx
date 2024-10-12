import { HireMeItemProps } from "@/types/hireme";
import * as motion from "framer-motion/client";

export default function HireMeItem({
  title,
  description,
  icon,
  index,
}: HireMeItemProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: (index + 1) / 10,
      }}
      className="flex flex-col bg-white px-4 py-12 text-center shadow-2xl shadow-zinc-100 hover:shadow hover:shadow-amber-400 dark:bg-black dark:shadow-zinc-900 hover:dark:shadow-amber-400"
    >
      <span className="mx-auto mb-2 w-max rounded-full border border-amber-400 p-3 text-2xl text-amber-400">
        {icon}
      </span>
      <h4 className="mb-1 text-base font-bold">{title}</h4>
      <p className="text-base">{description}</p>
    </motion.div>
  );
}
