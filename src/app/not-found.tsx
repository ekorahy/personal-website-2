import ButtonLink from "@/components/atoms/ButtonLink";
import PageNotFoundImage from "@/components/atoms/PageNotFoundImage";

export default function NotFound() {
  return (
    <div className="my-20">
      <PageNotFoundImage />
      <div className="mx-auto mt-4 w-max">
        <ButtonLink title="Back to home" route="/" variant="primary" />
      </div>
    </div>
  );
}
