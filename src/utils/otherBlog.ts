import { BlogProps } from "@/types/blog";

export function getOtherBlog(blog: BlogProps[], title: string) {
  return blog
    .filter(blog => blog.title !== title)
    .slice(0, 6);
}