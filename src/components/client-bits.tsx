"use client"

import * as React from "react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"
import { Check, Copy, MoonStar, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { copyText } from "@/lib/clipboard"

// Theme switch as a circular reveal from the click point (View Transitions API).
// Falls back to an instant switch where unsupported or when the visitor prefers reduced motion.
export function useThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const next = resolvedTheme === "dark" ? "light" : "dark"
  const toggle = React.useCallback(
    (origin?: { x: number; y: number }) => {
      const apply = () => {
        document.documentElement.classList.toggle("dark", next === "dark")
        flushSync(() => setTheme(next))
      }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (!document.startViewTransition || reduce) return apply()

      const x = origin?.x ?? window.innerWidth - 40
      const y = origin?.y ?? 32
      const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
      document
        .startViewTransition(apply)
        .ready.then(() =>
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
            { duration: 550, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
          ),
        )
        .catch(() => {})
    },
    [next, setTheme],
  )
  return { next, toggle }
}

export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const { next, toggle } = useThemeSwitch()
  return (
    <Button
      variant="outline"
      size="icon-pill"
      onClick={(e) => {
        const b = e.currentTarget.getBoundingClientRect()
        toggle({ x: b.left + b.width / 2, y: b.top + b.height / 2 })
      }}
      aria-label={next === "light" ? toLight : toDark}
      className="relative overflow-hidden text-muted-foreground"
    >
      <Sun className="absolute size-4 scale-0 -rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:scale-100 dark:rotate-0" />
      <MoonStar className="absolute size-4 scale-100 rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:scale-0 dark:rotate-90" />
    </Button>
  )
}

type CopyLabels = { copy: string; copied: string; copyFailed: string }

export function CopyEmail({ email, t }: { email: string; t: CopyLabels }) {
  const [state, setState] = React.useState<"idle" | "copied" | "failed">("idle")
  const onClick = async () => {
    setState((await copyText(email)) ? "copied" : "failed")
    setTimeout(() => setState("idle"), 1800)
  }
  return (
    <Button variant="outline" size="pill" onClick={onClick}>
      {state === "copied" ? <Check className="size-4 text-brand-ink" /> : <Copy className="size-4" />}
      <span aria-live="polite">
        {state === "copied" ? t.copied : state === "failed" ? t.copyFailed : t.copy}
      </span>
    </Button>
  )
}
