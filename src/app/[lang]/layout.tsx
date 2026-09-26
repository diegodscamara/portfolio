import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { ThemeProvider } from "next-themes"
import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { credentials, site, stack } from "@/lib/data"
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
  const t = getDictionary(lang)
  const personId = `${site.url}/#person`
  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${site.url}/${lang}`,
    inLanguage: lang,
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: "Diego Dos Santos Câmara",
      jobTitle: t.experience.jobTitle,
      description: t.profile.summary,
      url: site.url,
      image: `${site.url}/profile.jpeg`,
      email: `mailto:${site.email}`,
      knowsLanguage: ["pt-BR", "en", "fr", "es"],
      knowsAbout: stack.flat(),
      worksFor: { "@type": "Organization", name: "Luxor Technology", url: "https://luxor.tech" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Cruzeiro do Sul" },
      homeLocation: { "@type": "Place", name: "São Paulo, Brazil" },
      hasCredential: credentials.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
        recognizedBy: { "@type": "Organization", name: c.issuer },
        dateCreated: c.year,
      })),
      sameAs: [site.linkedin, site.github],
    },
  }
  return (
    <html lang={lang} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  )
}
