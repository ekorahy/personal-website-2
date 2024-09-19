import { ButtonSocialMediaItemProps } from "@/types/footer";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function ButtonSocialMediaItem({
  name,
  link,
  logo,
  index,
}: ButtonSocialMediaItemProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 1.2 + (index + 1) * 0.3,
      }}
    >
      <Link
        className="text-3xl text-zinc-50 hover:text-amber-400 dark:text-zinc-950 hover:dark:text-amber-400"
        href={link}
        title={name}
      >
        {logo}
      </Link>
    </motion.div>
  );
}
