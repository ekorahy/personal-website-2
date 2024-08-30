import { groq } from "next-sanity";
import { client } from "./client";

export async function getProjects() {
  try {
    const query = groq`
    *[_type == "projects"]{
      "currentId": id.current,
      name,
      "currentImage": image.asset._ref,
      demo_link
    }
  `;

    const projects = await client.fetch(query);
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

    const blog = client.fetch(query)
    return blog;
  } catch (error) {
    throw error;
  }
}
