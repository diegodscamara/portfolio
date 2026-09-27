import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowUpRight, CheckCircle2, FileText, Mail } from "lucide-react"
import { CommandMenu } from "@/components/command-menu"
import { CopyEmail, ThemeToggle } from "@/components/client-bits"
import { FleetRollout } from "@/components/fleet-rollout"
import { LangSwitch } from "@/components/lang-switch"
import { Reveal } from "@/components/reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { hasLocale, locales, type Locale } from "@/i18n/config"
import { getDictionary, type Dictionary } from "@/i18n/dictionaries"
import {
  credentials,
  educationYears,
  experience,
  languages,
  projects,
  sideProject,
  site,
  stack,
  type Project,
} from "@/lib/data"
import { formatDuration, formatMonth } from "@/lib/duration"
import { cn } from "@/lib/utils"

// Rebuild daily so the "Running" role duration stays current.
export const revalidate = 86400

// cn() merges conflicting classes (base border-transparent vs outline border), as shadcn's <Button> does.
const primaryPill = cn(buttonVariants({ size: "pill" }))
const outlinePill = cn(buttonVariants({ variant: "outline", size: "pill" }))
// Tech tags: shadcn Badge, tuned to the site's mono pill style.
const tagClass = "h-auto rounded-full px-2.5 py-1 font-mono font-normal text-muted-foreground"
const container = "mx-auto w-full max-w-6xl px-4 sm:px-6"
const h2 = "text-3xl font-semibold tracking-tighter md:text-4xl"
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const t = getDictionary(lang)
  const [commander, energy, ...earlier] = projects
  return (
    <>
      <Nav lang={lang} t={t} />
      <main>
        <Hero t={t} />
        <Metrics t={t} />
        <Experience lang={lang} t={t} />
        <section id="work" className={cn(container, "py-20 md:py-28")}>
          <h2 data-reveal className={h2}>{t.work.title}</h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t.work.sub}</p>
          <div className="mt-12 grid gap-x-6 gap-y-10 lg:grid-cols-12">
            <Featured p={commander} t={t} className="lg:col-span-7" />
            <Featured p={energy} t={t} i={1} className="lg:col-span-5" />
          </div>
          <SideProject t={t} />
          <Earlier items={earlier} t={t} />
        </section>
        <Spec t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <Reveal />
    </>
  )
}

// A 3x3 slice of the hero fleet: one tile running, the rest idle. Hover sends a rollout wave across it.
function Mark() {
  return (
    <span aria-hidden className="mark grid size-[21px] grid-cols-3 gap-[3px]">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} style={{ "--d": (i % 3) + Math.floor(i / 3) } as React.CSSProperties} />
      ))}
    </span>
  )
}

function Nav({ lang, t }: { lang: Locale; t: Dictionary }) {
  const links = [
    [t.nav.experience, "#experience"],
    [t.nav.work, "#work"],
    [t.nav.spec, "#spec"],
    [t.nav.contact, "#contact"],
  ]
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95">
      <div className={cn(container, "flex h-16 items-center gap-6")}>
        <a
          href="#top"
          aria-label={`${site.name}, ${t.nav.backToTop}`}
          className="group flex items-center gap-3 font-medium tracking-tight"
        >
          <Mark />
          <span className="hidden sm:inline">{site.name}</span>
        </a>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "rounded-full px-3 text-muted-foreground")}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <CommandMenu lang={lang} t={t.command} nav={t.nav} stackLabel={t.spec.stack} />
          <LangSwitch lang={lang} label={t.nav.language} />
          <ThemeToggle toLight={t.command.toLight} toDark={t.command.toDark} />
        </div>
      </div>
    </header>
  )
}

