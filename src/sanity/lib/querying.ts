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
    console.error("Failed to fetch projects:", error);
    return [];
  }
}
