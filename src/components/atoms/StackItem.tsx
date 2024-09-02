import { StackItemProps } from "@/types/projects";

export default function StackItem({ item }: StackItemProps) {
  return (
    <p className="w-max whitespace-nowrap rounded-full border bg-white px-6 py-2 text-xl lg:text-lg">
      {item}
    </p>
  );
}
