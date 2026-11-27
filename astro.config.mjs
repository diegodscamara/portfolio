import react from "@astrojs/react"
import { defineConfig, fontProviders } from "astro/config"

// Static output served by Caddy on the VPS (deploy/). Headers, redirects, locale negotiation and the /ingest PostHog
// proxy live in deploy/portfolio.rules.
export default defineConfig({
  site: "https://www.diegocamara.com",
  trailingSlash: "never",
  // file: /en -> en.html, and extensionless endpoints like /en/icon stay extensionless.
  // One small stylesheet: inlining it removes the only render-blocking request.
  build: { format: "file", inlineStylesheets: "always" },
  integrations: [react()],
  fonts: [
    // Variable fonts: one file per family covers every weight the page uses.
    // Mono falls back to metric-adjusted Arial, as next/font did (glyphs Geist Mono lacks, like ⌘, render the same).
    { provider: fontProviders.google(), name: "Geist", cssVariable: "--font-geist-sans", subsets: ["latin"], weights: ["100 900"], styles: ["normal"], fallbacks: ["sans-serif"] },
    { provider: fontProviders.google(), name: "Geist Mono", cssVariable: "--font-geist-mono", subsets: ["latin"], weights: ["100 900"], styles: ["normal"], fallbacks: ["sans-serif"] },
  ],
})
