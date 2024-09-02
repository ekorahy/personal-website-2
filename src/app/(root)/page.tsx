import Emphasis from "@/components/templates/Emphasis";
import Features from "@/components/templates/Features";
import Hero from "@/components/templates/Hero";
import HomeAbout from "@/components/templates/HomeAbout";
import HomeBlog from "@/components/templates/HomeBlog";
import HomeProjects from "@/components/templates/HomeProjects";
import Technologies from "@/components/templates/Technologies";

export default function Home() {
  return (
    <article className="[&>section]:mb-28">
      <Hero />
      <Features />
      <HomeAbout />
      <HomeProjects />
      <HomeBlog />
      <Technologies />
      <Emphasis />
    </article>
  );
}
