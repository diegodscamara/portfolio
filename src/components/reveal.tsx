"use client"

import * as React from "react"

// Fades [data-reveal] elements in as they scroll into view. Only elements still below the fold
// when this mounts are hidden, so the first screen never flickers and LCP is untouched. No JS or
// reduced motion: everything simply stays visible.
export function Reveal() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const pending = [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          ;(entry.target as HTMLElement).dataset.reveal = "shown"
          io.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
    for (const el of pending) {
      el.dataset.reveal = "pending"
      io.observe(el)
    }
    return () => {
      io.disconnect()
      for (const el of pending) el.dataset.reveal = ""
    }
  }, [])
  return null
}
