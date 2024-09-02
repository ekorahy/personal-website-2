import { groq } from "next-sanity";
import { client } from "./client";

export async function getProjects() {
  try {
    const query = groq`
    *[_type == "projects"]{
      "currentId": id.current,
      name,
      "currentImage": image.asset._ref,
      demo_link,
    }
  `;

    const projects = await client.fetch(query, {}, { cache: 'no-store' })
    return projects;
  } catch (error) {
    throw error;
  }
}

export async function getAllBlogs() {
  try {
    const query = groq`
    *[_type == "blog"]{
      "currentSlug": slug.current,
      title,
      "currentImage": image.asset._ref,
      description,
      tags,
      "createdAt": created_at,
    }
    `;

    const blog = await client.fetch(query, {}, { cache: 'no-store' })
    return blog
  } catch (error) {
    throw error;
  }
}

export async function getProjectDetail(projectId: string) {
  try {
    const query = groq`
    *[_type == "projects" && id.current == $projectId]{
      "currentId": id.current,
      name,
      technologies,
      "currentImage": image.asset._ref,
      demo_link,
      body,
    }[0]
  `;

    const projectDetail = await client.fetch(query, { projectId }, { cache: 'no-store' })
    return projectDetail;
  } catch (error) {
    throw error;
  }
}

export async function getBlogDetail(slug: string) {
  try {
    const query = groq`
      *[_type == "blog" && slug.current == $slug]{
        "currentSlug": slug.current,
        title,
        "currentImage": image.asset._ref,
        description,
        tags,
        "createdAt": created_at,
        body,
      }[0]
    `;

    const blogDetail = await client.fetch(query, { slug }, { cache: 'no-store' })
    return blogDetail;
  } catch (error) {
    throw error;
  }
}