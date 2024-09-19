import ButtonLink from "@/components/atoms/ButtonLink";
import PageNotFoundImage from "@/components/atoms/PageNotFoundImage";
import * as motion from "framer-motion/client";

export default function NotFound() {
  return (
    <div className="my-20">
      <PageNotFoundImage />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.9,
        }}
        className="mx-auto mt-4 w-max"
      >
        <ButtonLink title="Back to home" route="/" variant="primary" />
      </motion.div>
    </div>
  );
}
