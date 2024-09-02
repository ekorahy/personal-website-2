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
        className="mx-auto w-full h-auto"
      />
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a href={value.href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
  },
  block: {
    // Define rendering for all heading levels
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mt-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-semibold mt-4">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-base font-medium mt-4">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-sm font-medium mt-4">{children}</h6>,
    normal: ({ children }: any) => <p className="mt-2 text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside ml-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside ml-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
};