import StackItem from "../atoms/StackItem";
import * as motion from "framer-motion/client";

export default function StackList({ stack }: StackListProps) {
  return (
    <motion.ul
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {stack.map((item, idx) => (
        <StackItem key={idx} item={item} />
      ))}
    </motion.ul>
  );
}
