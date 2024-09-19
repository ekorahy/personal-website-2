import TitleSection from "@/components/atoms/TitleSection";
import ButtonArrowBack from "@/components/molecules/ButtonArrowBack";
import TagsList from "@/components/molecules/TagsList";
import BlogList from "@/components/organisms/BlogList";
import ArticleSection from "@/components/templates/ArticleSection";
import { urlFor } from "@/sanity/lib/image";
import { getAllBlogs, getBlogDetail } from "@/sanity/lib/querying";
import { bodySetting } from "@/utils/bodySetting";
import formattedDate from "@/utils/formattedDate";
import { getOtherBlog } from "@/utils/otherBlog";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { IoMdEye, IoMdTime } from "react-icons/io";
import * as motion from "framer-motion/client";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogDetail = await getBlogDetail(params.slug);

  if (!blogDetail) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blogDetail.title} - Blog`,
    description: blogDetail.description,
    keywords: blogDetail.tags.join(", "),
  };
}

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const detailBlog = await getBlogDetail(params.slug);
  const blog = await getAllBlogs();

  if (!detailBlog) {
    return <p>Blog not found!</p>;
  }

  const {
    title,
    currentImage,
    tags,
    createdAt,
    body,
    estimatedReadingTime,
    views,
  } = detailBlog;
  const otherBlog = getOtherBlog(blog, title);

  return (
    <ArticleSection>
      <section className="[&>h2]:mb-2">
        <ButtonArrowBack title="blog" route="/blog" />
        <TitleSection
          title={title}
          isWithDash={false}
          variant="secondary"
          alignment="left"
          size="2xl"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.3,
          }}
          className="my-4 w-max"
        >
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              <IoMdTime />
              <span className="bg-amber-400 px-2">
                {estimatedReadingTime} min read
              </span>
            </p>
            <p className="flex items-center gap-2 px-2">
              <IoMdEye />{" "}
              <span className="bg-amber-400 px-2">{views} views</span>
            </p>
          </div>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.6,
          }}
          className="mb-4"
        >
          Written on {formattedDate(createdAt)} by Eksa
        </motion.p>
        <div className="relative">
          <TagsList tags={tags} />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 1,
            }}
          >
            <Image
              className="my-8 h-[16rem] w-full rounded-2xl object-cover lg:h-[35rem]"
              src={urlFor(currentImage).url()}
              width={500}
              height={500}
              alt={`${title} image`}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="prose max-w-none"
        >
          <PortableText value={body} components={bodySetting} />
        </motion.div>
      </section>
      {blog.length > 1 && (
        <section className="mt-20">
          <TitleSection
            title="Other blog"
            variant="secondary"
            alignment="center"
            size="2xl"
          />
          <BlogList blog={otherBlog} />
        </section>
      )}
    </ArticleSection>
  );
}
