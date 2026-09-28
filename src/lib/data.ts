// Language-neutral facts. Anything a visitor reads as prose lives in src/i18n/dictionaries.

export const site = {
  url: "https://www.diegocamara.com",
  name: "Diego Câmara",
  email: "diegodscamara@gmail.com",
  phone: "+55 11 98214-5891",
  resume: "/diego-camara-resume.pdf",
  linkedin: "https://www.linkedin.com/in/diegodscamara/",
  github: "https://github.com/diegodscamara",
  devto: "https://dev.to/diegodscamara",
  // Bump when the content changes; drives sitemap lastmod, schema dateModified and the footer.
  updated: "2026-09-26",
}

// Generated per language by `bun run resume` (scripts/resume-pdf.ts); English keeps the legacy URL.
export const resumeFor = (lang: string) => (lang === "en" ? "/diego-camara-resume.pdf" : `/diego-camara-resume-${lang}.pdf`)

export const roleIds = ["luxor", "genetec", "emr", "nsh"] as const
export type RoleId = (typeof roleIds)[number]

export type Role = {
  id: RoleId
  company: string
  hq: string
  url?: string
  start: string
  end: string | null
  stack: string[]
}

export const experience: Role[] = [
  {
    id: "luxor",
    company: "Luxor",
    hq: "Seattle",
    url: "https://luxor.tech",
    start: "2025-08",
    end: null,
    stack: ["Next.js", "Fastify", "Temporal", "tRPC", "ClickHouse", "Redis"],
  },
  {
    id: "genetec",
    company: "Genetec",
    hq: "Montreal",
    url: "https://www.genetec.com",
    start: "2022-10",
    end: "2025-07",
    stack: ["React", "Node.js", "Azure OpenAI", "Azure DevOps", "Jest"],
  },
  {
    id: "emr",
    company: "Eu Médico Residente",
    hq: "Recife",
    start: "2022-06",
    end: "2022-10",
    stack: ["React", "Express", "Prisma", "AWS S3", "Cypress"],
  },
  {
    id: "nsh",
    company: "NSH Technologies",
    hq: "São Paulo",
    start: "2021-07",
    end: "2022-06",
    stack: ["React", "Redux", "Node.js", "WCAG 2.1"],
  },
]

export const projectIds = [
  "commander",
  "energy",
  "genetecDeveloper",
  "techdoc",
  "medclub",
  "tambasa",
  "armazem",
  "sinsa",
  "rider",
] as const
export type ProjectId = (typeof projectIds)[number]

export type Project = {
  id: ProjectId
  name: string
  org: string
  image: string
  url: string
  tags: string[]
}

export const sideProject = {
  name: "AdPilotPro",
  url: "https://adpilotpro.com",
  image: "/projects/adpilot-app.jpg",
  stack: ["Next.js", "Fastify", "BullMQ", "Drizzle", "Claude", "Railway"],
}

export const projects: Project[] = [
  {
    id: "commander",
    name: "Luxor Commander",
    org: "Luxor",
    image: "/projects/luxor-commander.jpg",
    url: "https://luxor.tech/mining/commander",
    tags: ["Next.js", "Temporal", "ClickHouse"],
  },
  {
    id: "energy",
    name: "Luxor Energy",
    org: "Luxor",
    image: "/projects/luxor-energy.jpg",
    url: "https://luxor.tech/mining/energy",
    tags: ["React", "tRPC", "Real-time"],
  },
  {
    id: "genetecDeveloper",
    name: "Genetec Developer",
    org: "Genetec",
    image: "/projects/genetec-developer.webp",
    url: "https://developer.genetec.com/",
    tags: ["Docs platform", "Performance"],
  },
  {
    id: "techdoc",
    name: "TechDoc Hub",
    org: "Genetec",
    image: "/projects/techdoc.webp",
    url: "https://techdocs.genetec.com/",
    tags: ["Azure OpenAI", "i18n"],
  },
  {
    id: "medclub",
    name: "MedClub",
    org: "Eu Médico Residente",
    image: "/projects/med-club.webp",
    url: "https://www.prime.med.club/auth/signin",
    tags: ["Next.js", "LMS"],
  },
  {
    id: "tambasa",
    name: "Tambasa",
    org: "NSH Technologies",
    image: "/projects/tambasa.webp",
    url: "https://loja.tambasa.com.br/home",
    tags: ["React", "E-commerce"],
  },
  {
    id: "armazem",
    name: "Armazém Paraíba",
    org: "NSH Technologies",
    image: "/projects/armazem-paraiba.webp",
    url: "https://www.armazemparaiba.com.br/",
    tags: ["React", "E-commerce"],
  },
  {
    id: "sinsa",
    name: "Sinsa",
    org: "NSH Technologies",
    image: "/projects/sinsa.webp",
    url: "https://www.sinsa.com.ni/",
    tags: ["KnockoutJS", "E-commerce"],
  },
  {
    id: "rider",
    name: "Rider",
    org: "NSH Technologies",
    image: "/projects/rider.webp",
    url: "https://www.rider.com.br/",
    tags: ["React", "E-commerce"],
  },
]

// Group labels are translated; order must match dict.spec.groups.
export const stack = [
  ["TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"],
  ["Node.js", "Fastify", "Express", "PostgreSQL", "ClickHouse", "Redis", "MongoDB", "Prisma"],
  ["Temporal", "tRPC", "Connect RPC", "protobuf", "Ory Keto", "Azure OpenAI", "RAG"],
  ["Azure CI/CD", "AWS S3", "Jest", "Cypress", "React Testing Library"],
]

export const languages = [
  { code: "pt", level: null },
  { code: "en", level: "C1" },
  { code: "fr", level: "B2" },
  { code: "es", level: "A2" },
] as const

export const educationYears = ["2023", "2020"] as const

export const credentials = [
  { name: "Microsoft Azure OpenAI Hackathon", issuer: "Microsoft", year: "2024" },
  { name: "Security Ninja, Web App Testing", issuer: "Security Journey", year: "2025" },
  { name: "Security Ninja, TypeScript Frontend", issuer: "Security Journey", year: "2024" },
  { name: "TEFAQ French, CLB 8", issuer: "CCI Franco-Indienne", year: "2024" },
]
