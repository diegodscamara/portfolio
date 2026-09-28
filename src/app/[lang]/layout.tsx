import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@/components/analytics"
import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { credentials, educationYears, experience, site, stack } from "@/lib/data"
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
    openGraph: {
      title,
      description,
      url: `/${lang}`,
      siteName: site.name,
      type: "profile",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
    },
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
  const id = (frag: string) => `${site.url}/#${frag}`
  const org = (name: string, url?: string) => ({ "@type": "Organization", name, ...(url && { url }) })
  const schoolPt = "Universidade Cruzeiro do Sul"
  const school = {
    "@type": "CollegeOrUniversity",
    name: t.spec.school,
    alternateName: t.spec.school === schoolPt ? "Cruzeiro do Sul University" : schoolPt,
  }
  const luxor = { "@type": "Organization", "@id": "https://luxor.tech/#organization", name: "Luxor", alternateName: "Luxor Technology", url: "https://luxor.tech" }
  const graphLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: `${site.url}/`,
        name: site.name,
        inLanguage: [...locales],
        publisher: { "@id": id("person") },
      },
      luxor,
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/${lang}#profilepage`,
        url: `${site.url}/${lang}`,
        name: t.meta.title,
        inLanguage: lang,
        isPartOf: { "@id": id("website") },
        dateModified: site.updated,
        mainEntity: { "@id": id("person") },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#top h1", "#top .hero-lead", "#about p"] },
      },
      {
        "@type": "Person",
        "@id": id("person"),
        name: site.name,
        alternateName: ["Diego Dos Santos Câmara", "Diego Camara"],
        givenName: "Diego",
        familyName: "Câmara",
        jobTitle: t.profile.jobTitle,
        description: t.profile.summary,
        url: `${site.url}/${lang}`,
        mainEntityOfPage: { "@id": `${site.url}/${lang}#profilepage` },
        image: { "@type": "ImageObject", url: `${site.url}/profile.jpeg`, width: 267, height: 267, caption: t.hero.portrait },
        email: site.email,
        homeLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
        },
        nationality: { "@type": "Country", name: "Brazil" },
        knowsLanguage: ["pt-BR", "en", "fr", "es"],
        knowsAbout: stack.flat(),
        worksFor: { "@id": luxor["@id"] },
        hasOccupation: {
          "@type": "Occupation",
          name: t.profile.jobTitle,
          occupationLocation: { "@type": "City", name: "São Paulo" },
          skills: stack.flat().join(", "),
        },
        // Past employers as dated roles, so they are not mistaken for schools.
        alumniOf: [
          school,
          ...experience
            .filter((r) => r.end)
            .map((r) => ({
              "@type": "OrganizationRole",
              roleName: t.experience.jobTitle,
              startDate: r.start,
              endDate: r.end,
              alumniOf: org(r.company, r.url),
            })),
        ],
        hasCredential: [
          ...t.spec.degrees.map((name, i) => ({
            "@type": "EducationalOccupationalCredential",
            name,
            credentialCategory: "degree",
            recognizedBy: school,
            dateCreated: educationYears[i],
          })),
          ...credentials.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            name: c.name,
            credentialCategory: "certificate",
            recognizedBy: org(c.issuer),
            dateCreated: c.year,
          })),
        ],
        sameAs: [site.linkedin, site.github, site.devto],
      },
    ],
  }
  return (
    <html lang={lang} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  )
}
