import FeaturesList from "../molecules/FeaturesList";

export default function Features() {
  return (
    <section>
      <h2 className="mb-4 text-center text-4xl font-bold">
        I build website with
      </h2>
      <div>
        <FeaturesList />
      </div>
    </section>
  );
}
