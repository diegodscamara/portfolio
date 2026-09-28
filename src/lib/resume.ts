import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { credentials, educationYears, experience, languages, sideProject, site, stack } from "./data"
import { formatDuration, formatMonth } from "./duration"

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
const link = (url: string) => `<a href="${esc(url)}">${esc(bare(url))}</a>`

// A print-ready A4 resume built from the same dictionaries as the site.
export function resumeHtml(lang: Locale, now = new Date()) {
  const t = getDictionary(lang)
  const e = t.experience
  const roles = experience
    .map(
      (r) => `
    <article>
      <header>
        <h3>${esc(r.company)} <span>${esc(`${e.jobTitle}, ${e.team.replace("{hq}", r.hq)}`)}</span></h3>
        <p class="when">${esc(`${formatMonth(r.start, lang)} - ${r.end ? formatMonth(r.end, lang) : e.present}`)} · ${esc(formatDuration(r.start, r.end, now, e.units))}</p>
      </header>
      <ul>${e.roles[r.id].map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <p class="stack">${esc(r.stack.join(" · "))}</p>
    </article>`,
    )
    .join("")

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(`${site.name} | ${t.hero.resume}`)}</title>
<style>
  @page { size: A4; margin: 14mm 15mm; }
  * { box-sizing: border-box; }
  html, body { background: #fff; }
  body { margin: 0; font: 9.6pt/1.45 "Helvetica Neue", Helvetica, Arial, sans-serif; color: #18181b; }
  a { color: #b4410c; text-decoration: none; }
  h1 { margin: 0; font-size: 23pt; letter-spacing: -0.02em; line-height: 1.1; }
  .role { margin: 2pt 0 0; font-size: 11.5pt; color: #3f3f46; }
  .contact { margin: 6pt 0 0; color: #52525b; }
  .contact span + span::before { content: " · "; color: #a1a1aa; }
  h2 { margin: 14pt 0 5pt; padding-bottom: 3pt; border-bottom: 1px solid #e4e4e7; font-size: 8.5pt; letter-spacing: 0.08em; text-transform: uppercase; color: #b4410c; }
  h2 { break-after: avoid; }
  section.keep { break-inside: avoid; }
  h3 { margin: 0; font-size: 10.5pt; }
  h3 span { font-weight: 400; color: #3f3f46; }
  article { margin-bottom: 8pt; break-inside: avoid; }
  article header { display: flex; justify-content: space-between; gap: 12pt; align-items: baseline; }
  .when { margin: 0; white-space: nowrap; color: #71717a; font-size: 8.8pt; }
  ul { margin: 3pt 0 0; padding-left: 12pt; }
  li { margin: 1.5pt 0; }
  .stack { margin: 3pt 0 0; color: #71717a; font-size: 8.6pt; }
  p { margin: 0; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3pt 18pt; }
  .grid b { font-weight: 600; }
</style>
</head>
<body>
  <h1>${esc(site.name)}</h1>
  <p class="role">${esc(t.profile.jobTitle)}</p>
  <p class="contact"><span>${esc(t.hero.remote)}</span><span><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></span><span><a href="tel:${esc(site.phone.replace(/[^\d+]/g, ""))}">${esc(site.phone)}</a></span><span>${link(site.url)}</span><span>${link(site.linkedin)}</span><span>${link(site.github)}</span></p>

  <h2>${esc(t.profile.about)}</h2>
  <p>${esc(t.profile.summary)}</p>

  <h2>${esc(e.title)}</h2>
  ${roles}

  <section class="keep">
  <h2>${esc(t.work.sideProject)}</h2>
  <article>
    <header><h3>${esc(sideProject.name)} <span>${link(sideProject.url)}</span></h3></header>
    <p>${esc(t.work.adpilot.summary)}</p>
    <ul>${t.work.adpilot.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
  </article>
  </section>

  <section class="keep">
  <h2>${esc(t.spec.stack)}</h2>
  <div class="grid">${stack.map((items, i) => `<p><b>${esc(t.spec.groups[i])}:</b> ${esc(items.join(", "))}</p>`).join("")}</div>
  </section>

  <section class="keep">
  <h2>${esc(t.spec.languages)}</h2>
  <p>${languages.map((l) => `${esc(t.spec.languageNames[l.code])} (${esc(l.level ?? t.spec.native)})`).join(" · ")}</p>
  </section>

  <section class="keep">
  <h2>${esc(t.spec.education)}</h2>
  ${t.spec.degrees.map((d, i) => `<p><b>${esc(d)}</b>, ${esc(t.spec.school)}, ${educationYears[i]}</p>`).join("")}
  </section>

  <section class="keep">
  <h2>${esc(t.spec.credentials)}</h2>
  <div class="grid">${credentials.map((c) => `<p>${esc(c.name)} <span class="stack">${esc(`${c.issuer}, ${c.year}`)}</span></p>`).join("")}</div>
  </section>
</body>
</html>`
}
