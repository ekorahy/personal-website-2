import Logo from "../atoms/Logo";
import AdditionalFeatures from "../molecules/AdditionalFeatures";
import NavList from "../molecules/NavList";

export default function NavWeb() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-between">
      <div className="flex gap-4 items-center">
        <Logo width={60} height={60} />
        <NavList />
      </div>
      <AdditionalFeatures />
    </div>
  );
}