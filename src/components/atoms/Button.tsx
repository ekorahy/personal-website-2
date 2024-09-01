import { ButtonProps } from "@/types/component";
import clsx from "clsx";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Button({ route, name, variant }: ButtonProps) {
  let buttonStyles = "";

  switch (variant) {
    case "primary":
      buttonStyles = "bg-blue-500 text-white px-4 py-2 rounded";
      break;
    case "primary-border":
      buttonStyles = "border border-amber-400 hover:text-amber-400";
      break;
    case "email":
      buttonStyles = "bg-amber-400 hover:bg-amber-500";
      break;
    case "secondary":
      buttonStyles = "bg-zinc-950 text-zinc-50";
      break;
    case "secondary-border":
      buttonStyles = "border border-zinc-950 text-amber-400";
      break;
    default:
      buttonStyles = "bg-gray-300 text-black px-4 py-2 rounded";
  }

  return (
    <Link
      href={route}
      className={clsx(
        "group flex items-center gap-2 overflow-hidden p-4 text-xl sm:px-8 sm:py-4 lg:text-lg",
        buttonStyles,
      )}
    >
      {variant === "email" && (
        <BiLogoGmail className="transition-transform duration-300 ease-in-out group-hover:scale-[10] group-hover:text-zinc-50" />
      )}{" "}
      <span className="z-10">{name}</span>{" "}
      {variant !== "email" && (
        <FaArrowCircleRight className="transition-transform duration-300 ease-in-out group-hover:-rotate-45 group-hover:scale-[10] group-hover:text-amber-400" />
      )}
    </Link>
  );
}
