"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function EmptyDataImage() {
  const { theme } = useTheme();

  const sourceImage =
    theme === "light" ? "/light-empty-data.png" : "/dark-empty-data.png";
  return (
    <Image
      className="mx-auto mt-16"
      src={sourceImage}
      width={300}
      height={300}
      alt="Illustration image for empty data"
    />
  );
}
