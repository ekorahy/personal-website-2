import Image from "next/image";

export default function EmptyDataImage() {
  return (
    <Image
      className="mx-auto mt-16"
      src="/light-empty-data.png"
      width={300}
      height={300}
      alt="Illustration image for empty data"
    />
  );
}
