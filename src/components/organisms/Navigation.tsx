import NavMobile from "./NavMobile";
import NavWeb from "./NavWeb";

export default function Navigation() {
  return (
    <div className="mx-auto max-w-7xl">
      <NavMobile />
      <NavWeb />
    </div>
  );
}
