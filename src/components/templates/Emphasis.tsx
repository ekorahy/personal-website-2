import Link from "next/link";
import Button from "../atoms/Button";

export default function Emphasis() {
  return (
    <section className="flex flex-col items-center justify-between gap-8 bg-amber-400 px-8 py-12 md:flex-row">
      <h2 className="text-3xl font-bold">Interested working with me?</h2>
      <div className="flex w-full flex-col items-center gap-4 text-xl sm:w-max sm:flex-row">
        <Button
          route="/projects"
          name="See more projects"
          variant="secondary-border"
        />
        <Button
          route="mailto:ekorahy@gmail.com"
          name="Email me"
          variant="email-secondary"
        />
      </div>
    </section>
  );
}
