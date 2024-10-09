import { feedbacks } from "@/constant/feedbacks";
import Feedback from "../atoms/Feedback";
import * as motion from "framer-motion/client";

export default function Feedbacks() {
  return (
    <section>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="mb-4 text-center font-bold lg:text-lg"
      >
        What did they say?
      </motion.h3>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="flex flex-wrap items-center justify-center bg-amber-400 p-4 lg:p-8"
      >
        {feedbacks.map(({ id, image }, idx) => (
          <Feedback key={id} image={image} index={idx} />
        ))}
      </motion.div>
    </section>
  );
}
