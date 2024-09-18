"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";
import { motion } from "framer-motion";

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState<JSX.Element>(<RxSun />);

  useEffect(() => {
    const updatedIcon = theme === "dark" ? <RxMoon /> : <RxSun />;
    setIcon(updatedIcon);
  }, [theme]);

  const toggleThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.6,
      }}
      className="rounded-full bg-amber-400 p-4 text-xl lg:text-lg"
      onClick={toggleThemeHandler}
    >
      {icon}
    </motion.button>
  );
}
