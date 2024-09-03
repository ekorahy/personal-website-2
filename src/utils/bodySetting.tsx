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
      <a href={value.href} className="text-amber-400 hover:underline">
        {children}
      </a>
    ),
  },
  block: {
    // Define rendering for all heading levels
    h1: ({ children }: any) => (
      <h1 className="mt-4 text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mt-4 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-4 text-xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-4 text-lg font-semibold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="mt-4 text-base font-medium">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="mt-4 text-sm font-medium">{children}</h6>
    ),
    normal: ({ children }: any) => (
      <p className="mt-2 text-xl lg:text-lg">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-4 list-inside list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-4 list-inside list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-1 text-xl lg:text-lg">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="mb-1 text-xl lg:text-lg">{children}</li>
    ),
  },
};
