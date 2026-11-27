import { describe, expect, test } from "bun:test"
import { resolveDark } from "./theme"

describe("resolveDark", () => {
  test("dark is the default", () => expect(resolveDark(null, false)).toBe(true))
  test("explicit choices win over the system", () => {
    expect(resolveDark("light", true)).toBe(false)
    expect(resolveDark("dark", false)).toBe(true)
  })
  test("system follows prefers-color-scheme", () => {
    expect(resolveDark("system", false)).toBe(false)
    expect(resolveDark("system", true)).toBe(true)
  })
  test("junk values fall back to dark", () => expect(resolveDark("purple", false)).toBe(true))
})
