import { FeatureItemProps } from "@/types/features";

export default function FeatureItem({ name }: FeatureItemProps) {
  return (
    <li className="w-full rounded-3xl border bg-white px-8 py-3 text-xl">
      {name}
    </li>
  );
}
