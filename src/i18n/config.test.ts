import { expect, test } from "bun:test"
import { pickLocale } from "./config"

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

test("ignores languages the browser marked q=0", () => {
  expect(pickLocale("pt;q=0,es;q=0.2")).toBe("es")
})
