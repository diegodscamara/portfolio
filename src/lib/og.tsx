import { readFile } from "node:fs/promises"
import { join } from "node:path"
import satori from "satori"
import sharp from "sharp"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { site } from "./data"

// Build-time only (Astro endpoints): satori lays out the JSX as SVG, sharp rasterizes it.
// Resolved from the project root: bundled endpoints run from dist/.prerender, where import.meta.url points elsewhere.
const font = (weight: 400 | 700) => readFile(join(process.cwd(), `src/assets/fonts/Geist-${weight}.ttf`))

async function png(node: React.ReactNode, width: number, height: number) {
  const svg = await satori(node, {
    width,
    height,
    fonts: [
      { name: "Geist", data: await font(400), weight: 400 },
      { name: "Geist", data: await font(700), weight: 700 },
    ],
  })
  return new Response(new Uint8Array(await sharp(Buffer.from(svg)).png().toBuffer()), {
    headers: { "content-type": "image/png" },
  })
}

// Same 3x3 tile mark as the nav: eight idle tiles, one running.
function Mark({ tile, gap, pad, radius, corner = 0 }: { tile: number; gap: number; pad: number; radius: number; corner?: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        gap,
        padding: pad,
        borderRadius: corner,
        background: "#131316",
      }}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} style={{ width: tile, height: tile, borderRadius: radius, background: i === 8 ? "#f08a3c" : "#4a4a52" }} />
      ))}
    </div>
  )
}

export const icon = () => png(<Mark tile={11} gap={5} pad={9} radius={2} corner={14} />, 64, 64)
export const appleIcon = () => png(<Mark tile={26} gap={14} pad={36} radius={5} />, 180, 180)

export function ogImage(lang: Locale) {
  const t = getDictionary(lang)
  return png(
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
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30, color: "#a1a1aa" }}>
        <div style={{ display: "flex", flexWrap: "wrap", width: 30, gap: 4 }}>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: 1, background: i === 8 ? "#f08a3c" : "#4a4a52" }} />
          ))}
        </div>
        {`${t.profile.jobTitle} · Luxor`}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>{site.name}</div>
        <div style={{ fontSize: 38, color: "#a1a1aa", maxWidth: 1000, lineHeight: 1.3 }}>{t.hero.pitch.join("")}</div>
      </div>
      <div style={{ fontSize: 26, color: "#71717a" }}>www.diegocamara.com</div>
    </div>,
    1200,
    630,
  )
}
