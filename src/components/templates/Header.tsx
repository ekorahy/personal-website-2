"use client";

import { useEffect, useState } from "react";
import Navigation from "../organisms/Navigation";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx("fixed top-0 z-20 h-max w-full p-4 lg:px-8", {
        "bg-zinc-50 dark:bg-zinc-950": scrolled,
      })}
    >
      <Navigation />
    </header>
  );
}
