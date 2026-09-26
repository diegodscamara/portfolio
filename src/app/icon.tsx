import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

// Same 3x3 tile mark as the nav: eight idle tiles, one running.
export default function Icon() {
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
          gap: 5,
          padding: 9,
          borderRadius: 14,
          background: "#131316",
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            style={{ width: 11, height: 11, borderRadius: 2, background: i === 8 ? "#f08a3c" : "#4a4a52" }}
          />
        ))}
      </div>
    ),
    size,
  )
}