function Hero({ t }: { t: Dictionary }) {
  const [before, highlight, after] = t.hero.pitch
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_28rem_at_85%_-10%,color-mix(in_oklch,var(--brand)_12%,transparent),transparent_70%)]" />
      <div className={cn(container, "relative grid items-center gap-14 pt-12 pb-16 md:pt-20 lg:grid-cols-12 lg:pb-24")}>
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <Image
              src="/profile.jpeg"
              alt={t.hero.portrait}
              width={44}
              height={44}
              loading="eager"
              className="size-11 rounded-full object-cover outline outline-border"
            />
            <p className="text-sm leading-tight text-muted-foreground">
              {t.hero.roleAt}{" "}
              <a href="https://luxor.tech" {...ext} className="text-foreground underline decoration-brand underline-offset-4">
                Luxor
              </a>
              <br />
              {t.hero.remote}
            </p>
          </div>
          <h1
            className="mt-8 text-6xl font-semibold tracking-tighter sm:text-7xl lg:text-[5.5rem] lg:leading-[0.95]"
          >
            {site.name}
          </h1>
          <p className="hero-lead mt-6 max-w-[34ch] text-xl leading-snug text-muted-foreground md:text-2xl">
            {before}
            <span className="text-foreground">{highlight}</span>
            {after}
          </p>
          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">{t.hero.facts}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={primaryPill}>
              <Mail className="size-4" />
              {t.hero.email}
            </a>
            <a href={site.resume} {...ext} className={outlinePill}>
              <FileText className="size-4" />
              {t.hero.resume}
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <FleetRollout t={t.fleet} />
        </div>
      </div>
    </section>
  )
}

