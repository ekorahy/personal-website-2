import { ButtonLinkProps } from "@/types/component";
import clsx from "clsx";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ButtonLink({ title, route, variant }: ButtonLinkProps) {
  let buttonStyles = "";

  switch (variant) {
    case "primary":
      buttonStyles = "bg-amber-400 rounded-full px-4 py-2 gap-2";
      break;
    case "secondary":
      buttonStyles =
        "bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 rounded-full px-4 py-2 gap-2";
      break;
    case "tertiary":
      buttonStyles =
        "bg-zinc-100 dark:bg-zinc-900 rounded-full px-4 py-2 gap-2";
      break;
    case "paragraf":
      buttonStyles =
        "border-b no-underline dark:text-zinc-50 text-zinc-950 border-b-zinc-950 dark:border-b-zinc-50 hover:border-b-amber-400 hover:text-amber-400 hover:dark:border-b-amber-400 hover:dark:text-amber-400 inline-flex items-center gap-1";
      break;
    default:
      buttonStyles =
        "hover:text-amber-400 rounded-full px-4 py-2 gap-2";
      break;
  }

  return (
    <Link
      href={route}
      className={clsx(
        "group flex items-center overflow-hidden whitespace-nowrap text-base lg:text-lg",
        buttonStyles,
      )}
    >
      <span className="z-10 block">{title}</span>
      {"|"}
      <GoArrowUpRight className="group-hover:animate-bounce-up-down" />
    </Link>
  );
}
