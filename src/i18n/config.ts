export const locales = ["en", "pt", "fr", "es"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  fr: "Français",
  es: "Español",
}

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

// ponytail: minimal Accept-Language parser, only matches on the primary subtag (pt-BR -> pt).
export function pickLocale(header: string | null): Locale {
  if (!header) return defaultLocale
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";")
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="))
      const weight = q ? Number(q.slice(2)) : 1
      return { lang: tag.trim().toLowerCase().split("-")[0], weight: Number.isFinite(weight) ? weight : 0 }
    })
    .filter((l) => l.lang && l.weight > 0)
    .sort((a, b) => b.weight - a.weight)
  return ranked.map((l) => l.lang).find(hasLocale) ?? defaultLocale
}

// Paths the old blog (Diego Câmara's Blog) served on this domain and search engines still list.
const LEGACY = /^\/(about|projects|posts|blog|contact|tags)(\/.*)?$/

// "/" is negotiated per visitor (307 + Vary). Known legacy paths move permanently to the profile.
// Anything else locale-less falls through to a real 404 instead of a soft-404 redirect.
export function redirectFor(pathname: string, acceptLanguage: string | null) {
  const first = pathname.split("/")[1] ?? ""
  if (hasLocale(first)) return null
  const to = `/${pickLocale(acceptLanguage)}`
  if (pathname === "/") return { to, status: 307 } as const
  if (LEGACY.test(pathname)) return { to, status: 308 } as const
  return null
}

// Language for a 404: the URL's own locale prefix if it has one, else the browser's preference.
export function localeFor404(pathname: string | null, acceptLanguage: string | null): Locale {
  const first = pathname?.split("/")[1] ?? ""
  return hasLocale(first) ? first : pickLocale(acceptLanguage)
}
