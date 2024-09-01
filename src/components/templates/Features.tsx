import TitleSection from "../atoms/TitleSection";
import FeaturesList from "../molecules/FeaturesList";

export default function Features() {
  return (
    <section>
      <TitleSection
        title="Dedication to building websites with"
        isWithDash={false}
      />
      <div>
        <FeaturesList />
      </div>
    </section>
  );
}
