import ButtonLink from "@/components/atoms/ButtonLink";
import TitleSection from "@/components/atoms/TitleSection";
import ButtonArrowBack from "@/components/molecules/ButtonArrowBack";
import StackList from "@/components/molecules/StackList";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ProjectsList from "@/components/organisms/ProjectsList";
import ArticleSection from "@/components/templates/ArticleSection";
import { urlFor } from "@/sanity/lib/image";
import { getProjectDetail, getProjects } from "@/sanity/lib/querying";
import { bodySetting } from "@/utils/bodySetting";
import { getOtherProjects } from "@/utils/otherProjects";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const projectDetail = await getProjectDetail(params.projectId);

  if (!projectDetail) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${projectDetail.name} - Project`,
    description: projectDetail.description,
    keywords: projectDetail.technologies.join(", "),
  };
}

export default async function DetailProject({
  params,
}: {
  params: { projectId: string };
}) {
  const projectDetail = await getProjectDetail(params.projectId);
  const projects = await getProjects();

  if (!projectDetail) {
    return <p>Data not found!</p>;
  }

  const { name, category, technologies, currentImage, demo_link, body } =
    projectDetail;
  const otherProjects = getOtherProjects(projects, name);

  return (
    <ArticleSection>
      <section className="[&>*]:mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <ButtonArrowBack title="projects" route="/projects" />
            <TitleWithDescriptionSection
              title={name}
              description={category}
              titleVariant="secondary"
              descriptionVariant="primary"
            />
            <h3 className="my-4 text-center text-lg font-bold text-amber-400 lg:text-xl lg:text-zinc-950 lg:dark:text-zinc-50">
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

        <section className="mt-20">
          <TitleSection title="Other projects" variant="secondary" size="2xl" />
          <div className="mt-4">
            <ProjectsList projects={otherProjects} />
          </div>
        </section>
      </section>
    </ArticleSection>
  );
}
