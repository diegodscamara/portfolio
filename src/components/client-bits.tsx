"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Check, Copy, MoonStar, Sun } from "lucide-react"
import { copyText } from "@/lib/clipboard"

export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const next = resolvedTheme === "dark" ? "light" : "dark"
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={next === "light" ? toLight : toDark}
      className="grid size-9 place-items-center rounded-full border bg-card/60 text-muted-foreground transition hover:text-foreground active:scale-[0.96]"
    >
      <Sun className="hidden size-4 dark:block" />
      <MoonStar className="size-4 dark:hidden" />
    </button>
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
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition hover:bg-muted active:scale-[0.98]"
    >
      {state === "copied" ? <Check className="size-4 text-brand-ink" /> : <Copy className="size-4" />}
      <span aria-live="polite">
        {state === "copied" ? t.copied : state === "failed" ? t.copyFailed : t.copy}
      </span>
    </button>
  )
}
