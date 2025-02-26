import ButtonSocialMediaList from "../molecules/ButtonSocialMediaList";
import NavigationFooter from "../organisms/NavigationFooter";
import Logo from "../atoms/Logo";
import * as motion from "framer-motion/client";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 dark:bg-white">
      <div className="mx-auto max-w-7xl p-4 sm:justify-between md:flex lg:px-8 [&>div]:border-b [&>div]:border-zinc-400 [&>div]:py-6 [&>div]:dark:border-zinc-600 md:[&>div]:border-none">
        <div className="w-full md:flex md:w-max md:flex-col md:items-center">
          <Logo width={120} height={120} isWithText={false} isDark={true} />
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="mt-4 text-sm text-zinc-50 dark:text-zinc-950"
          >
            Let&apos;s Connect and Grow Together!
          </motion.p>
          <ButtonSocialMediaList />
        </div>
        <NavigationFooter />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="mx-auto max-w-7xl px-4 py-6 text-zinc-50 dark:text-zinc-950 lg:px-8"
      >
        © 2025, Made with ☕ & ❤️ by <span className="font-bold">Ekorahy</span>
        .
      </motion.p>
    </footer>
  );
}
