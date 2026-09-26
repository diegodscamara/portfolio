import { expect, test } from "bun:test"
import { en } from "@/i18n/dictionaries/en"
import { experience, projects, sideProject, site } from "./data"
import { llmsFull, llmsIndex } from "./llms"

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
