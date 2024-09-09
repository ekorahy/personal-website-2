import { StackItemProps } from "@/types/projects";

export default function StackItem({ item }: StackItemProps) {
  return (
    <li className="w-max whitespace-nowrap rounded-full border bg-white px-6 py-2 lg:text-lg dark:bg-black">
      {item}
    </li>
  );
}
