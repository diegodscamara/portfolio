"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Search } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Kbd } from "@/components/ui/kbd"
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
        className={cn(
          buttonVariants({ variant: "outline" }),
          "size-9 gap-2 rounded-full font-normal text-muted-foreground sm:w-auto sm:pr-1.5 sm:pl-3",
        )}
        aria-keyshortcuts="Meta+K Control+K"
        title={props.t.open}
      >
        <Search className="size-4" aria-hidden />
        <span className="sr-only sm:not-sr-only">{props.t.search}</span>
        <Kbd className="hidden rounded-full px-2 font-mono sm:inline-flex">⌘K</Kbd>
      </button>
      {loaded && <CommandPalette {...props} open={open} setOpen={setOpen} />}
    </>
  )
}
