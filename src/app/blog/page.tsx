import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ArticleSection from "@/components/templates/ArticleSection";
import BlogSection from "@/components/templates/BlogSection";
import { getAllBlogs } from "@/sanity/lib/querying";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, etc.",
  keywords: [
    "blog",
    "personal stories",
    "thoughts",
    "tips and tricks",
    "tech reviews",
    "tutorials",
    "web development",
    "programming",
    "JavaScript",
    "React",
    "front-end development",
    "software engineering",
    "Eksa",
    "Eko Rahayu Widodo",
    "technology",
  ],
};

export default async function Blog() {
  const blog = await getAllBlogs();

  return (
    <ArticleSection>
      <section className="[&>*]:mb-8">
        <div className="mb-4">
          <TitleWithDescriptionSection
            title="Blog"
            description="Share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, etc."
            titleVariant="secondary"
            descriptionVariant="secondary"
          />
        </div>
        <BlogSection initialData={blog} />
      </section>
    </ArticleSection>
  );
}
