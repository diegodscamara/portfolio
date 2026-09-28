import type { PostHog } from "posthog-js"
import { hasLocale } from "@/i18n/config"
import { projects, sideProject, site } from "./data"

export type Tracked = { event: string; props: Record<string, string> }

// Public project key (safe in the client, like any analytics snippet).
const KEY = "phc_CtagqtPVp8SYHid5ijEZmuQxyjdtDcXd6sceQPvwiViC"
const PROD_HOST = new URL(site.url).hostname

const norm = (u: string) => new URL(u).href
const contacts = new Map([
  [norm(site.linkedin), "linkedin"],
  [norm(site.github), "github"],
  [norm(site.devto), "devto"],
])
const projectIds = new Map<string, string>([
  ...projects.map((p) => [norm(p.url), p.id] as [string, string]),
  [norm(sideProject.url), "adpilotpro"],
])

export function classify(href: string, here: URL): Tracked | null {
  if (!href) return null
  let url: URL
  try {
    url = new URL(href, here)
  } catch {
    return null
  }
  if (url.protocol === "mailto:") return { event: "contact_clicked", props: { channel: "email" } }
  if (!url.protocol.startsWith("http")) return null
  if (url.origin === here.origin) {
    const pdf = url.pathname.match(/^\/diego-camara-resume(?:-(\w+))?\.pdf$/)
    if (pdf) return { event: "resume_downloaded", props: { lang: pdf[1] ?? "en" } }
    const to = url.pathname.slice(1)
    const from = here.pathname.split("/")[1]
    return hasLocale(to) && to !== from ? { event: "language_switched", props: { from, to } } : null
  }
  const channel = contacts.get(url.href)
  if (channel) return { event: "contact_clicked", props: { channel } }
  const id = projectIds.get(url.href)
  if (id) return { event: "project_opened", props: { id } }
  return { event: "outbound_clicked", props: { host: url.hostname } }
}

let client: Promise<PostHog | null> | undefined

// Production only, so local runs, previews and Lighthouse CI never send (or download) anything.
export function loadAnalytics() {
  if (client) return client
  if (location.hostname !== PROD_HOST) return (client = Promise.resolve(null))
  client = import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(KEY, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
        // No cookies or storage: no consent banner needed. Requires "Cookieless server hash mode" in project settings.
        cookieless_mode: "always",
        autocapture: false,
        capture_pageview: "history_change",
        capture_pageleave: true,
        disable_session_recording: true,
        disable_surveys: true,
        enable_heatmaps: false,
        capture_dead_clicks: false,
      })
      return posthog
    })
    .catch((error) => {
      console.warn("[analytics] PostHog failed to load", error)
      return null
    })
  return client
}

export function track(t: Tracked | null, extra: Record<string, string> = {}) {
  if (!t) return
  // sendBeacon survives the page unloading right after a click (language switch, mailto).
  void loadAnalytics().then((ph) => ph?.capture(t.event, { ...t.props, ...extra }, { transport: "sendBeacon" }))
}
