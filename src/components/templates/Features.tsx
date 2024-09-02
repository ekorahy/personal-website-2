import TitleSection from "../atoms/TitleSection";
import FeaturesList from "../molecules/FeaturesList";

export default function Features() {
  return (
    <section>
      <TitleSection
        title="Dedication to building websites with"
        isWithDash={false}
        size="2xl"
        alignment="center"
      />
      <div>
        <FeaturesList />
      </div>
    </section>
  );
}
