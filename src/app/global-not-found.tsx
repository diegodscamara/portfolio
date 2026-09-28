import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { headers } from "next/headers"
import { localeFor404 } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/data"
import { cn } from "@/lib/utils"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

async function locale() {
  const h = await headers()
  return localeFor404(h.get("x-pathname"), h.get("accept-language"))
}

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await locale())
  return { title: `404 | ${t.notFound.title} | ${site.name}`, description: t.notFound.body }
}

// This page skips the [lang] layout, so it applies the saved theme itself (same key as next-themes).
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||(t==="system"&&!matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.remove("dark")}catch(e){}`

export default async function GlobalNotFound() {
  const lang = await locale()
  const t = getDictionary(lang).notFound
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} dark antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grid min-h-dvh place-items-center bg-background px-4 text-foreground">
        <main className="max-w-xl py-24">
          <span aria-hidden className="grid size-[21px] grid-cols-3 gap-[3px]">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} className={cn("rounded-[1.5px]", i === 8 ? "bg-brand" : "bg-foreground/25")} />
            ))}
          </span>
          <p className="mt-10 font-mono text-sm text-brand-ink">404</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tighter text-balance md:text-6xl">{t.title}</h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">{t.body}</p>
          <a href={`/${lang}`} className={cn(buttonVariants({ size: "pill" }), "mt-9")}>
            {t.home}
          </a>
        </main>
      </body>
    </html>
  )
}
