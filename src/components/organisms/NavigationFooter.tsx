import { footerNavigation } from "@/constant/footer-navigation";
import NavigationFooterList from "../molecules/NavigationFooterList";
import * as motion from "framer-motion/client";

export default function NavigationFooter() {
  const [{ navigation, features, others }] = footerNavigation;
  return (
    <div className="flex flex-col gap-8 md:flex-row lg:gap-16">
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 1.2,
        }}
      >
        <h2 className="mb-4 font-bold text-amber-400">Navigation</h2>
        <NavigationFooterList items={navigation} />
      </motion.section>
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 1.4,
        }}
      >
        <h2 className="mb-4 font-bold text-amber-400">Features</h2>
        <NavigationFooterList items={features} />
      </motion.section>
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 1.6,
        }}
      >
        <h2 className="mb-4 font-bold text-amber-400">Others</h2>
        <NavigationFooterList items={others} />
      </motion.section>
    </div>
  );
}
