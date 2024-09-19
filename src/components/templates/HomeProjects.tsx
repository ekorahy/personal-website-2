import { getProjects } from "@/sanity/lib/querying";
import ProjectsList from "../organisms/ProjectsList";
import TitleSection from "../atoms/TitleSection";
import ButtonLink from "../atoms/ButtonLink";
import { sliceProjects } from "@/utils/sliceProjects";
import EmptyDataImage from "../atoms/EmptyDataImage";
import * as motion from "framer-motion/client";

export default async function HomeProjects() {
  const projects = await getProjects();
  const slicedProjects = sliceProjects(projects);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <TitleSection title="Latest Projects" size="2xl" />
        {projects.length !== 0 && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: 0.6,
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
        <ProjectsList projects={slicedProjects} />
      )}
      {projects.length !== 0 && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.6,
          }}
          className="mt-8 flex justify-center lg:hidden"
        >
          <ButtonLink title="View More" route="/projects" variant="tertiary" />
        </motion.div>
      )}
    </section>
  );
}
