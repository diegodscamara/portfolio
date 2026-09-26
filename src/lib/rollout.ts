export type TileState = "updating" | "retrying" | "done"
export type Step = { t: number; tile: number; state: TileState }
export type Plan = { steps: Step[]; batches: number; retries: number; duration: number; batchStarts: number[] }

type Options = { tiles: number; batchSize: number; seed: number; retryRate: number }

// mulberry32: tiny seeded PRNG so the illustration plays the same way every visit.
function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Simulates a batched firmware rollout: each batch waits for the previous one,
// and a few tiles fail once and are retried, like activities in a Temporal workflow.
export function planRollout({ tiles, batchSize, seed, retryRate }: Options): Plan {
  if (!(tiles > 0) || !(batchSize > 0)) throw new Error("tiles and batchSize must be positive")
  const rand = rng(seed)
  const steps: Step[] = []
  const batchStarts: number[] = []
  let retries = 0
  let t0 = 0

  for (let first = 0; first < tiles; first += batchSize) {
    batchStarts.push(t0)
    let batchEnd = t0
    for (let tile = first; tile < Math.min(first + batchSize, tiles); tile++) {
      const start = t0 + Math.round(rand() * 150)
      const work = 350 + Math.round(rand() * 450)
      steps.push({ t: start, tile, state: "updating" })
      let end = start + work
      if (rand() < retryRate) {
        retries++
        const fail = start + Math.round(work * 0.6)
        const resume = fail + 250
        end = resume + Math.round(work * 0.7)
        steps.push({ t: fail, tile, state: "retrying" }, { t: resume, tile, state: "updating" })
      }
      steps.push({ t: end, tile, state: "done" })
      batchEnd = Math.max(batchEnd, end)
    }
    t0 = batchEnd + 120
  }

  steps.sort((a, b) => a.t - b.t)
  return { steps, batches: batchStarts.length, retries, duration: steps.at(-1)!.t, batchStarts }
}

export function statusAt(plan: Plan, t: number) {
  let done = 0
  let retries = 0
  for (const s of plan.steps) {
    if (s.t > t) break
    if (s.state === "done") done++
    else if (s.state === "retrying") retries++
  }
  return { batch: plan.batchStarts.filter((b) => b <= t).length, done, retries }
}
