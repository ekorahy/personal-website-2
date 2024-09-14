"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";

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
    <button
      className="rounded-full bg-amber-400 p-4 text-xl lg:text-lg"
      onClick={toggleThemeHandler}
    >
      {icon}
    </button>
  );
}
