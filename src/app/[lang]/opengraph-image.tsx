import { ImageResponse } from "next/og"
import { hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { site } from "@/lib/data"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function generateImageMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return [{ id: "og", alt: getDictionary(hasLocale(lang) ? lang : "en").meta.title, size, contentType }]
}

export default async function OG({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getDictionary(hasLocale(lang) ? lang : "en")
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#131316",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30, color: "#a1a1aa" }}>
          <div style={{ display: "flex", flexWrap: "wrap", width: 30, gap: 4 }}>
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} style={{ width: 7, height: 7, borderRadius: 1, background: i === 8 ? "#f08a3c" : "#4a4a52" }} />
            ))}
          </div>
          {`${t.experience.jobTitle} · Luxor`}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 38, color: "#a1a1aa", maxWidth: 1000, lineHeight: 1.3 }}>{t.hero.pitch.join("")}</div>
        </div>
        <div style={{ fontSize: 26, color: "#71717a" }}>www.diegocamara.com</div>
      </div>
    ),
    size,
  )
}
