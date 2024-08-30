import { getAllBlogs } from "@/sanity/lib/querying";
import Link from "next/link";
import BlogList from "../organisms/BlogList";

export const revalidate = 60;
export default async function HomeBlog() {
  const blog = await getAllBlogs();
  console.log(blog);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex w-full items-center gap-2">
          <h2 className="text-4xl font-bold lg:text-5xl">Blog</h2>
          <div className="h-[0.1rem] w-2/4 bg-black" />
        </div>
        <Link
          className="hidden whitespace-nowrap px-4 py-2 text-xl sm:block"
          href="/blog"
        >
          View More
        </Link>
      </div>
      {blog.length === 0 ? <p>Blog is Empty.</p> : <BlogList blog={blog} />}
      <div className="mt-8 flex justify-center sm:hidden">
        <Link className="px-4 py-2 text-xl" href="/blog">
          View More
        </Link>
      </div>
    </section>
  );
}
