import ButtonLink from "@/components/atoms/ButtonLink";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="my-20">
      <Image
        className="mx-auto"
        src="/light-page-not-found.png"
        height={300}
        width={300}
        alt="Illustration image for page not found"
      />
      <div className="mt-4 w-max mx-auto">
        <ButtonLink title="Back to home" route="/" variant="primary" />
      </div>
    </div>
  );
}
