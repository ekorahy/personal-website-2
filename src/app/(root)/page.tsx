import Features from "@/components/templates/Features";
import Hero from "@/components/templates/Hero";
import HomeAbout from "@/components/templates/HomeAbout";

export default function Home() {
  return (
    <article className="[&>section]:mb-28">
      <Hero />
      <Features />
      <HomeAbout />
    </article>
  );
}
