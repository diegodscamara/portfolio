import { expect, test } from "bun:test"
import { locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { en } from "@/i18n/dictionaries/en"
import { experience, projects, resumeFor, sideProject, site } from "./data"
import { agentsBrief, faqAnswer, faqPage, llmsFull, llmsIndex } from "./llms"

const now = new Date("2026-09-26")

test("index follows the llms.txt shape: H1, summary quote, linked sections", () => {
  const md = llmsIndex(en)
  expect(md.startsWith(`# ${site.name}\n\n> `)).toBe(true)
  for (const l of ["en", "pt", "fr", "es"]) expect(md).toContain(`${site.url}/${l}`)
  expect(md).toContain(`${site.url}/llms-full.txt`)
  expect(md).toContain(site.resume)
})

test("full text carries every role, project and link a model might cite", () => {
  const md = llmsFull(en, now)
  for (const r of experience) {
    expect(md).toContain(`### ${r.company}`)
    for (const point of en.experience.roles[r.id]) expect(md).toContain(point)
  }
  for (const p of projects) expect(md).toContain(`[${p.name}](${p.url})`)
  expect(md).toContain(sideProject.url)
  expect(md).toContain("Aug 2025 - Present (1 yr 2 mos)")
  expect(md).toContain(site.email)
})

test("no markdown-breaking or banned characters leak in", () => {
  const md = llmsFull(en, now)
  expect(md).not.toMatch(/[—–]/)
  expect(md).not.toContain("undefined")
  expect(md).not.toContain("{hq}")
})

test("every language's markdown twin carries its FAQ and links its own resume", () => {
  for (const lang of locales) {
    const t = getDictionary(lang)
    const md = llmsFull(t, now, lang)
    expect(md).toContain(`## ${t.faq.title}`)
    for (const item of t.faq.items) {
      expect(md).toContain(`### ${item.q}`)
      expect(md).toContain(faqAnswer(item.a))
    }
    expect(md).toContain(`${site.url}${resumeFor(lang)}`)
    expect(md).not.toMatch(/[—–]|undefined|\{email\}/)
  }
})

test("the FAQ never claims availability", () => {
  for (const lang of locales)
    for (const { q, a } of getDictionary(lang).faq.items)
      expect(`${q} ${a}`).not.toMatch(/availab|open to|hiring|disponív|disponib|contrat/i)
})

test("FAQPage structured data mirrors the visible FAQ", () => {
  for (const lang of locales) {
    const t = getDictionary(lang)
    const ld = faqPage(t, lang)
    expect(ld["@type"]).toBe("FAQPage")
    expect(ld.inLanguage).toBe(lang)
    expect(ld.mainEntity).toHaveLength(t.faq.items.length)
    ld.mainEntity.forEach((q, i) => {
      expect(q.name).toBe(t.faq.items[i].q)
      expect(q.acceptedAnswer.text).toBe(faqAnswer(t.faq.items[i].a))
    })
  }
})

test("AGENTS.md tells an agent who Diego is, where to read more and how to reach him", () => {
  const md = agentsBrief(en)
  expect(md.startsWith(`# AGENTS.md`)).toBe(true)
  for (const s of [site.email, site.linkedin, site.github, `${site.url}/llms-full.txt`]) expect(md).toContain(s)
  for (const lang of locales) {
    expect(md).toContain(`${site.url}/${lang}.md`)
    expect(md).toContain(`${site.url}${resumeFor(lang)}`)
  }
  expect(md).not.toMatch(/[—–]|undefined|\+55/)
})

test("the llms.txt index points agents at AGENTS.md and the markdown twins", () => {
  const md = llmsIndex(en)
  expect(md).toContain(`${site.url}/AGENTS.md`)
  for (const lang of locales) expect(md).toContain(`${site.url}/${lang}.md`)
})
