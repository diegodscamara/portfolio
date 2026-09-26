import type { MetadataRoute } from "next"
import { site } from "@/lib/data"

// Everyone, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), may read the whole site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
