import { en } from "@/i18n/dictionaries/en"
import { agentsBrief } from "@/lib/llms"

export const dynamic = "force-static"

export const GET = () => new Response(agentsBrief(en), { headers: { "content-type": "text/markdown; charset=utf-8" } })
