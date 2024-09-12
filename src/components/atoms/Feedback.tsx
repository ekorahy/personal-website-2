import { FeedbackProps } from "@/types/about";
import Image from "next/image";

export default function Feedback({ image, index }: FeedbackProps) {
  return (
    <Image
      className="flex h-full w-80 items-center"
      src={image}
      width={400}
      height={400}
      alt={`Feedback image ${index + 1}`}
    />
  );
}
