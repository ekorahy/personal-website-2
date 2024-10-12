"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function RectangleShape() {
  const pathname = usePathname();

  const pathnameRoute = pathname === "/" || pathname === "/about";
  return (
    <>
      {pathnameRoute && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute -top-20 right-0 -z-10 h-96 w-40 bg-zinc-950 dark:bg-zinc-50 sm:w-80 lg:w-96 2xl:-right-8"
        />
      )}
    </>
  );
}
