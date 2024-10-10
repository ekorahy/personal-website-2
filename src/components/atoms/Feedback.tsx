import { FeedbackProps } from "@/types/about";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Feedback({ image, index }: FeedbackProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <Image
        className="flex h-full w-80 items-center"
        src={image}
        width={400}
        height={400}
        alt={`Feedback image ${index + 1}`}
      />
    </motion.div>
  );
}
