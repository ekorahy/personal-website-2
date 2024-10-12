import { nav } from "@/constant/nav";
import NavItem from "../atoms/NavItem";
import * as motion from "framer-motion/client";

export default function NavList() {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="flex w-full flex-col gap-4 px-4 lg:w-max lg:flex-row"
    >
      {nav.map(({ id, title, route }) => (
        <NavItem key={id} title={title} route={route} />
      ))}
    </motion.nav>
  );
}
