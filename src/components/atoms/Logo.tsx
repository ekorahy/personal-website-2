import { LogoProps } from "@/types/header";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width,
  height,
  isWithText = true,
  isDark = false,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src={isDark ? "/dark-logo.png" : "/light-logo.png"}
        width={width}
        height={height}
        alt="Logo eksa"
      />
      {isWithText && (
        <h1
          className={clsx("text-xl font-bold lg:text-2xl", {
            "text-white": isDark,
          })}
        >
          EKSA
        </h1>
      )}
    </Link>
  );
}
