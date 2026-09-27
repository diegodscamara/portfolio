"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Search } from "lucide-react"
import type { PaletteProps } from "./command-palette"

// cmdk and the dialog only download once someone opens the palette.
const CommandPalette = dynamic(() => import("./command-palette"), { ssr: false })

export function CommandMenu(props: PaletteProps) {
  const [open, setOpen] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)

  const toggle = React.useCallback((next?: boolean) => {
    setLoaded(true)
    setOpen((o) => next ?? !o)
  }, [])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggle()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [toggle])

  return (
    <>
      <button
        type="button"
        onClick={() => toggle(true)}
        // Warm the chunk on hover/focus so the first open feels instant.
        onPointerEnter={() => void import("./command-palette")}
        onFocus={() => void import("./command-palette")}
        className="inline-flex size-9 items-center justify-center gap-2 rounded-full border bg-card/60 text-sm text-muted-foreground transition hover:text-foreground active:scale-[0.98] sm:w-auto sm:pr-1.5 sm:pl-3"
        aria-keyshortcuts="Meta+K Control+K"
        title={props.t.open}
      >
        <Search className="size-4" aria-hidden />
        <span className="sr-only sm:not-sr-only">{props.t.search}</span>
        <kbd className="hidden rounded-full border bg-background px-2 py-0.5 font-mono text-[11px] sm:inline">⌘K</kbd>
      </button>
      {loaded && <CommandPalette {...props} open={open} setOpen={setOpen} />}
    </>
  )
}
