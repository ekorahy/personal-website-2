import { HeroIconProps } from "@/types/hero";
import clsx from "clsx";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function HeroIcon({
  src,
  title,
  className,
  width,
  height,
}: HeroIconProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.9,
      }}
    >
      <Image
        src={src}
        height={height}
        width={width}
        alt={`${title} icon`}
        className={clsx(
          "-z-10 grayscale transition duration-300 ease-in-out group-hover:grayscale-0",
          className,
        )}
      />
    </motion.div>
  );
}
