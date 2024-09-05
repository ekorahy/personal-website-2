import { ButtonDrawerProps } from "@/types/header";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function ButtonDrawer({ handleMenuOpen }: ButtonDrawerProps) {
  return (
    <button
      className="rounded-full bg-zinc-100 px-3 hover:bg-zinc-300 dark:bg-zinc-900 hover:dark:bg-zinc-700"
      onClick={handleMenuOpen}
    >
      <HiOutlineMenuAlt4 className="text-2xl" />
    </button>
  );
}
