import { BlogListProps } from "@/types/blog";
import { sliceBlog } from "@/utils/sliceProjects";
import BlogItem from "../molecules/BlogItem";

export default function BlogList({ blog }: BlogListProps) {
  const slicedBlog = sliceBlog(blog);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {slicedBlog.map(
        ({
          currentSlug,
          title,
          currentImage,
          tags,
          description,
          createdAt,
        }) => (
          <BlogItem
            key={currentSlug}
            slug={currentSlug}
            title={title}
            image={currentImage}
            tags={tags}
            description={description}
            createdAt={createdAt}
          />
        ),
      )}
    </div>
  );
}
