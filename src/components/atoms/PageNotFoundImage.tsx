"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PageNotFoundImage() {
  const { theme } = useTheme();

  const [sourceImage, setSourceImage] = useState("/light-page-not-found.png");

  useEffect(() => {
    setSourceImage(
      theme === "light" || theme === undefined
        ? "/light-page-not-found.png"
        : "/dark-page-not-found.png",
    );
  }, [theme]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <Image
        className="mx-auto"
        src={sourceImage}
        height={300}
        width={300}
        alt="Illustration image for page not found"
      />
    </motion.div>
  );
}
