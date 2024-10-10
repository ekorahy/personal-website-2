import { ButtonDrawerProps } from "@/types/header";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import * as motion from "framer-motion/client";

export default function ButtonDrawer({ handleMenuOpen }: ButtonDrawerProps) {
  return (
    <motion.button
      initial={{ rotate: 180, scale: 0 }}
      whileInView={{ rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="rounded-full bg-zinc-100 px-3 hover:bg-zinc-300 dark:bg-zinc-900 hover:dark:bg-zinc-700"
      onClick={handleMenuOpen}
    >
      <HiOutlineMenuAlt4 className="text-2xl" />
    </motion.button>
  );
}
