"use client";

import { usePathname } from "next/navigation";

export default function RectangleShape() {
  const pathname = usePathname();

  const pathnameRoute = pathname === "/" || pathname === "/about";
  return (
    <>
      {pathnameRoute && (
        <div className="absolute -top-20 right-0 -z-10 h-96 w-40 bg-zinc-950 dark:bg-zinc-50 sm:w-80 lg:w-96 2xl:-right-8" />
      )}
    </>
  );
}
