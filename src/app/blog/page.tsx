import TitleSection from "@/components/atoms/TitleSection";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import BlogList from "@/components/organisms/BlogList";
import { getAllBlogs } from "@/sanity/lib/querying";

export default async function Blog() {
  const blog = await getAllBlogs();
  return (
    <article className="mt-20">
      <section className="[&>*]:mb-8">
        <div className="mb-4">
          <TitleWithDescriptionSection
            title="Blog"
            description="Share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, etc."
            titleVariant="secondary"
            descriptionVariant="primary"
          />
        </div>
        {blog.length > 0 ? <BlogList blog={blog} /> : <p>Blog is empty.</p>}
      </section>
    </article>
  );
}
