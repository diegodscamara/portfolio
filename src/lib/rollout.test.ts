import { expect, test } from "bun:test"
import { planRollout, statusAt } from "./rollout"

const opts = { tiles: 60, batchSize: 12, seed: 7, retryRate: 0.1 }

test("every tile finishes done, exactly once", () => {
  const { steps } = planRollout(opts)
  const last = new Map<number, string>()
  for (const s of steps) last.set(s.tile, s.state)
  expect(last.size).toBe(60)
  expect([...last.values()].every((s) => s === "done")).toBe(true)
  expect(steps.filter((s) => s.state === "done").length).toBe(60)
})

test("steps are time-ordered and deterministic per seed", () => {
  const a = planRollout(opts)
  const b = planRollout(opts)
  expect(a).toEqual(b)
  for (let i = 1; i < a.steps.length; i++) expect(a.steps[i].t).toBeGreaterThanOrEqual(a.steps[i - 1].t)
  expect(planRollout({ ...opts, seed: 8 })).not.toEqual(a)
})

test("a batch only starts after the previous batch is fully done", () => {
  const { steps, batches } = planRollout(opts)
  expect(batches).toBe(5)
  const batchOf = (tile: number) => Math.floor(tile / opts.batchSize)
  for (let k = 1; k < batches; k++) {
    const prevDone = Math.max(...steps.filter((s) => batchOf(s.tile) === k - 1 && s.state === "done").map((s) => s.t))
    const nextStart = Math.min(...steps.filter((s) => batchOf(s.tile) === k && s.state === "updating").map((s) => s.t))
    expect(nextStart).toBeGreaterThan(prevDone)
  }
})

test("retried tiles fail once, then update again before finishing", () => {
  const { steps, retries } = planRollout({ ...opts, retryRate: 0.3 })
  const retried = steps.filter((s) => s.state === "retrying").map((s) => s.tile)
  expect(retries).toBe(retried.length)
  expect(retries).toBeGreaterThan(0)
  const seq = steps.filter((s) => s.tile === retried[0]).map((s) => s.state)
  expect(seq).toEqual(["updating", "retrying", "updating", "done"])
})

test("statusAt summarises progress at a point in time", () => {
  const plan = planRollout(opts)
  expect(statusAt(plan, -1)).toEqual({ batch: 0, done: 0, retries: 0 })
  expect(statusAt(plan, plan.duration)).toEqual({ batch: 5, done: 60, retries: plan.retries })
})

test("rejects nonsense sizes", () => {
  expect(() => planRollout({ ...opts, tiles: 0 })).toThrow()
  expect(() => planRollout({ ...opts, batchSize: 0 })).toThrow()
})
