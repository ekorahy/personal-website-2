"use client";

import { BlogProps, BlogSectionProps } from "@/types/blog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogList from "../organisms/BlogList";
import SearchBar from "../molecules/SearchBar";
import TagsFilter from "../molecules/TagsFilter";

export default function BlogSection({ initialData }: BlogSectionProps) {
  const [blog, setBlog] = useState<BlogProps[]>(initialData);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(
    () => searchParams.get("keyword") || "",
  );

  const [selectedTags, setSelectedTech] = useState<string[]>(() => {
    const tags = searchParams.get("keyword")?.split(",") || [];
    return tags
      .filter((tag) => tag.startsWith("tag:"))
      .map((tag) => tag.replace("tag:", ""));
  });

  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
    const tags = searchParams.get("keyword")?.split(",") || [];
    setSelectedTech(
      tags
        .filter((tag) => tag.startsWith("tag:"))
        .map((tag) => tag.replace("tag:", "")),
    );
  }, [searchParams]);

  const updateSearchParams = (newKeyword: string) => {
    const params = new URLSearchParams(window.location.search);
    if (newKeyword) {
      params.set("keyword", newKeyword);
    } else {
      params.delete("keyword");
    }
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

  const filteredBlog = blog.filter(({ title, tags, description }) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const mathesKeyword =
      title.toLowerCase().includes(lowerCaseKeyword) ||
      description.toLowerCase().includes(lowerCaseKeyword) ||
      tags.some((tag) => tag.toLowerCase().includes(lowerCaseKeyword));

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => tags.includes(tag));

    return mathesKeyword && matchesTags;
  });

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
      {filteredBlog.length > 0 ? (
        <BlogList blog={filteredBlog} />
      ) : (
        <p>Blog is empty.</p>
      )}
    </div>
  );
}
