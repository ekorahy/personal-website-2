"use client";

import {
  FullProjectsProps,
  ProjectSectionProps,
} from "@/types/projects";
import ProjectsList from "../organisms/ProjectsList";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TechnologiesFilter from "../molecules/TechnologiesFilter";
import EmptyDataImage from "../atoms/EmptyDataImage";

export default function ProjectsSection({ initialData }: ProjectSectionProps) {
  const [projects] = useState<FullProjectsProps[]>(initialData);
  const [filteredProjects, setFilteredProjects] =
    useState<FullProjectsProps[]>(initialData);

  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedTech, setSelectedTech] = useState<string>(
    searchParams.get("filteredBy") || "All",
  );

  useEffect(() => {
    const tech = searchParams.get("filteredBy") || "All";
    setSelectedTech(tech);

    if (tech === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.technologies.includes(tech)),
      );
    }
  }, [searchParams, projects]);

  const technologies = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.technologies))),
  ];

  const handleTechChange = (tech: string) => {
    const params = new URLSearchParams(window.location.search);
    if (tech !== "All") {
      params.set("filteredBy", tech);
    } else {
      params.delete("filteredBy");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h3 className="mb-2 text-center text-xl font-bold lg:text-lg">
        Filtered by
      </h3>
      <TechnologiesFilter
        technologies={technologies}
        selectedTech={selectedTech}
        onTechChange={handleTechChange}
      />
      {filteredProjects.length > 0 ? (
        <ProjectsList projects={filteredProjects} />
      ) : (
        <EmptyDataImage />
      )}
    </div>
  );
}
