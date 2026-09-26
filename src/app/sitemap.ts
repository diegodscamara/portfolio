import type { MetadataRoute } from "next"
import { locales } from "@/i18n/config"
import { site } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`])), "x-default": `${site.url}/en` }
  return locales.map((l) => ({
    url: `${site.url}/${l}`,
    lastModified: site.updated,
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.8,
    alternates: { languages },
  }))
}
