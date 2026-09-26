import { en } from "@/i18n/dictionaries/en"
import { llmsIndex } from "@/lib/llms"

export const dynamic = "force-static"

export const GET = () => new Response(llmsIndex(en), { headers: { "content-type": "text/markdown; charset=utf-8" } })
