import ButtonLink from "@/components/atoms/ButtonLink";
import TitleSection from "@/components/atoms/TitleSection";
import StackList from "@/components/molecules/StackList";
import { urlFor } from "@/sanity/lib/image";
import { getProjectDetail } from "@/sanity/lib/querying";
import { bodySetting } from "@/utils/bodySetting";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function DetailProject({
  params,
}: {
  params: { projectId: string };
}) {
  const projectDetail = await getProjectDetail(params.projectId);
  console.log(projectDetail);

  if (!projectDetail) {
    return <p>Data not found!</p>;
  }

  const { name, technologies, currentImage, demo_link, body } = projectDetail;

  return (
    <article className="mt-20">
      <section className="[&>*]:mb-4">
        <TitleSection title={name} variant="primary" />
        <StackList stack={technologies} />
        <Image
          className="mx-auto h-[25rem] w-full overflow-hidden object-cover lg:w-3/4"
          src={urlFor(currentImage).url()}
          width={500}
          height={500}
          alt={`${name} image`}
        />
        <div className="mx-auto w-max">
          <ButtonLink
            title="Visit website"
            variant="primary"
            route={demo_link}
          />
        </div>
        <div className="prose max-w-none">
          <PortableText value={body} components={bodySetting} />
        </div>
      </section>
    </article>
  );
}
