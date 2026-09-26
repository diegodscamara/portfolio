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
