"use client";

import { useEffect, useState } from "react";
import { LogoProps } from "@/types/header";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo({
  width,
  height,
  isWithText = true,
  isDark = false,
}: LogoProps) {
  const { theme } = useTheme();
  const [imageSource, setImageSource] = useState<string>("/light-logo.png");
  const [textStyles, setTextStyles] = useState<string>("");

  useEffect(() => {
    const updatedImageSource =
      theme === "light" || theme === undefined
        ? isDark
          ? "/dark-logo.png"
          : "/light-logo.png"
        : !isDark
          ? "/dark-logo.png"
          : "/light-logo.png";

    setImageSource(updatedImageSource);

    const updatedTextStyles =
      theme === "light"
        ? isDark
          ? "text-zinc-50 dark:text-zinc-950"
          : "text-zinc-950 dark:text-zinc-50"
        : !isDark
          ? "text-zinc-950 dark:text-zinc-50"
          : "text-zinc-50 dark:text-zinc-950";

    setTextStyles(updatedTextStyles);
  }, [theme, isDark]);

  return (
    <Link href="/" className="flex w-max items-center gap-1">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ rotate: 360, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image
          src={imageSource}
          width={width}
          height={height}
          alt="Logo Ekorahy"
        />
      </motion.div>
      {isWithText && (
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={clsx("text-xl font-bold lg:text-2xl", textStyles)}
        >
          Ekorahy
        </motion.h1>
      )}
    </Link>
  );
}
