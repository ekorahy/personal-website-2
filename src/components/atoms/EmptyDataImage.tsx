"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function EmptyDataImage() {
  const { theme } = useTheme();
  const [sourceImage, setSourceImage] = useState("/light-empty-data.png");

  useEffect(() => {
    setSourceImage(
      theme === "light" || theme === undefined
        ? "/light-empty-data.png"
        : "/dark-empty-data.png",
    );
  }, [theme]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.6,
      }}
    >
      <Image
        className="mx-auto mt-16"
        src={sourceImage}
        width={300}
        height={300}
        alt="Illustration image for empty data"
      />
    </motion.div>
  );
}
