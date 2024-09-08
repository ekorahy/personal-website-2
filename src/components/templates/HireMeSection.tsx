import TitleSection from "../atoms/TitleSection";
import HireMeList from "../organisms/HireMeList";

export default function HireMeSection() {
  return (
    <section>
      <TitleSection
        title="Why hire me?"
        isWithDash={false}
        variant="secondary"
        size="2xl"
        alignment="center"
      />
      <HireMeList />
    </section>
  );
}
