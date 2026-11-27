import type { APIRoute } from "astro"
import { locales, type Locale } from "@/i18n/config"
import { ogImage } from "@/lib/og"

export const getStaticPaths = () => locales.map((lang) => ({ params: { lang } }))
export const GET: APIRoute = ({ params }) => ogImage(params.lang as Locale)
