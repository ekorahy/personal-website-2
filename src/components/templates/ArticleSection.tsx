export default function ArticleSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="my-20">{children}</article>;
}
