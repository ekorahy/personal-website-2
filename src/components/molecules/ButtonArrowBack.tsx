import { ButtonArrowBackProps } from "@/types/component";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import * as motion from "framer-motion/client";

export default function ButtonArrowBack({
  title,
  route,
}: ButtonArrowBackProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <Link
        className="mb-8 flex w-max items-center gap-2 hover:text-amber-400 hover:dark:text-amber-400 lg:text-lg"
        href={route}
      >
        <IoMdArrowBack className="text-2xl" />
        Back to {title}
      </Link>
    </motion.div>
  );
}
