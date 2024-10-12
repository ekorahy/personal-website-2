export default function StackItem({ item }: StackItemProps) {
  return (
    <li className="w-max whitespace-nowrap rounded-full bg-zinc-100 px-6 py-2 dark:bg-zinc-900 lg:text-lg">
      {item}
    </li>
  );
}
