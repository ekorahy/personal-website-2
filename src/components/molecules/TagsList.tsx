import TagItem from "../atoms/TagItem";
import * as motion from "framer-motion/client";

export default function TagsList({ tags }: TagListProps) {
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
      className="absolute bottom-4 right-4 flex flex-wrap items-center justify-end gap-2 lg:bottom-8 lg:right-8"
    >
      {tags.map((tag, idx) => (
        <TagItem key={idx} tag={tag} />
      ))}
    </motion.div>
  );
}
