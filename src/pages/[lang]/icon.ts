import { locales } from "@/i18n/config"
import { icon } from "@/lib/og"

export const getStaticPaths = () => locales.map((lang) => ({ params: { lang } }))
export const GET = icon
