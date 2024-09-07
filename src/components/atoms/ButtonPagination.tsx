import { ButtonPaginationProps } from "@/types/projects";
import React from "react";

export default function ButtonPagination({
  variant,
  value,
  disabled,
  active,
  onClick,
}: ButtonPaginationProps) {
  let buttonClass = "mx-2 px-4 py-2 border rounded ";

  switch (variant) {
    case "left":
      buttonClass += `bg-white dark:bg-black ${disabled ? "disabled:opacity-50" : ""}`;
      break;
    case "next":
      buttonClass += `bg-white dark:bg-black ${disabled ? "disabled:opacity-50" : ""}`;
      break;
    case "value":
      buttonClass += `border ${active ? "bg-amber-400 text-black dark:text-white" : "bg-white dark:bg-black text-black dark:text-white"}`;
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {variant === "value" && value
        ? value
        : variant === "left"
          ? "Back"
          : "Next"}
    </button>
  );
}
