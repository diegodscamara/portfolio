import { classify, loadAnalytics, track } from "@/lib/analytics"

const FIRST_INTERACTION = ["pointerdown", "keydown", "scroll", "touchstart"] as const

// Loads PostHog on the first interaction (never during page load, so Lighthouse is untouched)
// and turns link clicks anywhere on the page into named events.
const notFound = document.body.dataset.notFound === "true"
const start = () => {
  FIRST_INTERACTION.forEach((e) => removeEventListener(e, start))
  void loadAnalytics()
  if (notFound) track({ event: "not_found", props: { path: location.pathname, referrer: document.referrer } })
}
FIRST_INTERACTION.forEach((e) => addEventListener(e, start, { once: true, passive: true }))

document.addEventListener(
  "click",
  (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[href]") : null
    if (a) track(classify(a.getAttribute("href") ?? "", new URL(location.href)), { source: a.closest("footer") ? "footer" : "page" })
  },
  true,
)
