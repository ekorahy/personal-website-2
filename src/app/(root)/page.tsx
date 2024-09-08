import Emphasis from "@/components/templates/Emphasis";
import Features from "@/components/templates/Features";
import Hero from "@/components/templates/Hero";
import HireMeSection from "@/components/templates/HireMeSection";
import HomeAbout from "@/components/templates/HomeAbout";
import HomeBlog from "@/components/templates/HomeBlog";
import HomeProjects from "@/components/templates/HomeProjects";
import Technologies from "@/components/templates/Technologies";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Welcome to EKSA, a personal website dedicated to showcasing my professional journey, creative portfolio, and blog. Discover my portfolio of projects, ranging from web development and software engineering to open-source contributions and innovative digital designs. Dive into my blog, where I share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, and more. Whether you're a fellow developer, a tech enthusiast, or someone looking to collaborate, this space offers a glimpse into my expertise and passion for creating impactful digital solutions.",
  keywords: [
    "EKSA",
    "personal website",
    "portfolio",
    "projects",
    "web development",
    "software engineering",
    "blog",
    "personal stories",
    "tech reviews",
    "tutorials",
    "developer",
    "programming",
    "technology",
    "coding tips",
    "open-source",
    "digital design",
    "tech trends",
  ],
};

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
      <HireMeSection />
    </article>
  );
}
