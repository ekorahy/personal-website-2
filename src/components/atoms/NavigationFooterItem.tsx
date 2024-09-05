import { NavigationFooterItemProps } from "@/types/footer";
import Link from "next/link";

export default function NavigationFooterItem({
  name,
  route,
}: NavigationFooterItemProps) {
  return (
    <Link
      className="text-zinc-50 hover:text-amber-400 dark:text-zinc-950 hover:dark:text-amber-400"
      href={route}
    >
      {name}
    </Link>
  );
}
