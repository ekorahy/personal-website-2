import TitleSection from "../atoms/TitleSection";
import TechList from "../organisms/TechList";

export default function Technologies() {
  return (
    <section>
      <TitleSection title="Technologies" isWithDash={false} />
      <TechList />
    </section>
  );
}
