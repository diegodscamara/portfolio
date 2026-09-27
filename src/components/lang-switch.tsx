"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Globe } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import type { Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

export type LangProps = { lang: Locale; label: string }

export const langTriggerClass = cn(
  buttonVariants({ variant: "outline" }),
  "h-9 gap-1.5 rounded-full px-3 font-mono text-xs font-normal text-muted-foreground",
)

function StaticTrigger({ lang, label, ...props }: LangProps & React.ComponentProps<"button">) {
  return (
    <button type="button" aria-haspopup="menu" className={langTriggerClass} {...props}>
      <Globe className="size-3.5" aria-hidden />
      <span className="sr-only">{label}: </span>
      {lang.toUpperCase()}
    </button>
  )
}

const LangMenu = dynamic(() => import("./lang-menu"), {
  ssr: false,
  loading: () => null,
})

// Renders a look-alike button until the visitor reaches for it, then swaps in the real shadcn menu.
export function LangSwitch(props: LangProps) {
  const [state, setState] = React.useState<"idle" | "warm" | "open">("idle")
  const [ready, setReady] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  React.useEffect(() => {
    if (state !== "idle") void import("./lang-menu").then(() => setReady(true))
  }, [state])

  if (ready) return <LangMenu {...props} defaultOpen={state === "open"} focus={focused} />
  return (
    <StaticTrigger
      {...props}
      onPointerEnter={() => setState((s) => (s === "idle" ? "warm" : s))}
      onFocus={() => {
        setFocused(true)
        setState((s) => (s === "idle" ? "warm" : s))
      }}
      onBlur={() => setFocused(false)}
      onClick={() => setState("open")}
    />
  )
}
