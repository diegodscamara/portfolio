import { ImageResponse } from "next/og"
import { en } from "@/i18n/dictionaries/en"
import { site } from "@/lib/data"

export const alt = en.meta.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 32 }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#f08a3c" }} />
          {site.name}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 980 }}>
          Software that keeps real operations running.
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa" }}>
          {`${en.experience.jobTitle} · TypeScript, React, Next.js, Node.js`}
        </div>
      </div>
    ),
    size,
  )
}
