import { ButtonArrowBackProps } from "@/types/component";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function ButtonArrowBack({
  title,
  route,
}: ButtonArrowBackProps) {
  return (
    <Link
      className="mb-8 flex w-max items-center gap-2 lg:text-lg hover:text-amber-400 hover:dark:text-amber-400"
      href={route}
    >
      <IoMdArrowBack />
      Back to {title}
    </Link>
  );
}
