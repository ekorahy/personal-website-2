import { StackListProps } from "@/types/projects";
import StackItem from "../atoms/StackItem";

export default function StackList({ stack }: StackListProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2">
      {stack.map((item, idx) => (
        <StackItem key={idx} item={item} />
      ))}
    </ul>
  );
}
