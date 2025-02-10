import ProjectItem from "../molecules/ProjectItem";

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {projects.map(({ id, name, image, demo_link, category }, index) => (
        <ProjectItem
          key={index}
          id={id}
          name={name}
          image={image}
          demoLink={demo_link}
          category={category}
          index={index}
        />
      ))}
    </div>
  );
}
