import BlogItem from "../molecules/BlogItem";

export default function BlogList({ blog }: BlogListProps) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blog.map(
        (
          {
            _id,
            slug,
            title,
            image,
            description,
            created_at,
            estimatedReadingTime,
            views,
          },
          index,
        ) => (
          <BlogItem
            _id={_id}
            slug={slug}
            key={index}
            title={title}
            image={image}
            description={description}
            created_at={created_at}
            estimatedReadingTime={estimatedReadingTime}
            views={views}
            index={index}
          />
        ),
      )}
    </ul>
  );
}
