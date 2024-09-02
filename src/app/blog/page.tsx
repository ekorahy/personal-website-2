import TitleSection from "@/components/atoms/TitleSection";
import BlogList from "@/components/organisms/BlogList";
import { getAllBlogs } from "@/sanity/lib/querying";

export default async function Blog() {
  const blog = await getAllBlogs();
  return (
    <article className="mt-20">
      <section className="[&>*]:mb-8">
        <TitleSection title="Blog" isWithDash={true} />
        {blog.length > 0 ? <BlogList blog={blog} /> : <p>Blog is empty.</p>}
      </section>
    </article>
  );
}
