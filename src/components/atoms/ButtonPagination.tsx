import { ButtonPaginationProps } from "@/types/projects";
import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export default function ButtonPagination({
  variant,
  value,
  disabled,
  active,
  onClick,
}: ButtonPaginationProps) {
  let buttonClass = "mx-2 px-4 py-2 text-base";

  switch (variant) {
    case "left":
      buttonClass += ` bg-zinc-100 dark:bg-zinc-900 ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-400 dark:hover:bg-amber-400"}`;
      break;
    case "next":
      buttonClass += ` bg-zinc-100 dark:bg-zinc-900 ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-400 dark:hover:bg-amber-400"}`;
      break;
    case "value":
      buttonClass += ` ${active ? "bg-amber-400 text-black dark:text-white" : "bg-zinc-100 hover:bg-amber-400 dark:hover:bg-amber-400 dark:bg-zinc-900 text-black dark:text-white"}`;
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {variant === "value" && value ? (
        value
      ) : variant === "left" ? (
        <IoMdArrowBack />
      ) : (
        <IoMdArrowForward />
      )}
    </button>
  );
}