function Metrics({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.work.title} className="border-y">
      <dl className={cn(container, "grid grid-cols-2 lg:grid-cols-4")}>
        {t.highlights.map((h, i) => (
          <div
            key={h.value}
            data-reveal
            style={{ "--i": i } as React.CSSProperties}
            className={cn(
              "flex flex-col py-8 pr-4",
              i % 2 === 1 && "border-l pl-4 sm:pl-6",
              i >= 2 && "border-t lg:border-t-0",
              i === 2 && "lg:border-l",
              i > 0 && "lg:pl-6",
            )}
          >
            <dt className="text-2xl font-semibold tracking-tighter text-balance md:text-3xl">{h.value}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{h.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Experience({ lang, t }: { lang: Locale; t: Dictionary }) {
  const e = t.experience
  const month = (ym: string) => formatMonth(ym, lang)
  return (
    <section id="experience" className="bg-card/40">
      <div className={cn(container, "py-20 md:py-28")}>
        <h2 data-reveal className={h2}>{e.title}</h2>
        <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{e.sub}</p>
        {/* hiddenUntilFound keeps closed entries in the HTML (crawlable, and Ctrl+F opens them). */}
        <Accordion
          multiple
          hiddenUntilFound
          defaultValue={[experience[0].id]}
          render={<ol />}
          className="relative mt-12 gap-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-border md:before:left-[9.5rem]"
        >
          {experience.map((r, i) => {
            const running = r.end === null
            return (
              <AccordionItem
                key={r.id}
                value={r.id}
                render={<li />}
                data-reveal
                style={{ "--i": i } as React.CSSProperties}
                className="relative grid gap-3 pl-8 not-last:border-b-0 md:grid-cols-[8.5rem_1fr] md:gap-10 md:pl-0"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-6 left-0 grid size-[15px] place-items-center rounded-full border bg-background md:left-[calc(9.5rem-7px)]",
                    running && "border-brand",
                  )}
                >
                  <span
                    className={cn("size-[7px] rounded-full", running ? "pulse-ring relative bg-brand" : "bg-muted-foreground/60")}
                  />
                </span>
                <div className="font-mono text-xs text-muted-foreground tabular-nums md:pt-5 md:pr-4 md:text-right">
                  <time dateTime={r.start}>{month(r.start)}</time>
                  <br className="hidden md:block" />
                  <span className="md:hidden"> - </span>
                  {r.end ? <time dateTime={r.end}>{month(r.end)}</time> : e.present}
                </div>
                <div className="rounded-lg border bg-background md:ml-4">
                  <AccordionTrigger className="flex-wrap items-center gap-x-5 gap-y-2 rounded-lg p-5 hover:no-underline **:data-[slot=accordion-trigger-icon]:ml-0">
                    <span className="min-w-0 flex-1 basis-56">
                      <span className="block text-lg font-semibold tracking-tight">{r.company}</span>
                      <span className="block text-sm font-normal text-muted-foreground">
                        {e.jobTitle}, {e.team.replace("{hq}", r.hq)}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 font-mono text-xs font-normal",
                        running ? "text-brand-ink" : "text-muted-foreground",
                      )}
                    >
                      {running ? (
                        e.running
                      ) : (
                        <>
                          <CheckCircle2 className="size-3.5" />
                          {e.completed}
                        </>
                      )}
                      <Badge variant="secondary" className="font-mono font-normal">
                        {formatDuration(r.start, r.end, undefined, e.units)}
                      </Badge>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="grid gap-6 border-t p-5 md:grid-cols-[1fr_14rem]">
                      <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                        {e.roles[r.id].map((p) => (
                          <li key={p} className="flex gap-3">
                            <span className="mt-2.5 h-px w-3 shrink-0 bg-brand" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap content-start gap-1.5">
                        {r.stack.map((s) => (
                          <Badge key={s} variant="outline" className={tagClass}>
                            {s}
                          </Badge>
                        ))}
                        {r.url && (
                          <a
                            href={r.url}
                            {...ext}
                            className="mt-2 inline-flex w-full items-center gap-1 text-sm text-foreground underline decoration-brand underline-offset-4"
                          >
                            {r.url.replace(/^https:\/\/(www\.)?/, "")}
                            <ArrowUpRight className="size-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}

function Featured({ p, t, i = 0, className }: { p: Project; t: Dictionary; i?: number; className?: string }) {
  return (
    <a href={p.url} {...ext} data-reveal style={{ "--i": i } as React.CSSProperties} className={cn("group block", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-[oklch(0.12_0.005_286)]">
        <Image
          src={p.image}
          alt={t.work.dashboard.replace("{name}", p.name)}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-left-top transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
          <p className="mt-1 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">{t.work.summaries[p.id]}</p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-ink" />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tags.map((tag) => (
          <Badge key={tag} variant="outline" className={tagClass}>
            {tag}
          </Badge>
        ))}
      </div>
    </a>
  )
}

function SideProject({ t }: { t: Dictionary }) {
  const s = sideProject
  const a = t.work.adpilot
  return (
    <article data-reveal className="mt-20 grid overflow-hidden rounded-lg border bg-card lg:grid-cols-12">
      <div className="flex flex-col p-7 md:p-9 lg:col-span-5">
        <p className="text-sm text-brand-ink">{t.work.sideProject}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tighter">{s.name}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{a.summary}</p>
        <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          {a.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-brand" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {s.stack.map((tag) => (
            <Badge key={tag} variant="outline" className={tagClass}>
              {tag}
            </Badge>
          ))}
        </div>
        <a href={s.url} {...ext} className={cn(outlinePill, "mt-8 self-start")}>
          adpilotpro.com
          <ArrowUpRight className="size-4" />
        </a>
      </div>
      <div className="relative min-h-72 border-t bg-[oklch(0.12_0.005_286)] lg:col-span-7 lg:border-t-0 lg:border-l">
        <Image src={s.image} alt={a.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-left-top" />
      </div>
    </article>
  )
}

function Earlier({ items, t }: { items: Project[]; t: Dictionary }) {
  return (
    <div className="mt-20">
      <h3 className="text-xl font-semibold tracking-tight">{t.work.earlier}</h3>
      <ul className="mt-6 divide-y border-y">
        {items.map((p, i) => (
          <li key={p.id} data-reveal style={{ "--i": i } as React.CSSProperties}>
            <a href={p.url} {...ext} className="group relative flex items-center gap-4 py-4 md:gap-6">
              <span className="relative aspect-[16/10] w-20 shrink-0 overflow-hidden rounded-md border lg:hidden">
                <Image src={p.image} alt={`${p.name} homepage`} fill sizes="80px" className="object-cover object-top" />
              </span>
              <span className="min-w-0 flex-1 md:grid md:grid-cols-[14rem_1fr] md:items-baseline md:gap-6 lg:pr-80">
                <span className="block font-medium tracking-tight transition group-hover:text-brand-ink">{p.name}</span>
                <span className="block text-sm text-muted-foreground">
                  {p.org}
                  <span className="hidden md:inline">. {t.work.summaries[p.id]}</span>
                </span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {/* Hover preview for pointer devices; small inline thumbnails cover touch screens. */}
              <span aria-hidden className="pointer-events-none absolute top-1/2 right-16 z-10 hidden aspect-[16/10] w-72 -translate-y-1/2 scale-95 overflow-hidden rounded-lg border bg-card opacity-0 shadow-2xl transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 lg:block">
                <Image src={p.image} alt={`${p.name} homepage preview`} fill sizes="288px" className="object-cover object-top" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SpecRow({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} data-reveal className="grid gap-4 border-t py-10 md:grid-cols-12">
      <h3 className="text-sm text-muted-foreground md:col-span-3">{label}</h3>
      <div className="md:col-span-9">{children}</div>
    </div>
  )
}

function Spec({ t }: { t: Dictionary }) {
  const s = t.spec
  return (
    <section id="spec" className="bg-card/40">
      <div className={cn(container, "py-20 md:py-28")}>
        <h2 data-reveal className={cn(h2, "mb-10")}>{s.title}</h2>
        <SpecRow id="about" label={t.profile.about}>
          <p className="max-w-[65ch] text-lg leading-relaxed text-pretty">{t.profile.summary}</p>
        </SpecRow>
        <SpecRow id="stack" label={s.stack}>
          <div className="grid gap-8 sm:grid-cols-2">
            {stack.map((items, i) => (
              <div key={s.groups[i]}>
                <p className="font-medium">{s.groups[i]}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li key={it}>
                      <Badge variant="outline" className="h-auto rounded-full bg-background px-3 py-1.5 text-sm font-normal">
                        {it}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SpecRow>
        <SpecRow label={s.languages}>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {languages.map((l) => (
              <li key={l.code} className="flex flex-col">
                <p className="mt-1 text-sm text-muted-foreground">{s.languageNames[l.code]}</p>
                {/* Name first in the DOM so extracted text keeps "English C1"; the level reads first visually. */}
                <p className="order-first font-mono text-3xl tracking-tight">{l.level ?? s.native}</p>
              </li>
            ))}
          </ul>
        </SpecRow>
        <SpecRow label={s.credentials}>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c.name}>
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted-foreground">
                  {c.issuer}, {c.year}
                </p>
              </li>
            ))}
          </ul>
        </SpecRow>
        <SpecRow label={s.education}>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {s.degrees.map((degree, i) => (
              <li key={degree}>
                <p className="font-medium">{degree}</p>
                <p className="text-sm text-muted-foreground">
                  {s.school}, {educationYears[i]}
                </p>
              </li>
            ))}
          </ul>
        </SpecRow>
      </div>
    </section>
  )
}

function Contact({ t }: { t: Dictionary }) {
  const c = t.contact
  return (
    <section id="contact" className={cn(container, "py-24 md:py-36")}>
      <div data-reveal className="max-w-4xl">
        <h2 className="text-5xl font-semibold tracking-tighter text-balance md:text-7xl">
          {c.title} <span className="text-muted-foreground">{c.titleMuted}</span>
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block font-mono text-lg break-all underline decoration-brand decoration-2 underline-offset-8 transition hover:text-brand-ink md:text-2xl"
        >
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className={primaryPill}>
            <Mail className="size-4" />
            {c.email}
          </a>
          <CopyEmail email={site.email} t={c} />
        </div>
      </div>
    </section>
  )
}

function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t">
      <div className={cn(container, "flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-muted-foreground")}>
        <p>
          © {site.updated.slice(0, 4)} {site.name}
          <span className="mx-2">·</span>
          {t.footer.updated} <time dateTime={site.updated}>{site.updated}</time>
        </p>
        <nav aria-label={t.nav.language} className="flex gap-4">
          {locales.map((l) => (
            <a key={l} href={`/${l}`} hrefLang={l} lang={l} className="font-mono text-xs uppercase hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <nav aria-label="Elsewhere" className="flex gap-5">
          <a href={site.linkedin} {...ext} className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={site.github} {...ext} className="hover:text-foreground">
            GitHub
          </a>
          <a href={site.devto} {...ext} className="hover:text-foreground">
            dev.to
          </a>
          <a href={site.resume} {...ext} className="hover:text-foreground">
            CV
          </a>
        </nav>
      </div>
    </footer>
  )
}
