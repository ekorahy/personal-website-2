import { NavigationFooterItemProps } from "@/types/footer";
import Link from "next/link";

export default function NavigationFooterItem({
  name,
  route,
}: NavigationFooterItemProps) {
  return (
    <Link
      className="text-xl text-zinc-50 hover:text-amber-400 lg:text-lg"
      href={route}
    >
      {name}
    </Link>
  );
}
