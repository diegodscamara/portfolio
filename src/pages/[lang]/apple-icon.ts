import { locales } from "@/i18n/config"
import { appleIcon } from "@/lib/og"

export const getStaticPaths = () => locales.map((lang) => ({ params: { lang } }))
export const GET = appleIcon
