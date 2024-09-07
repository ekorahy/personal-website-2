import { BlogProps } from "@/types/blog";

export function getOtherBlog(blog: BlogProps[], title: string) {
  const filteredBlogs = blog.filter(blog => blog.title !== title);
  const shuffledBlogs = filteredBlogs.sort(() => Math.random() - 0.5);
  return shuffledBlogs.slice(0, 3);
}
