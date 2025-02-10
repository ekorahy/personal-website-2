import { PROJECTS_WITH_LIMIT_QUERY } from "@/sanity/lib/querying";
import ProjectsList from "../organisms/ProjectsList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";
import EmptyDataImage from "../atoms/EmptyDataImage";
import * as motion from "framer-motion/client";
import { sanityFetch } from "@/sanity/lib/live";

export default async function HomeProjects() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_WITH_LIMIT_QUERY,
    params: { limit: 2 },
  });

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Projects" size="2xl" />
        {projects.length !== 0 && (
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
            <ButtonLink
              title="View More"
              route="/projects"
              variant="tertiary"
            />
          </motion.div>
        )}
      </div>
      {projects.length === 0 ? (
        <EmptyDataImage />
      ) : (
        <ProjectsList projects={projects} />
      )}
      {projects.length !== 0 && (
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
          <ButtonLink title="View More" route="/projects" variant="tertiary" />
        </motion.div>
      )}
    </section>
  );
}
