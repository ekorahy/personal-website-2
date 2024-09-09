import Button from "../atoms/Button";
import { EmphasisProps } from "@/types/component";

export default function Emphasis({
  isWithProjectsButton = true,
}: EmphasisProps) {
  return (
    <section className="flex flex-col items-center justify-between gap-8 bg-amber-400 px-8 py-12 md:flex-row">
      <h2 className="text-2xl font-bold lg:text-3xl">
        Interested working with me?
      </h2>
      <div className="flex w-full flex-col items-center gap-4 sm:w-max sm:flex-row">
        {isWithProjectsButton && (
          <Button
            route="/projects"
            name="See more projects"
            variant="secondary-border"
          />
        )}
        <Button
          route="mailto:ekorahy@gmail.com"
          name="Email me"
          variant="email-secondary"
        />
      </div>
    </section>
  );
}
