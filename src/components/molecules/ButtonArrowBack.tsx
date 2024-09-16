import { ButtonArrowBackProps } from "@/types/component";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function ButtonArrowBack({
  title,
  route,
}: ButtonArrowBackProps) {
  return (
    <Link
      className="mb-8 flex w-max items-center gap-2 hover:text-amber-400 hover:dark:text-amber-400 lg:text-lg"
      href={route}
    >
      <IoMdArrowBack className="text-2xl" />
      Back to {title}
    </Link>
  );
}
