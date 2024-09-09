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
  let buttonClass = "mx-2 px-4 py-2 text-base border border-zinc-100";

  switch (variant) {
    case "left":
      buttonClass += `bg-white dark:bg-black ${disabled ? "disabled:opacity-50" : "hover:bg-amber-300 "}`;
      break;
    case "next":
      buttonClass += `bg-white dark:bg-black ${disabled ? "disabled:opacity-50" : "hover:bg-amber-300 "}`;
      break;
    case "value":
      buttonClass += `border ${active ? "bg-amber-400 text-black dark:text-white" : "bg-white hover:bg-amber-300 dark:bg-black text-black dark:text-white"}`;
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
