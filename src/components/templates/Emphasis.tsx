import Button from "../atoms/Button";
import { EmphasisProps } from "@/types/component";
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function Emphasis({
  isWithProjectsButton = true,
}: EmphasisProps) {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="relative flex items-center justify-between gap-8 overflow-hidden bg-amber-400 px-8 py-12"
    >
      <Image
        className="absolute left-0 h-full w-3/4 object-cover"
        src="/collaboration.jpg"
        width={400}
        height={400}
        alt={`collaboration image`}
      />
      <div className="absolute top-0 h-full w-full bg-gradient-to-l from-amber-400 from-40% to-transparent" />
      <div className="relative z-20 mx-auto w-max">
        <h2 className="mb-4 text-center text-xl font-bold md:text-2xl">
          Interested in collaborating to build something impactful? Let&rsquo;s
          make it happen together!
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {isWithProjectsButton && (
            <Button
              route="/projects"
              name="See more projects"
              variant="secondary-border"
            />
          )}
          <Button
            route="mailto:ekorahy@gmail.com"
            name="Email me"
            variant="email-secondary"
          />
        </div>
      </div>
    </motion.section>
  );
}
