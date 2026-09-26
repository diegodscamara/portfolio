import { expect, test } from "bun:test"
import { formatDuration } from "./duration"

test("counts whole months inclusive of start month", () => {
  expect(formatDuration("2022-10", "2025-07")).toBe("2 yrs 10 mos")
  expect(formatDuration("2022-06", "2022-10")).toBe("5 mos")
  expect(formatDuration("2021-07", "2022-06")).toBe("1 yr")
})

test("open-ended roles run until now", () => {
  expect(formatDuration("2025-08", null, new Date("2026-09-26"))).toBe("1 yr 2 mos")
})

test("single month and singulars", () => {
  expect(formatDuration("2024-01", "2024-01")).toBe("1 mo")
  expect(formatDuration("2023-01", "2024-01")).toBe("1 yr 1 mo")
})

test("uses the given unit labels", () => {
  const pt = { yr: ["ano", "anos"], mo: ["mês", "meses"] } as const
  expect(formatDuration("2022-10", "2025-07", undefined, pt)).toBe("2 anos 10 meses")
  expect(formatDuration("2023-01", "2024-01", undefined, pt)).toBe("1 ano 1 mês")
})

test("rejects malformed or inverted ranges", () => {
  expect(() => formatDuration("2024/01", "2024-02")).toThrow()
  expect(() => formatDuration("2024-05", "2024-01")).toThrow()
})
