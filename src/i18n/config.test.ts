import { expect, test } from "bun:test"
import { pickLocale, redirectFor } from "./config"

test("picks the highest-weighted supported language", () => {
  expect(pickLocale("fr-CA,fr;q=0.9,en;q=0.8")).toBe("fr")
  expect(pickLocale("de-DE,de;q=0.9,es;q=0.7,en;q=0.5")).toBe("es")
  expect(pickLocale("en;q=0.3, pt-BR;q=0.9")).toBe("pt")
})

test("falls back to English for missing, unsupported or garbage headers", () => {
  expect(pickLocale(null)).toBe("en")
  expect(pickLocale("")).toBe("en")
  expect(pickLocale("de,ja;q=0.5")).toBe("en")
  expect(pickLocale(";;q=abc,,")).toBe("en")
})

test("routes: locale pages pass, root negotiates, known legacy paths go home for good", () => {
  expect(redirectFor("/en", "fr")).toBeNull()
  expect(redirectFor("/pt/anything", null)).toBeNull()
  expect(redirectFor("/", "fr-CA,fr;q=0.9")).toEqual({ to: "/fr", status: 307 })
  expect(redirectFor("/", null)).toEqual({ to: "/en", status: 307 })
  // Old blog URLs still indexed on this domain move permanently to the profile.
  expect(redirectFor("/about", "pt-BR")).toEqual({ to: "/pt", status: 308 })
  expect(redirectFor("/projects/", null)).toEqual({ to: "/en", status: 308 })
  expect(redirectFor("/posts/some-old-slug", null)).toEqual({ to: "/en", status: 308 })
  expect(redirectFor("/blog", "es")).toEqual({ to: "/es", status: 308 })
})

test("unknown locale-less paths are real 404s, not soft-404 redirects", () => {
  expect(redirectFor("/foo", null)).toBeNull()
  expect(redirectFor("/EN", null)).toBeNull()
  expect(redirectFor("/aboutme", null)).toBeNull()
})

test("ignores languages the browser marked q=0", () => {
  expect(pickLocale("pt;q=0,es;q=0.2")).toBe("es")
})
