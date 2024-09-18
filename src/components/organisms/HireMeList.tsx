import { hireMe } from "@/constant/hire-me";
import HireMeItem from "../molecules/HireMeItem";

export default function HireMeList() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {hireMe.map(({ id, title, description, icon }, idx) => (
        <HireMeItem
          key={id}
          title={title}
          description={description}
          icon={icon}
          index={idx}
        />
      ))}
    </div>
  );
}
