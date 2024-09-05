import { FeatureItemProps } from "@/types/features";

export default function FeatureItem({ name, emoji }: FeatureItemProps) {
  return (
    <li className="w-full rounded-3xl border bg-white px-8 py-3 text-xl dark:bg-black lg:text-lg">
      {emoji} {name}
    </li>
  );
}
