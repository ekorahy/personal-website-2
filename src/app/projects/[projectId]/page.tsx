import ButtonLink from "@/components/atoms/ButtonLink";
import TitleSection from "@/components/atoms/TitleSection";
import ButtonArrowBack from "@/components/molecules/ButtonArrowBack";
import StackList from "@/components/molecules/StackList";
import TitleWithDescriptionSection from "@/components/molecules/TitleWithDescriptionSection";
import ProjectsList from "@/components/organisms/ProjectsList";
import ArticleSection from "@/components/templates/ArticleSection";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_DETAIL_QUERY, PROJECTS_QUERY } from "@/sanity/lib/querying";
import { bodySetting } from "@/utils/bodySetting";
import { getOtherProjects } from "@/utils/otherProjects";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import * as motion from "framer-motion/client";
import formattedDate from "@/utils/formattedDate";
import { sanityFetch } from "@/sanity/lib/live";

export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const { data: projectDetail } = await sanityFetch({
    query: PROJECT_DETAIL_QUERY,
    params: { id: params.projectId },
  });

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
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const { data: projectDetail } = await sanityFetch({
    query: PROJECT_DETAIL_QUERY,
    params: { id: projectId },
  });

  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY,
  });

  if (!projectDetail) {
    return <p>Data not found!</p>;
  }

  const { name, category, technologies, image, demo_link, body, created_at } =
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
              description={`${category} | ${formattedDate(created_at)}`}
              titleVariant="secondary"
              descriptionVariant="primary"
            />
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="my-8 mb-4 text-center text-lg font-bold lg:text-xl lg:dark:text-zinc-50"
            >
              Built using
            </motion.h3>
            <StackList stack={technologies} />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="mx-auto my-8 w-max"
            >
              <ButtonLink
                title={category === "Android App" ? "Visit" : "Visit website"}
                variant="primary"
                route={demo_link}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="relative mb-4"
          >
            <Image
              className="mx-auto h-60 w-full overflow-hidden rounded-xl object-cover shadow sm:h-80 md:h-96 lg:mt-10 lg:h-64 lg:w-3/4"
              src={urlFor(image).url()}
              width={500}
              height={500}
              alt={`${name} image`}
            />
            <div className="absolute right-8 top-0 -z-10 mx-auto hidden h-60 w-full rounded-xl bg-amber-400 shadow sm:h-80 md:h-96 lg:block lg:h-64 lg:w-3/4" />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="prose max-w-none"
        >
          <PortableText value={body} components={bodySetting} />
        </motion.div>

        {projects.length > 1 && (
          <section className="mt-20">
            <TitleSection
              title="Other projects"
              variant="secondary"
              size="2xl"
            />
            <div className="mt-4">
              <ProjectsList projects={otherProjects} />
            </div>
          </section>
        )}
      </section>
    </ArticleSection>
  );
}
