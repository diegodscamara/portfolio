import { robotsTxt } from "@/lib/seo"

export const GET = () => new Response(robotsTxt(), { headers: { "content-type": "text/plain; charset=utf-8" } })
