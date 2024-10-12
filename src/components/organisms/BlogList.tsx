import BlogItem from "../molecules/BlogItem";

export default function BlogList({ blog }: BlogListProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blog.map(
        (
          {
            _id,
            currentSlug,
            title,
            currentImage,
            description,
            createdAt,
            estimatedReadingTime,
            views,
          },
          idx,
        ) => (
          <BlogItem
            id={_id}
            key={currentSlug}
            slug={currentSlug}
            title={title}
            image={currentImage}
            description={description}
            createdAt={createdAt}
            estimatedReadingTime={estimatedReadingTime}
            views={views}
            index={idx}
          />
        ),
      )}
    </ul>
  );
}
