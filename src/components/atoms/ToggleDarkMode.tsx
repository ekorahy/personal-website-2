import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();

  const toggleThemeHandler = () => {
    if (theme === "light" || theme === undefined) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className="rounded-full bg-amber-400 p-4 text-xl lg:text-lg"
      onClick={toggleThemeHandler}
    >
      {theme === "light" || theme === undefined ? <RxSun /> : <RxMoon />}
    </button>
  );
}
