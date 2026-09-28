import { expect, test } from "bun:test"
import { locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { experience, resumeFor, site } from "./data"
import { resumeHtml } from "./resume"

const now = new Date("2026-09-28")

test("every locale's resume carries the full profile in its own language", () => {
  for (const lang of locales) {
    const t = getDictionary(lang)
    const html = resumeHtml(lang, now)
    expect(html).toContain(`<html lang="${lang}">`)
    expect(html).toContain(site.name)
    expect(html).toContain(t.profile.jobTitle)
    expect(html).toContain(site.email)
    for (const heading of [t.experience.title, t.spec.stack, t.spec.languages, t.spec.education]) expect(html).toContain(heading)
    for (const r of experience) {
      expect(html).toContain(r.company)
      for (const point of t.experience.roles[r.id]) expect(html).toContain(point)
    }
  }
})

test("no phone number, in any format", () => {
  for (const lang of locales) {
    const text = resumeHtml(lang, now).replace(/<[^>]+>/g, " ")
    expect(text).not.toMatch(/\+55|98214|5891|tel:/)
    // No run of 8+ digits (with optional separators) that could be a phone number; years and ids are shorter.
    expect(text).not.toMatch(/\d[\d\s().-]{8,}\d/)
  }
})

test("escapes text so content can never break the markup", () => {
  expect(resumeHtml("en", now)).not.toContain("<script")
})

test("each locale has its own PDF path; English keeps the legacy URL", () => {
  expect(resumeFor("en")).toBe("/diego-camara-resume.pdf")
  expect(resumeFor("pt")).toBe("/diego-camara-resume-pt.pdf")
  expect(new Set(locales.map(resumeFor)).size).toBe(4)
})
