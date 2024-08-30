import { TechItemProps } from "@/types/tech";
import Image from "next/image";

export default function TechItem({ name, logo }: TechItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} width={30} height={30} alt={`${name} icon`} />
      <p className="text-xl">{name}</p>
    </div>
  );
}
