// Same storage key and values as next-themes used, so returning visitors keep their choice.
export const THEME_KEY = "theme"

export function resolveDark(stored: string | null, prefersDark: boolean) {
  if (stored === "light") return false
  if (stored === "system") return prefersDark
  return true
}

// Runs in <head> before paint. The server renders class="dark", so this only ever removes it.
export const themeScript = `try{if(!(${resolveDark.toString()})(localStorage.getItem("${THEME_KEY}"),matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.remove("dark")}catch(e){}`

export const isDark = () => document.documentElement.classList.contains("dark")

// Theme switch as a circular reveal from the click point (View Transitions API).
// Falls back to an instant switch where unsupported or when the visitor prefers reduced motion.
export function switchTheme(origin?: { x: number; y: number }) {
  const next = isDark() ? "light" : "dark"
  const apply = () => {
    document.documentElement.classList.toggle("dark", next === "dark")
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {}
    document.dispatchEvent(new CustomEvent("themechange", { detail: next }))
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (!document.startViewTransition || reduce) return apply()

  const x = origin?.x ?? window.innerWidth - 40
  const y = origin?.y ?? 32
  const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
  document
    .startViewTransition(apply)
    .ready.then(() =>
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 550, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      ),
    )
    .catch(() => {})
}
