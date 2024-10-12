"use client";

import ProjectsList from "../organisms/ProjectsList";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TechnologiesFilter from "../molecules/CategoryFilter";
import EmptyDataImage from "../atoms/EmptyDataImage";
import ButtonPagination from "../atoms/ButtonPagination";
import Emphasis from "./Emphasis";
import { motion } from "framer-motion";

export default function ProjectsSection({ initialData }: ProjectSectionProps) {
  const [projects] = useState<FullProjectsProps[]>(initialData);
  const [filteredProjects, setFilteredProjects] =
    useState<FullProjectsProps[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const maxProjectsPerPage = 4;

  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("filteredBy") || "All",
  );
  const pageFromParams = parseInt(searchParams.get("page") || "1", 10);

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

  useEffect(() => {
    setCurrentPage(pageFromParams);
  }, [pageFromParams]);

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
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(filteredProjects.length / maxProjectsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * maxProjectsPerPage,
    currentPage * maxProjectsPerPage,
  );

  return (
    <div className="mt-8">
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="mb-2 text-center text-lg font-bold lg:mb-4"
      >
        Filtered by
      </motion.h3>
      <TechnologiesFilter
        category={categoryList}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {paginatedProjects.length > 0 ? (
        <>
          <ProjectsList projects={paginatedProjects} />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="mt-8 flex flex-wrap justify-center"
          >
            <ButtonPagination
              variant="left"
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
            />
            <div className="flex items-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <ButtonPagination
                  key={index + 1}
                  variant="value"
                  value={index + 1}
                  active={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                />
              ))}
            </div>
            <ButtonPagination
              variant="next"
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            />
          </motion.div>
        </>
      ) : (
        <EmptyDataImage />
      )}
      <div className="mt-16">
        <Emphasis isWithProjectsButton={false} />
      </div>
    </div>
  );
}
