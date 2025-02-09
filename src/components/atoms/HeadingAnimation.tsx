"use client";

import { heroHeading } from "@/constant/hero-heading";
import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";

export default function HeadingAnimation() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentHeadingIndex(
          (prevIndex) => (prevIndex + 1) % heroHeading.length,
        );
        setIsFading(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.h2
      initial={{ x: -50, scale: 0 }}
      whileInView={{ x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className={`z-10 mb-4 mt-2 text-4xl font-bold transition-opacity duration-1000 ease-in-out lg:text-5xl ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      {heroHeading[currentHeadingIndex]}
    </motion.h2>
  );
}
