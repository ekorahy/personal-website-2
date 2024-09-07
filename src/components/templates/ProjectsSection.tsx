"use client";

import { FullProjectsProps, ProjectSectionProps } from "@/types/projects";
import ProjectsList from "../organisms/ProjectsList";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TechnologiesFilter from "../molecules/CategoryFilter";
import EmptyDataImage from "../atoms/EmptyDataImage";

export default function ProjectsSection({ initialData }: ProjectSectionProps) {
  const [projects] = useState<FullProjectsProps[]>(initialData);
  const [filteredProjects, setFilteredProjects] =
    useState<FullProjectsProps[]>(initialData);

  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("filteredBy") || "All",
  );

  useEffect(() => {
    const category = searchParams.get("filteredBy") || "All";
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category.includes(category)),
      );
    }
  }, [searchParams, projects]);

  const categoryList = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.category))),
  ];

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(window.location.search);
    if (category !== "All") {
      params.set("filteredBy", category);
    } else {
      params.delete("filteredBy");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h3 className="mb-4 text-center text-xl font-bold lg:text-lg">
        Filtered by
      </h3>
      <TechnologiesFilter
        category={categoryList}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {filteredProjects.length > 0 ? (
        <ProjectsList projects={filteredProjects} />
      ) : (
        <EmptyDataImage />
      )}
    </div>
  );
}
