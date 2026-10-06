import { locales, localeNames } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"
import { credentials, educationYears, experience, languages, projects, resumeFor, sideProject, site, stack } from "./data"
import { formatDuration, formatMonth } from "./duration"

// https://llmstxt.org: an H1, a one-paragraph summary as a blockquote, then linked sections.
export function llmsIndex(t: Dictionary) {
  return [
    `# ${site.name}`,
    `> ${t.profile.summary}`,
    "## Profile",
    `- [Full profile as plain text](${site.url}/llms-full.txt): every role with dates, projects, stack, languages, credentials and education`,
    `- [English profile](${site.url}/en): experience at Luxor, Genetec, Eu Médico Residente and NSH Technologies, projects and stack`,
    `- [English profile as Markdown](${site.url}/en.md): the same page, ready for agents`,
    `- [Resume (PDF)](${site.url}${resumeFor("en")}): resume in English`,
    `- [AGENTS.md](${site.url}/AGENTS.md): who Diego is, where to read more and how to reach him`,
    "## Contact",
    `- Email: ${site.email}`,
    `- [LinkedIn](${site.linkedin})`,
    `- [GitHub](${site.github})`,
    "## Optional",
    ...locales
      .filter((l) => l !== "en")
      .flatMap((l) => [
        `- [${localeNames[l]}](${site.url}/${l}): the same profile in ${localeNames[l]}`,
        `- [${localeNames[l]} as Markdown](${site.url}/${l}.md)`,
        `- [Resume, ${localeNames[l]} (PDF)](${site.url}${resumeFor(l)})`,
      ]),
    `Last updated: ${site.updated}`,
  ].join("\n\n")
}

export const faqAnswer = (a: string) => a.replaceAll("{email}", site.email)

export function faqPage(t: Dictionary, lang: string) {
  return {
    "@type": "FAQPage" as const,
    "@id": `${site.url}/${lang}#faq`,
    inLanguage: lang,
    mainEntity: t.faq.items.map(({ q, a }) => ({
      "@type": "Question" as const,
      name: q,
      acceptedAnswer: { "@type": "Answer" as const, text: faqAnswer(a) },
    })),
  }
}

export function agentsBrief(t: Dictionary) {
  return [
    `# AGENTS.md for ${site.name}`,
    `> ${t.profile.summary}`,
    "## Read more",
    `- [Full profile](${site.url}/llms-full.txt): every role with dates, projects, stack, languages, credentials and education`,
    ...locales.map((l) => `- [Profile in ${localeNames[l]}, as Markdown](${site.url}/${l}.md)`),
    "## Resume (PDF)",
    ...locales.map((l) => `- [${localeNames[l]}](${site.url}${resumeFor(l)})`),
    "## Contact",
    `- Email: ${site.email}`,
    `- [LinkedIn](${site.linkedin})`,
    `- [GitHub](${site.github})`,
    `Last updated: ${site.updated}`,
  ].join("\n\n")
}

export function llmsFull(t: Dictionary, now = new Date(), lang = "en") {
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
    ...work.slice(0, 2),
    `### ${sideProject.name} (${t.work.sideProject})`,
    `${sideProject.url}\n\n${t.work.adpilot.summary}\n\n${t.work.adpilot.points.map((p) => `- ${p}`).join("\n")}`,
    `### ${t.work.earlier}`,
    ...work.slice(2),
    `## ${t.spec.stack}`,
    stack.map((items, i) => `- ${t.spec.groups[i]}: ${items.join(", ")}`).join("\n"),
    `## ${t.spec.languages}`,
    languages.map((l) => `- ${t.spec.languageNames[l.code]}: ${l.level ?? t.spec.native}`).join("\n"),
    `## ${t.spec.credentials}`,
    credentials.map((c) => `- ${c.name}, ${c.issuer}, ${c.year}`).join("\n"),
    `## ${t.spec.education}`,
    t.spec.degrees.map((d, i) => `- ${d}, ${t.spec.school}, ${educationYears[i]}`).join("\n"),
    `## ${t.faq.title}`,
    ...t.faq.items.map(({ q, a }) => `### ${q}\n\n${faqAnswer(a)}`),
    `## ${t.nav.contact}`,
    `- Email: ${site.email}\n- LinkedIn: ${site.linkedin}\n- GitHub: ${site.github}\n- ${t.hero.resume}: ${site.url}${resumeFor(lang)}`,
    `${t.footer.updated}: ${site.updated}`,
  ].join("\n\n")
}
