import { getAllBlogs } from "@/sanity/lib/querying";
import BlogList from "../organisms/BlogList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";
import { sliceBlog } from "@/utils/sliceProjects";
import EmptyDataImage from "../atoms/EmptyDataImage";

export default async function HomeBlog() {
  const blog = await getAllBlogs();
  const slicedBlog = sliceBlog(blog);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Blog" size="2xl" />
        {blog.length !== 0 && (
          <div className="hidden lg:block">
            <ButtonLink title="View More" route="/blog" variant="tertiary" />
          </div>
        )}
      </div>
      {blog.length === 0 ? <EmptyDataImage /> : <BlogList blog={slicedBlog} />}
      {blog.length !== 0 && (
        <div className="mt-8 flex justify-center lg:hidden">
          <ButtonLink title="View More" route="/blog" variant="tertiary" />
        </div>
      )}
    </section>
  );
}
