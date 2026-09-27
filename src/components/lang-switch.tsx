"use client"

import { Check, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { buttonVariants } from "@/components/ui/button"
import { localeNames, locales, type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

export function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: "outline" }), "h-9 gap-1.5 rounded-full px-3 font-mono text-xs font-normal text-muted-foreground")}
      >
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
