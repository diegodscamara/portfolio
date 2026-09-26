import type { MetadataRoute } from "next"
import { en } from "@/i18n/dictionaries/en"
import { site } from "@/lib/data"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: en.meta.title,
    short_name: site.name,
    description: en.meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#131316",
    theme_color: "#131316",
    icons: [
      { src: "/en/icon", sizes: "64x64", type: "image/png" },
      { src: "/en/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  }
}
