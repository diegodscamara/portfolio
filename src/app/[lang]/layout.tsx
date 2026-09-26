import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { ThemeProvider } from "next-themes"
import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { site } from "@/lib/data"
import "../globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const dynamicParams = false
export const generateStaticParams = () => locales.map((lang) => ({ lang }))

const ogLocale = { en: "en_US", pt: "pt_BR", fr: "fr_FR", es: "es_ES" } as const

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { title, description } = getDictionary(lang).meta
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": "/en" },
    },
    openGraph: { title, description, url: `/${lang}`, siteName: site.name, type: "profile", locale: ogLocale[lang] },
    twitter: { card: "summary_large_image", title, description },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#131316" },
  ],
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: getDictionary(lang).experience.jobTitle,
    url: site.url,
    email: `mailto:${site.email}`,
    knowsLanguage: ["pt", "en", "fr", "es"],
    worksFor: { "@type": "Organization", name: "Luxor", url: "https://luxor.tech" },
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
    sameAs: [site.linkedin, site.github],
  }
  return (
    <html lang={lang} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  )
}
