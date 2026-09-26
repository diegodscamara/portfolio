import { ImageResponse } from "next/og"
import { locales } from "@/i18n/config"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"
export const generateStaticParams = () => locales.map((lang) => ({ lang }))

// Same 3x3 tile mark as the nav, sized for iOS home screens.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          gap: 14,
          padding: 36,
          background: "#131316",
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} style={{ width: 26, height: 26, borderRadius: 5, background: i === 8 ? "#f08a3c" : "#4a4a52" }} />
        ))}
      </div>
    ),
    size,
  )
}
