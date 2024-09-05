"use client";

import { useState, useEffect } from "react";
import ButtonDrawer from "../atoms/ButtonDrawer";
import Logo from "../atoms/Logo";
import NavList from "../molecules/NavList";
import clsx from "clsx";
import AdditionalFeatures from "../molecules/AdditionalFeatures";

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden">
      <div className="flex justify-between">
        <Logo width={50} height={50} />
        <ButtonDrawer handleMenuOpen={handleMenuOpen} />
      </div>
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 top-0 z-20 h-full w-full transform bg-zinc-50 transition-transform duration-1000 ease-in-out dark:bg-zinc-950",
          {
            "-translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          },
        )}
        onClick={handleMenuOpen}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <NavList />
          <AdditionalFeatures />
        </div>
      </div>
    </div>
  );
}
