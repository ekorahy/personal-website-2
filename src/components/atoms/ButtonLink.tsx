import { ButtonLinkProps } from "@/types/component";
import clsx from "clsx";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ButtonLink({ title, route, variant }: ButtonLinkProps) {
  let buttonStyles = "";

  switch (variant) {
    case "primary":
      buttonStyles = "bg-amber-400 rounded-full px-4 py-2 text-xl lg:text-lg gap-2";
      break;
    case "secondary":
      buttonStyles =
        "bg-zinc-950 text-zinc-50 rounded-full px-4 py-2 text-xl lg:text-lg gap-2";
      break;
    case "tertiary":
      buttonStyles =
        "bg-zinc-100 rounded-full px-4 py-2 text-xl lg:text-lg gap-2";
      break;
    case "paragraf":
      buttonStyles = "border-b border-b-zinc-950 hover:border-b-amber-400 hover:text-amber-400 inline-flex items-center gap-1";
      break;
    default:
      buttonStyles =
        "hover:text-amber-400 rounded-full px-4 py-2 text-xl lg:text-lg gap-2";
      break;
  }

  return (
    <Link
      href={route}
      className={clsx(
        "group flex items-center overflow-hidden whitespace-nowrap",
        buttonStyles,
      )}
    >
      <span className="z-10 block">{title}</span>
      {"|"}
      <GoArrowUpRight className="group-hover:animate-bounce-up-down" />
    </Link>
  );
}
