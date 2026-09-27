"use client"

import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { localeNames, locales, type Locale } from "@/i18n/config"

export function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full border bg-card/60 px-3 font-mono text-xs text-muted-foreground transition outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] data-popup-open:text-foreground">
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
