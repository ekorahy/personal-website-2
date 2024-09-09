import { hireMe } from "@/constant/hire-me";
import HireMeItem from "../molecules/HireMeItem";

export default function HireMeList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {hireMe.map(({ id, title, description, icon }) => (
        <HireMeItem
          key={id}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </div>
  );
}
