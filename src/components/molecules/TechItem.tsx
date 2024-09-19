import { TechItemProps } from "@/types/tech";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function TechItem({ name, logo, index }: TechItemProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.6 + (index + 1) * 0.1,
      }}
      className="flex items-center gap-2 rounded-full bg-white px-6 py-2"
    >
      <Image src={logo} width={25} height={25} alt={`${name} icon`} />
      <p className="text-base dark:text-zinc-950 lg:text-lg">{name}</p>
    </motion.div>
  );
}
