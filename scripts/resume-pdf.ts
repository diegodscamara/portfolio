// Renders public/diego-camara-resume{,-pt,-fr,-es}.pdf from the site's dictionaries.
// Run after changing content: `bun run resume`, then commit the PDFs.
import { chromium } from "@playwright/test"
import { locales } from "../src/i18n/config"
import { resumeFor, site } from "../src/lib/data"
import { resumeHtml } from "../src/lib/resume"

const browser = await chromium.launch()
try {
  const page = await browser.newPage()
  for (const lang of locales) {
    await page.setContent(resumeHtml(lang), { waitUntil: "load" })
    const path = `public${resumeFor(lang)}`
    await page.pdf({ path, format: "A4", printBackground: true, preferCSSPageSize: true, tagged: true, outline: true })
    console.log(`${lang}: ${path}`)
  }
} finally {
  await browser.close()
}
console.log(`Done. Contact line: ${site.email} (no phone).`)
