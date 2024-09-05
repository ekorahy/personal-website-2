"use client";

import { LogoProps } from "@/types/header";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width,
  height,
  isWithText = true,
  isDark = false,
}: LogoProps) {
  const { theme } = useTheme();

  const imageSource =
    theme === "light" || theme === undefined
      ? isDark
        ? "/dark-logo.png"
        : "/light-logo.png"
      : !isDark
        ? "/dark-logo.png"
        : "/light-logo.png";
  const textStyles =
    theme === "light"
      ? isDark
        ? "text-zinc-50 dark:text-zinc-950"
        : "text-zinc-950 dark:text-zinc-50"
      : !isDark
        ? "text-zinc-950 dark:text-zinc-50"
        : "text-zinc-50 dark:text-zinc-950";

  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src={imageSource} width={width} height={height} alt="Logo eksa" />
      {isWithText && (
        <h1 className={clsx("text-xl font-bold lg:text-2xl", textStyles)}>
          EKSA
        </h1>
      )}
    </Link>
  );
}
