import { en } from "@/i18n/dictionaries/en"
import { llmsFull } from "@/lib/llms"

export const dynamic = "force-static"
// Durations like "1 yr 2 mos" are computed at build time; refresh daily with the page.
export const revalidate = 86400

export const GET = () => new Response(llmsFull(en), { headers: { "content-type": "text/markdown; charset=utf-8" } })
