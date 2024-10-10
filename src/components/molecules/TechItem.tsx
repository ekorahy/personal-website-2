import { TechItemProps } from "@/types/tech";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function TechItem({ name, logo, index }: TechItemProps) {
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
      className="flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-2 dark:bg-zinc-900"
    >
      <Image src={logo} width={25} height={25} alt={`${name} icon`} />
      <p className="text-base lg:text-lg">{name}</p>
    </motion.div>
  );
}
