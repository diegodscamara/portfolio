const MONTH = /^(\d{4})-(0[1-9]|1[0-2])$/

function toIndex(ym: string) {
  const m = MONTH.exec(ym)
  if (!m) throw new Error(`Expected YYYY-MM, got "${ym}"`)
  return Number(m[1]) * 12 + Number(m[2]) - 1
}

export type DurationUnits = { yr: readonly string[]; mo: readonly string[] }
const EN: DurationUnits = { yr: ["yr", "yrs"], mo: ["mo", "mos"] }

const plural = (n: number, [one, many]: readonly string[]) => `${n} ${n === 1 ? one : many}`

// LinkedIn-style: both the start and end months count.
export function formatDuration(start: string, end: string | null, now = new Date(), units: DurationUnits = EN) {
  const to = end ? toIndex(end) : now.getFullYear() * 12 + now.getMonth()
  const months = to - toIndex(start) + 1
  if (months < 1) throw new Error(`End ${end} is before start ${start}`)

  const y = Math.floor(months / 12)
  const m = months % 12
  return [y && plural(y, units.yr), m && plural(m, units.mo)].filter(Boolean).join(" ")
}

const intlLocale: Record<string, string> = { en: "en-US", pt: "pt-BR", fr: "fr-FR", es: "es-ES" }

export const formatMonth = (ym: string, lang = "en") =>
  new Date(`${ym}-01T00:00:00Z`).toLocaleString(intlLocale[lang] ?? lang, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
