"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import {
  ArrowUpRight,
  Briefcase,
  Copy,
  FileText,
  FolderGit2,
  Languages,
  Layers,
  Mail,
  MoonStar,
  ListChecks,
  Sun,
} from "lucide-react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useThemeSwitch } from "@/components/client-bits"
import { copyText } from "@/lib/clipboard"
import { localeNames, locales, type Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"
import { projects, sideProject, site } from "@/lib/data"

export type PaletteProps = { lang: Locale; t: Dictionary["command"]; nav: Dictionary["nav"]; stackLabel: string }

export default function CommandPalette({
  lang,
  t,
  nav,
  stackLabel,
  open,
  setOpen,
}: PaletteProps & { open: boolean; setOpen: (open: boolean) => void }) {
  const sections = [
    { id: "experience", label: nav.experience, icon: Briefcase },
    { id: "work", label: nav.work, icon: FolderGit2 },
    { id: "spec", label: nav.spec, icon: ListChecks },
    { id: "stack", label: stackLabel, icon: Layers },
    { id: "contact", label: nav.contact, icon: Mail },
  ]
  const [copied, setCopied] = React.useState(false)
  const { resolvedTheme } = useTheme()
  const { toggle: switchTheme } = useThemeSwitch()

  const run = (fn: () => void) => {
    setOpen(false)
    fn()
  }
  const go = (href: string, external = false) =>
    run(() => (external ? window.open(href, "_blank", "noopener,noreferrer") : (location.href = href)))

  return (
    <>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={t.title}
        description={t.description}
      >
        <Command>
          <CommandInput placeholder={t.placeholder} />
          <CommandList>
            <CommandEmpty>{t.empty}</CommandEmpty>
            <CommandGroup heading={t.goTo}>
              {sections.map(({ id, label, icon: Icon }) => (
                <CommandItem key={id} onSelect={() => go(`#${id}`)}>
                  <Icon />
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={t.projects}>
              {[sideProject, ...projects].map((p) => (
                <CommandItem key={p.name} keywords={"org" in p ? [p.org] : [t.sideProject]} onSelect={() => go(p.url, true)}>
                  <ArrowUpRight />
                  {p.name}
                  <CommandShortcut>{"org" in p ? p.org : t.sideProject}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={t.actions}>
              <CommandItem
                onSelect={async () => {
                  const ok = await copyText(site.email)
                  setCopied(ok)
                  setTimeout(() => setCopied(false), 1500)
                }}
              >
                <Copy />
                {copied ? t.copied : t.copyEmail}
              </CommandItem>
              <CommandItem onSelect={() => go(`mailto:${site.email}`)}>
                <Mail />
                {site.email}
              </CommandItem>
              <CommandItem onSelect={() => go(site.resume, true)}>
                <FileText />
                CV
                <CommandShortcut>PDF</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => run(() => switchTheme())}>
                {resolvedTheme === "dark" ? <Sun /> : <MoonStar />}
                {resolvedTheme === "dark" ? t.toLight : t.toDark}
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={t.languages}>
              {locales.map((l) => (
                <CommandItem key={l} keywords={[l]} disabled={l === lang} onSelect={() => go(`/${l}`)}>
                  <Languages />
                  {localeNames[l]}
                  <CommandShortcut>{l.toUpperCase()}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={t.elsewhere}>
              <CommandItem onSelect={() => go(site.linkedin, true)}>
                <ArrowUpRight />
                LinkedIn
              </CommandItem>
              <CommandItem onSelect={() => go(site.github, true)}>
                <ArrowUpRight />
                GitHub
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
