import { footerNavigation } from "@/constant/footer-navigation";
import NavigationFooterList from "../molecules/NavigationFooterList";

export default function NavigationFooter() {
  const [{ navigation, features, others }] = footerNavigation;
  return (
    <div className="flex flex-col gap-8 md:flex-row lg:gap-16">
      <section>
        <h2 className="mb-4 font-bold text-amber-400">Navigation</h2>
        <NavigationFooterList items={navigation} />
      </section>
      <section>
        <h2 className="mb-4 font-bold text-amber-400">Features</h2>
        <NavigationFooterList items={features} />
      </section>
      <section>
        <h2 className="mb-4 font-bold text-amber-400">Others</h2>
        <NavigationFooterList items={others} />
      </section>
    </div>
  );
}
