import { locales, localeNames } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"
import { credentials, educationYears, experience, languages, projects, sideProject, site, stack } from "./data"
import { formatDuration, formatMonth } from "./duration"

// https://llmstxt.org: an H1, a one-paragraph summary as a blockquote, then linked sections.
export function llmsIndex(t: Dictionary) {
  return [
    `# ${site.name}`,
    `> ${t.profile.summary}`,
    "## Pages",
    ...locales.map((l) => `- [${localeNames[l]}](${site.url}/${l}): portfolio in ${localeNames[l]}`),
    "## Details",
    `- [Full profile as plain text](${site.url}/llms-full.txt): experience, projects, stack, languages and credentials`,
    `- [Resume (PDF)](${site.url}${site.resume})`,
    "## Contact",
    `- Email: ${site.email}`,
    `- [LinkedIn](${site.linkedin})`,
    `- [GitHub](${site.github})`,
  ].join("\n\n")
}

export function llmsFull(t: Dictionary, now = new Date()) {
  const e = t.experience
  const roles = experience.map((r) =>
    [
      `### ${r.company}`,
      `${e.jobTitle}, ${e.team.replace("{hq}", r.hq)}. ${formatMonth(r.start)} - ${r.end ? formatMonth(r.end) : e.present} (${formatDuration(r.start, r.end, now, e.units)})${r.url ? `. ${r.url}` : ""}`,
      ...e.roles[r.id].map((p) => `- ${p}`),
      `Stack: ${r.stack.join(", ")}`,
    ].join("\n"),
  )
  const work = projects.map((p) => `- [${p.name}](${p.url}) (${p.org}): ${t.work.summaries[p.id]}`)
  return [
    `# ${site.name}`,
    `> ${t.profile.summary}`,
    `## ${e.title}`,
    ...roles,
    `## ${t.work.title}`,
    ...work,
    `### ${sideProject.name} (${t.work.sideProject})`,
    `${sideProject.url}\n\n${t.work.adpilot.summary}\n\n${t.work.adpilot.points.map((p) => `- ${p}`).join("\n")}`,
    `## ${t.spec.stack}`,
    stack.map((items, i) => `- ${t.spec.groups[i]}: ${items.join(", ")}`).join("\n"),
    `## ${t.spec.languages}`,
    languages.map((l) => `- ${t.spec.languageNames[l.code]}: ${l.level ?? t.spec.native}`).join("\n"),
    `## ${t.spec.credentials}`,
    credentials.map((c) => `- ${c.name}, ${c.issuer}, ${c.year}`).join("\n"),
    `## ${t.spec.education}`,
    t.spec.degrees.map((d, i) => `- ${d}, ${t.spec.school}, ${educationYears[i]}`).join("\n"),
    `## ${t.nav.contact}`,
    `- Email: ${site.email}\n- LinkedIn: ${site.linkedin}\n- GitHub: ${site.github}\n- ${t.hero.resume}: ${site.url}${site.resume}`,
  ].join("\n\n")
}
