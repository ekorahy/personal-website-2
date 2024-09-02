import { StackListProps } from "@/types/projects";
import StackItem from "../atoms/StackItem";

export default function StackList({stack}: StackListProps) {
  return (
    <div className="flex items-center gap-4 overflow-x-auto">
      {
        stack.map((item, idx) => (
          <StackItem key={idx} item={item} />
        ))
      }
    </div>
  );
}