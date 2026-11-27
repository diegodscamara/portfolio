import "./reveal"
import { copyText } from "@/lib/clipboard"
import { isDark, switchTheme } from "@/lib/theme"

const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]")
if (toggle) {
  const label = () => (toggle.ariaLabel = isDark() ? toggle.dataset.toLight! : toggle.dataset.toDark!)
  label()
  document.addEventListener("themechange", label)
  toggle.addEventListener("click", () => {
    const b = toggle.getBoundingClientRect()
    switchTheme({ x: b.left + b.width / 2, y: b.top + b.height / 2 })
  })
}

for (const button of document.querySelectorAll<HTMLButtonElement>("[data-copy]")) {
  const text = button.querySelector<HTMLElement>("[data-copy-label]")!
  let timer: ReturnType<typeof setTimeout> | undefined
  button.addEventListener("click", async () => {
    const ok = await copyText(button.dataset.copy!)
    button.dataset.state = ok ? "copied" : "failed"
    text.textContent = ok ? button.dataset.copied! : button.dataset.copyFailed!
    clearTimeout(timer)
    timer = setTimeout(() => {
      button.dataset.state = "idle"
      text.textContent = button.dataset.label!
    }, 1800)
  })
}
