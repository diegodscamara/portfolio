"use client"

import * as React from "react"
import { RotateCcw } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/i18n/dictionaries"
import { planRollout, statusAt } from "@/lib/rollout"

const TILES = 240
const plan = planRollout({ tiles: TILES, batchSize: 30, seed: 2025, retryRate: 0.04 })

const states = ["idle", "updating", "retrying", "done"] as const

export function FleetRollout({ t }: { t: Dictionary["fleet"] }) {
  const grid = React.useRef<HTMLDivElement>(null)
  const batch = React.useRef<HTMLSpanElement>(null)
  const done = React.useRef<HTMLSpanElement>(null)
  const retries = React.useRef<HTMLSpanElement>(null)
  const [run, setRun] = React.useState(0)

  React.useEffect(() => {
    const root = grid.current
    if (!root) return
    const tiles = root.children as HTMLCollectionOf<HTMLElement>
    // Tiles and counters are written straight to the DOM so the animation never re-renders React.
    const paint = (t: number) => {
      const s = statusAt(plan, t)
      if (batch.current) batch.current.textContent = `${s.batch}/${plan.batches}`
      if (done.current) done.current.textContent = `${s.done}/${TILES}`
      if (retries.current) retries.current.textContent = String(s.retries)
    }
    // Tiles render idle from the server; only a replay needs resetting (avoids 240 style writes on load).
    if (run > 0) {
      for (const el of tiles) el.dataset.state = "idle"
      paint(-1)
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const s of plan.steps) tiles[s.tile].dataset.state = s.state
      paint(plan.duration)
      return
    }

    let raf = 0
    let i = 0
    let start: number | undefined
    const tick = (now: number) => {
      start ??= now
      const t = now - start
      while (i < plan.steps.length && plan.steps[i].t <= t) {
        tiles[plan.steps[i].tile].dataset.state = plan.steps[i].state
        i++
      }
      paint(t)
      if (i < plan.steps.length) raf = requestAnimationFrame(tick)
    }
    // Let the first screen settle: start on the first sign of a person (scroll, pointer, touch, key)
    // and only once the panel is on screen. Keeps the load itself visually still.
    const intents = ["scroll", "pointermove", "pointerdown", "keydown", "touchstart"] as const
    let ready = run > 0
    let visible = false
    const begin = () => {
      if (!ready || !visible || raf) return
      raf = requestAnimationFrame(tick)
    }
    const arm = () => {
      ready = true
      begin()
    }
    for (const type of intents) window.addEventListener(type, arm, { once: true, passive: true })
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        begin()
      },
      { threshold: 0.4 },
    )
    io.observe(root)
    return () => {
      io.disconnect()
      for (const type of intents) window.removeEventListener(type, arm)
      cancelAnimationFrame(raf)
    }
  }, [run])

  return (
    // Illustration only: keep its counters out of search snippets and AI extracts.
    <figure className="w-full" data-nosnippet>
      <div className="rounded-lg border bg-card/70 shadow-[0_40px_80px_-40px_oklch(0.2_0.02_60/0.5)] backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b px-4 py-3">
          <p className="font-mono text-xs text-muted-foreground">
            {t.workflow} <span className="text-foreground">firmware-rollout</span>
          </p>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className={cn(buttonVariants({ variant: "outline", size: "xs" }), "gap-1.5 rounded-full px-3 font-mono font-normal text-muted-foreground")}
          >
            <RotateCcw className="size-3" />
            {t.replay}
          </button>
        </div>
        <div ref={grid} aria-hidden className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-[3px] p-4">
          {Array.from({ length: TILES }, (_, i) => (
            <span key={i} className="fleet-tile aspect-square rounded-[2px]" data-state="idle" />
          ))}
        </div>
        <dl aria-hidden className="grid grid-cols-3 border-t font-mono text-xs">
          {[
            [t.batch, batch, `0/${plan.batches}`],
            [t.updated, done, `0/${TILES}`],
            [t.retried, retries, "0"],
          ].map(([label, ref, initial]) => (
            <div key={label as string} className="border-r px-4 py-3 last:border-r-0">
              <dt className="text-muted-foreground">{label as string}</dt>
              <dd className="mt-0.5 text-sm text-foreground tabular-nums">
                <span ref={ref as React.RefObject<HTMLSpanElement>}>{initial as string}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        {states.map((state) => (
          <span key={state} className="inline-flex items-center gap-1.5">
            <span className="fleet-tile size-2 rounded-[2px]" data-state={state} />
            {t.legend[state]}
          </span>
        ))}
        <span className="basis-full leading-relaxed">{t.caption}</span>
      </figcaption>
    </figure>
  )
}
