import ButtonLink from "@/components/atoms/ButtonLink";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const bodySetting = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || "Project Image"}
        width={800}
        height={600}
        className="mx-auto my-4 rounded-xl"
      />
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <ButtonLink title={children} route={value.href} variant="paragraf" />
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-zinc-950 dark:text-zinc-50">
        {children}
      </strong>
    ),
    italic: ({ children }: any) => (
      <em className="italic text-zinc-950 dark:text-zinc-50">{children}</em>
    ),
    underline: ({ children }: any) => (
      <span className="text-zinc-950 underline dark:text-zinc-50">
        {children}
      </span>
    ),
    code: ({ children }: any) => (
      <code className="rounded bg-zinc-200 px-1 py-0.5 font-mono text-sm text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50">
        {children}
      </code>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="mt-4 text-3xl font-bold text-zinc-950 dark:text-zinc-50">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mt-4 text-2xl font-bold text-zinc-950 dark:text-zinc-50">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-4 text-lg lg:text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="mt-4 text-base font-medium text-zinc-950 dark:text-zinc-50">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="mt-4 text-sm font-medium text-zinc-950 dark:text-zinc-50">
        {children}
      </h6>
    ),
    normal: ({ children }: any) => (
      <p className="mt-2 lg:text-lg text-zinc-950 dark:text-zinc-50">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-4 list-inside list-disc text-zinc-950 dark:text-zinc-50">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-4 list-inside list-decimal text-zinc-950 dark:text-zinc-50">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-1 text-lg text-zinc-950 dark:text-zinc-50">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="mb-1 text-lg text-zinc-950 dark:text-zinc-50">
        {children}
      </li>
    ),
  },
};
