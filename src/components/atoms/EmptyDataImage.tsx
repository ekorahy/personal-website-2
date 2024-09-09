"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EmptyDataImage() {
  const { theme } = useTheme();
  const [sourceImage, setSourceImage] = useState("/light-empty-data.png");

  useEffect(() => {
    setSourceImage(theme === "light" || theme === undefined ? "/light-empty-data.png" : "/dark-empty-data.png");
  }, [theme]);

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
