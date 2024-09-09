"use client";

import { BlogProps, BlogSectionProps } from "@/types/blog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogList from "../organisms/BlogList";
import SearchBar from "../molecules/SearchBar";
import TagsFilter from "../molecules/TagsFilter";
import EmptyDataImage from "../atoms/EmptyDataImage";
import ButtonPagination from "../atoms/ButtonPagination";

export default function BlogSection({ initialData }: BlogSectionProps) {
  const [blog, setBlog] = useState<BlogProps[]>(initialData);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(
    searchParams.get("keyword") || "",
  );

  const [selectedTags, setSelectedTech] = useState<string[]>(() => {
    const tags = searchParams.get("keyword")?.split(",") || [];
    return tags
      .filter((tag) => tag.startsWith("tag:"))
      .map((tag) => tag.replace("tag:", ""));
  });

  const [currentPage, setCurrentPage] = useState(1);
  const maxBlogsPerPage = 6;
  const pageFromParams = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
    const tags = searchParams.get("keyword")?.split(",") || [];
    setSelectedTech(
      tags
        .filter((tag) => tag.startsWith("tag:"))
        .map((tag) => tag.replace("tag:", "")),
    );
  }, [searchParams]);

  useEffect(() => {
    setCurrentPage(pageFromParams);
  }, [pageFromParams]);

  const updateSearchParams = (newKeyword: string, page: number = 1) => {
    const params = new URLSearchParams(window.location.search);
    if (newKeyword) {
      params.set("keyword", newKeyword);
    } else {
      params.delete("keyword");
    }
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const onKeywordChangeHandler = (newKeyword: string) => {
    setKeyword(newKeyword);
    updateSearchParams(newKeyword);
  };

  const onRemoveKeywordHandler = () => {
    setKeyword("");
    updateSearchParams("");
  };

  const onTagClickHandler = (tag: string) => {
    setKeyword(tag);
    updateSearchParams(tag);
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

  const filteredBlog = blog.filter(({ title, tags, description }) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const matchesKeyword =
      title.toLowerCase().includes(lowerCaseKeyword) ||
      description.toLowerCase().includes(lowerCaseKeyword) ||
      tags.some((tag) => tag.toLowerCase().includes(lowerCaseKeyword));

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => tags.includes(tag));

    return matchesKeyword && matchesTags;
  });

  const totalPages = Math.ceil(filteredBlog.length / maxBlogsPerPage);

  const paginatedBlog = filteredBlog.slice(
    (currentPage - 1) * maxBlogsPerPage,
    currentPage * maxBlogsPerPage,
  );

  const allTags = Array.from(new Set(blog.flatMap(({ tags }) => tags)));

  return (
    <div>
      <div className="mb-8">
        <SearchBar
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
          removeKeyword={onRemoveKeywordHandler}
        />
        <TagsFilter
          keyword={keyword}
          tags={allTags}
          onTagHandler={onTagClickHandler}
        />
      </div>
      {paginatedBlog.length > 0 ? (
        <>
          <BlogList blog={paginatedBlog} />
          <div className="mt-8 flex flex-wrap justify-center">
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
          </div>
        </>
      ) : (
        <EmptyDataImage />
      )}
    </div>
  );
}
