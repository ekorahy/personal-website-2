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
          alignment="center"
          size="2xl"
        />
        <div className="mx-auto my-4 w-max">
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
        </div>
        <p className="mb-4 text-center">
          Written on {formattedDate(createdAt)} by Eksa
        </p>
        <TagsList tags={tags} />
        <Image
          className="mx-auto my-8 h-[20rem] w-full overflow-hidden object-cover lg:h-[25rem] lg:w-3/4"
          src={urlFor(currentImage).url()}
          width={500}
          height={500}
          alt={`${title} image`}
        />
        <div className="prose max-w-none">
          <PortableText value={body} components={bodySetting} />
        </div>
      </section>
      <section className="mt-20">
        <TitleSection
          title="Other blog"
          variant="secondary"
          alignment="center"
          size="2xl"
        />
        <BlogList blog={otherBlog} />
      </section>
    </ArticleSection>
  );
}
