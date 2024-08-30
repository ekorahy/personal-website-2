import Link from "next/link";

export default function Emphasis() {
  return (
    <section className="flex flex-col items-center justify-between gap-8 bg-amber-400 px-8 py-12 sm:flex-row">
      <h2 className="text-4xl font-bold">Interested Working with me ?</h2>
      <div className="flex w-full flex-col items-center gap-4 text-xl sm:w-max sm:flex-row">
        <Link
          className="w-full border border-zinc-50 px-8 py-4 hover:bg-zinc-200 sm:w-max"
          href="/project"
        >
          See More Projects
        </Link>
        <Link
          className="w-full bg-zinc-50 px-8 py-4 hover:bg-zinc-200 sm:w-max"
          href="mailto:ekorahy@gmail.com"
        >
          Email Me
        </Link>
      </div>
    </section>
  );
}
