import ToggleDarkMode from "../atoms/ToggleDarkMode";

export default function AdditionalFeatures() {
  return (
    <div className="absolute bottom-8 flex gap-4 lg:relative lg:bottom-auto">
      <ToggleDarkMode />
    </div>
  );
}
