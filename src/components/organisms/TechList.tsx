import { tech } from "@/constant/tech";
import TechItem from "../molecules/TechItem";

export default function TechList() {
  return (
    <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
      {tech.map(({ id, name, logo }, idx) => (
        <TechItem key={id} name={name} logo={logo} index={idx} />
      ))}
    </div>
  );
}
