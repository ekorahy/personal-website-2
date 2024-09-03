"use client";

import { NavItemProps } from "@/types/header";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ title, route }: NavItemProps) {
  const pathName = usePathname();
  const isActive = pathName === route;

  return (
    <Link
      href={route}
      className={clsx(
        "group relative mx-auto w-max py-3 text-center text-2xl hover:text-amber-400 lg:mx-4 lg:w-full lg:text-lg",
        { "font-bold text-amber-400": isActive },
      )}
    >
      {title}
      {/* Span element for underline effect */}
      <span
        className={clsx(
          "absolute bottom-0 left-0 h-[2px] rounded-full bg-amber-400 transition-all duration-300 lg:bottom-1.5",
          {
            "w-full": isActive,
            "w-0 group-hover:w-full": !isActive,
          },
        )}
      />
    </Link>
  );
}
