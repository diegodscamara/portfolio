"use client"

import * as React from "react"
import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { localeNames, locales } from "@/i18n/config"
import { langTriggerClass, type LangProps } from "./lang-switch"

// Loaded on first interaction (see lang-switch.tsx), so the menu's positioning code stays out of the initial bundle.
export default function LangMenu({ lang, label, defaultOpen = false, focus = false }: LangProps & { defaultOpen?: boolean; focus?: boolean }) {
  const trigger = React.useRef<HTMLButtonElement>(null)
  // This replaces the static stand-in button; if that one had keyboard focus, keep it here.
  React.useEffect(() => {
    if (focus) trigger.current?.focus()
  }, [focus])
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger ref={trigger} className={langTriggerClass}>
        <Globe className="size-3.5" aria-hidden />
        <span className="sr-only">{label}: </span>
        {lang.toUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-40 rounded-lg border p-1 shadow-xl ring-0">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            // Real links, so each choice is a normal navigation (and middle-click still works).
            render={<a href={`/${l}`} hrefLang={l} lang={l} aria-current={l === lang ? "page" : undefined} />}
            className="flex cursor-pointer justify-between rounded-md px-3 py-2 text-sm"
          >
            {localeNames[l]}
            {l === lang && <Check className="size-3.5 text-brand-ink" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
