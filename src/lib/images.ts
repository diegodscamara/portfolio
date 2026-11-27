import type { ImageMetadata } from "astro"

const files = import.meta.glob<{ default: ImageMetadata }>("/src/assets/**/*.{jpg,jpeg,webp,png}", { eager: true })

// data.ts keeps public-style paths ("/projects/x.webp"); the files live in src/assets so Astro can resize them.
export function asset(path: string) {
  const file = files[`/src/assets${path}`]
  if (!file) throw new Error(`No image in src/assets for ${path}`)
  return file.default
}
