import Features from "@/components/templates/Features";
import Hero from "@/components/templates/Hero";
import HomeAbout from "@/components/templates/HomeAbout";
import Projects from "@/components/templates/Projects";

export default function Home() {
  return (
    <article className="[&>section]:mb-28">
      <Hero />
      <Features />
      <HomeAbout />
      <Projects />
    </article>
  );
}
