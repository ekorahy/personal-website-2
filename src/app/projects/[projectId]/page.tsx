import ButtonLink from "@/components/atoms/ButtonLink";
import StackList from "@/components/molecules/StackList";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
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
    <article className="my-20">
      <section className="[&>*]:mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <TitleWithDescriptionSection
              title={name}
              description="Web App"
              titleVariant="secondary"
              descriptionVariant="primary"
            />
            <h3 className="my-4 text-center text-2xl font-bold text-amber-400 lg:text-xl lg:text-zinc-950 lg:dark:text-zinc-50">
              Build with
            </h3>
            <StackList stack={technologies} />
            <div className="mx-auto my-8 w-max">
              <ButtonLink
                title="Visit website"
                variant="primary"
                route={demo_link}
              />
            </div>
          </div>
          <div className="relative mb-4 lg:flex lg:items-center">
            <Image
              className="mx-auto h-60 w-full overflow-hidden rounded-xl object-cover shadow sm:h-80 md:h-96 lg:h-64 lg:w-3/4"
              src={urlFor(currentImage).url()}
              width={500}
              height={500}
              alt={`${name} image`}
            />
            <div className="absolute right-8 top-0 -z-10 mx-auto hidden h-60 w-full rounded-xl bg-amber-400 shadow sm:h-80 md:h-96 lg:block lg:h-64 lg:w-3/4" />
          </div>
        </div>
        <div className="prose max-w-none">
          <PortableText value={body} components={bodySetting} />
        </div>
      </section>
    </article>
  );
}
