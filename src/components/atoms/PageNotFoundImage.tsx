"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function PageNotFoundImage() {
  const { theme } = useTheme();

  const sourceImage =
    theme === "light"
      ? "/light-page-not-found.png"
      : "/dark-page-not-found.png";
  return (
    <Image
      className="mx-auto"
      src={sourceImage}
      height={300}
      width={300}
      alt="Illustration image for page not found"
    />
  );
}
