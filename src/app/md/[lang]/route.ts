import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { site } from "@/lib/data"
import { llmsFull } from "@/lib/llms"

export const dynamic = "force-static"
export const revalidate = 86400
export const dynamicParams = false
export const generateStaticParams = () => locales.map((lang) => ({ lang }))

export async function GET(_: Request, ctx: RouteContext<"/md/[lang]">) {
  const { lang } = await ctx.params
  if (!hasLocale(lang)) return new Response("Not found", { status: 404 })
  return new Response(llmsFull(getDictionary(lang), new Date(), lang), {
    // Served at /{lang}.md via a rewrite; the HTML page stays the canonical one.
    headers: { "content-type": "text/markdown; charset=utf-8", link: `<${site.url}/${lang}>; rel="canonical"` },
  })
}
