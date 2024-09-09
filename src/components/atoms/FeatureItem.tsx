import { FeatureItemProps } from "@/types/features";

export default function FeatureItem({ name, emoji }: FeatureItemProps) {
  return (
    <li className="w-full rounded-full border bg-white px-8 py-3 text-base lg:text-lg dark:bg-black">
      {emoji} {name}
    </li>
  );
}
