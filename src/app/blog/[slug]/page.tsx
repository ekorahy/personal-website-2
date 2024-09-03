import TitleSection from "@/components/atoms/TitleSection";
import TagsList from "@/components/molecules/TagsList";
import { urlFor } from "@/sanity/lib/image";
import { getBlogDetail } from "@/sanity/lib/querying";
import { bodySetting } from "@/utils/bodySetting";
import formattedDate from "@/utils/formattedDate";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function DetailBlog({
  params,
}: {
  params: { slug: string };
}) {
  const detailBlog = await getBlogDetail(params.slug);

  if (!detailBlog) {
    return <p>Blog not found!</p>;
  }

  const { title, currentImage, description, tags, createdAt, body } =
    detailBlog;
  return (
    <article className="my-20">
      <section className="[&>h2]:mb-2">
        <TitleSection
          title={title}
          isWithDash={false}
          variant="primary"
          alignment="center"
        />
        <p className="mb-4 text-center text-amber-400">
          Written on {formattedDate(createdAt)} by Eksa
        </p>
        <TagsList tags={tags} />
        <Image
          className="mx-auto my-8 h-[20rem] lg:h-[25rem] w-full overflow-hidden object-cover lg:w-3/4"
          src={urlFor(currentImage).url()}
          width={500}
          height={500}
          alt={`${title} image`}
        />
        <div className="prose max-w-none">
          <PortableText value={body} components={bodySetting} />
        </div>
      </section>
    </article>
  );
}
