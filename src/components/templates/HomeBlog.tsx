import { getAllBlogs } from "@/sanity/lib/querying";
import BlogList from "../organisms/BlogList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";
import { sliceBlog } from "@/utils/sliceProjects";
import EmptyDataImage from "../atoms/EmptyDataImage";
import * as motion from "framer-motion/client";

export default async function HomeBlog() {
  const blog = await getAllBlogs();
  const slicedBlog = sliceBlog(blog);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Blog" size="2xl" />
        {blog.length !== 0 && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="hidden lg:block"
          >
            <ButtonLink title="View More" route="/blog" variant="tertiary" />
          </motion.div>
        )}
      </div>
      {blog.length === 0 ? <EmptyDataImage /> : <BlogList blog={slicedBlog} />}
      {blog.length !== 0 && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="mt-8 flex justify-center lg:hidden"
        >
          <ButtonLink title="View More" route="/blog" variant="tertiary" />
        </motion.div>
      )}
    </section>
  );
}
