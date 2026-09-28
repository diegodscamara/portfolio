import { expect, test } from "@playwright/test"

test.describe("routing", () => {
  for (const [header, target] of [
    ["pt-BR,pt;q=0.9,en;q=0.8", "/pt"],
    ["fr-CA,fr;q=0.9", "/fr"],
    ["es-ES", "/es"],
    ["de-DE", "/en"],
  ]) {
    test(`/ negotiates ${header} -> ${target}`, async ({ request }) => {
      const res = await request.get("/", { headers: { "accept-language": header }, maxRedirects: 0 })
      expect(res.status()).toBe(307)
      expect(res.headers()["location"]).toBe(target)
      expect(res.headers()["vary"]).toContain("Accept-Language")
    })
  }

  test("old blog URLs move permanently to the profile", async ({ request }) => {
    for (const path of ["/about", "/projects", "/posts/some-old-post", "/blog"]) {
      const res = await request.get(path, { maxRedirects: 0 })
      expect(res.status(), path).toBe(308)
      expect(res.headers()["location"], path).toBe("/en")
    }
  })

  test("old resume URLs point at the PDF", async ({ request }) => {
    for (const path of ["/resume", "/documents/resume.docx", "/cv"]) {
      const res = await request.get(path, { maxRedirects: 0 })
      expect(res.status(), path).toBe(308)
      expect(res.headers()["location"], path).toBe("/diego-camara-resume.pdf")
    }
  })

  test("unknown paths are real 404s", async ({ request }) => {
    for (const path of ["/foo", "/en/nope"]) {
      expect((await request.get(path, { maxRedirects: 0 })).status(), path).toBe(404)
    }
  })

  test("each locale renders in its language with hreflang alternates", async ({ page }) => {
    for (const [lang, title] of [
      ["en", "Full-Stack Software Engineer"],
      ["pt", "Engenheiro de Software"],
      ["fr", "Ingénieur logiciel"],
      ["es", "Ingeniero de Software"],
    ]) {
      await page.goto(`/${lang}`)
      await expect(page.locator("html")).toHaveAttribute("lang", lang)
      await expect(page).toHaveTitle(new RegExp(title))
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(5)
    }
  })

  test("crawl files are served", async ({ request }) => {
    for (const path of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/llms-full.txt", "/.well-known/security.txt"]) {
      expect((await request.get(path)).status(), path).toBe(200)
    }
  })
})

test.describe("language menu", () => {
  test("opens, closes on outside click and Escape, and switches language", async ({ page }) => {
    await page.goto("/en")
    const trigger = page.getByRole("button", { name: /Language/ })
    const menu = page.getByRole("menu")

    await trigger.click()
    await expect(menu).toBeVisible()
    await expect(page.getByRole("menuitem")).toHaveCount(4)

    await page.mouse.click(40, 600)
    await expect(menu).toBeHidden()

    await trigger.click()
    await expect(menu).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(menu).toBeHidden()

    await trigger.click()
    await page.getByRole("menuitem", { name: "Français" }).click()
    await expect(page).toHaveURL(/\/fr$/)
    await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  })
})

test.describe("theme", () => {
  test("toggles dark and light and remembers the choice", async ({ page }) => {
    await page.goto("/en")
    const html = page.locator("html")
    await expect(html).toHaveClass(/dark/)

    await page.getByRole("button", { name: "Switch to light theme" }).click()
    await expect(html).not.toHaveClass(/dark/)
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("light")

    await page.reload()
    await expect(html).not.toHaveClass(/dark/)
    await page.getByRole("button", { name: "Switch to dark theme" }).click()
    await expect(html).toHaveClass(/dark/)
  })
})

test.describe("experience accordion", () => {
  test("first role is open, others open on click, closed roles stay in the HTML", async ({ page, request }) => {
    const html = await (await request.get("/en")).text()
    expect(html).toContain("Built a RAG assistant with Azure OpenAI")

    await page.goto("/en#experience")
    const triggers = page.locator('[data-slot="accordion-trigger"]')
    await expect(triggers).toHaveCount(4)
    await expect(triggers.nth(0)).toHaveAttribute("aria-expanded", "true")
    await expect(triggers.nth(1)).toHaveAttribute("aria-expanded", "false")

    await triggers.nth(1).click()
    await expect(triggers.nth(1)).toHaveAttribute("aria-expanded", "true")
    await expect(page.getByText("Built a RAG assistant with Azure OpenAI")).toBeVisible()
  })
})

test.describe("command menu", () => {
  test("opens with Cmd/Ctrl+K and jumps to a section", async ({ page }) => {
    await page.goto("/en")
    await page.keyboard.press("ControlOrMeta+k")
    const input = page.getByPlaceholder("Type a command or search")
    await expect(input).toBeVisible()
    await input.fill("experience")
    await page.keyboard.press("Enter")
    await expect(page).toHaveURL(/#experience$/)
  })
})
