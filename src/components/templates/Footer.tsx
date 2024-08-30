import Image from "next/image";
import ButtonSocialMediaList from "../molecules/ButtonSocialMediaList";
import NavigationFooter from "../organisms/NavigationFooter";

export default function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto max-w-7xl p-4 sm:justify-between md:flex [&>div]:border-b [&>div]:border-zinc-400 [&>div]:py-6 md:[&>div]:border-none">
        <div>
          <Image
            src="/dark-logo.png"
            width={100}
            height={100}
            alt="dark logo eksa"
          />
          <ButtonSocialMediaList />
        </div>
        <NavigationFooter />
      </div>
      <p className="mx-auto max-w-7xl p-4 text-zinc-50">
        © 2024, Made with ☕ & ❤️ by <span className="font-bold">EKSA</span>.
      </p>
    </footer>
  );
}
