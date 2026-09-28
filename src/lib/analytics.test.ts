import { expect, test } from "bun:test"
import { classify } from "./analytics"
import { projects, sideProject, site } from "./data"

const here = new URL("https://www.diegocamara.com/pt")

test("resume PDFs are downloads, labelled with the PDF's language", () => {
  expect(classify("/diego-camara-resume.pdf", here)).toEqual({ event: "resume_downloaded", props: { lang: "en" } })
  expect(classify("/diego-camara-resume-fr.pdf", here)).toEqual({ event: "resume_downloaded", props: { lang: "fr" } })
})

test("email and profiles are contact clicks", () => {
  expect(classify(`mailto:${site.email}`, here)).toEqual({ event: "contact_clicked", props: { channel: "email" } })
  expect(classify(site.linkedin, here)).toEqual({ event: "contact_clicked", props: { channel: "linkedin" } })
  expect(classify(site.github, here)).toEqual({ event: "contact_clicked", props: { channel: "github" } })
  expect(classify(site.devto, here)).toEqual({ event: "contact_clicked", props: { channel: "devto" } })
})

test("project and side-project links are project opens, by id", () => {
  const p = projects[0]
  expect(classify(p.url, here)).toEqual({ event: "project_opened", props: { id: p.id } })
  expect(classify(sideProject.url, here)).toEqual({ event: "project_opened", props: { id: "adpilotpro" } })
})

test("locale links are language switches, but not to the current language", () => {
  expect(classify("/fr", here)).toEqual({ event: "language_switched", props: { from: "pt", to: "fr" } })
  expect(classify("/pt", here)).toBeNull()
})

test("other external links are outbound clicks by host; in-page and junk links are ignored", () => {
  expect(classify("https://luxor.tech", here)).toEqual({ event: "outbound_clicked", props: { host: "luxor.tech" } })
  expect(classify("#experience", here)).toBeNull()
  expect(classify("/pt#work", here)).toBeNull()
  expect(classify("", here)).toBeNull()
  expect(classify("http://[bad", here)).toBeNull()
})
