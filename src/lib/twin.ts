import type { APIRoute } from "astro"
import { locales, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { llmsFull } from "./llms"
import { markdown } from "./responses"

// Markdown twin of each page for agents, served at /md/{lang} and /{lang}.md. Caddy adds the canonical Link header.
export const twinPaths = () => locales.map((lang) => ({ params: { lang } }))
export const twin: APIRoute = ({ params }) => {
  const lang = params.lang as Locale
  return markdown(llmsFull(getDictionary(lang), new Date(), lang))
}
