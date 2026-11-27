import { locales } from "@/i18n/config"
import { en } from "@/i18n/dictionaries/en"
import { site } from "./data"

const pageUrl = (l: string) => `${site.url}/${l}`

export function sitemapXml() {
  const alternates = [...locales.map((l) => [l, pageUrl(l)]), ["x-default", pageUrl("en")]]
    .map(([l, href]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`)
    .join("\n")
  const urls = locales.map(
    (l) => `<url>
<loc>${pageUrl(l)}</loc>
${alternates}
<lastmod>${site.updated}</lastmod>
<changefreq>monthly</changefreq>
<priority>${l === "en" ? 1 : 0.8}</priority>
</url>`,
  )
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`
}

// Everyone, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), may read the whole site.
export const robotsTxt = () => `User-Agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`

export const manifest = () => ({
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
})
