import { defineQuery } from "next-sanity";
import { writeClient } from "./client";

export const PROJECTS_WITH_LIMIT_QUERY = defineQuery(
  `*[_type == "projects"] | order(created_at desc)[0...$limit]`
)

export const BLOG_WITH_LIMIT_QUERY = defineQuery(
  `*[_type == "blog"] | order(created_at desc)[0...$limit] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
  }`
)

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "projects"] | order(created_at desc)`
)

export const BLOGS_QUERY = defineQuery(
  `*[_type == "blog"] | order(created_at desc) {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)  
  }`
)

export const PROJECT_DETAIL_QUERY = defineQuery(
  `*[_type == "projects" && id.current == $id][0]`
)

export const BLOG_DETAIL_QUERY = defineQuery(
  `*[_type == "blog" && slug.current == $slug][0] {
    ...,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
  }`
)

export async function incrementViews(blogId: string) {
  try {
    await writeClient.patch(blogId).inc({ views: 1 }).commit();
  } catch (error) {
    throw error;
  }
}

