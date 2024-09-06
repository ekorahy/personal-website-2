export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || process.env.SANITY_STUDIO_API_VERSION

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_TOKEN || process.env.SANITY_STUDIO_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
