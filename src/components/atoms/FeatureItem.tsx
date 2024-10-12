export default function FeatureItem({ name, emoji }: FeatureItemProps) {
  return (
    <li className="w-full rounded-full bg-zinc-100 px-8 py-3 text-base dark:bg-zinc-900 lg:text-lg">
      {emoji} {name}
    </li>
  );
}
