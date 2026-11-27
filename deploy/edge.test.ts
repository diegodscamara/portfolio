import { describe, expect, test } from "bun:test"

// Runs against a Caddy serving deploy/portfolio.rules: EDGE_URL=http://127.0.0.1:8088 bun test deploy
const base = process.env.EDGE_URL
const suite = base ? describe : describe.skip

const get = (path: string, headers: Record<string, string> = {}) =>
  fetch(`${base}${path}`, { redirect: "manual", headers })

suite("portfolio edge", () => {
  test.each([
    ["en-US,en;q=0.9", "/en"],
    ["pt-BR,pt;q=0.9,en;q=0.8", "/pt"],
    ["de-DE,de;q=0.9,fr;q=0.8", "/fr"],
    ["es-419", "/es"],
    ["de", "/en"],
  ])("/ negotiates %p -> %p with 307", async (lang, to) => {
    const r = await get("/", { "accept-language": lang })
    expect(r.status).toBe(307)
    expect(new URL(r.headers.get("location")!, base).pathname).toBe(to)
    expect(r.headers.get("vary")).toContain("Accept-Language")
  })

  test("/ without Accept-Language goes to /en", async () => {
    expect((await get("/")).headers.get("location")).toEndWith("/en")
  })

  test("/ keeps the query string", async () => {
    expect((await get("/?utm_source=x&internal", { "accept-language": "pt" })).headers.get("location")).toEndWith(
      "/pt?utm_source=x&internal",
    )
  })

  test.each(["/blog", "/posts/some-post", "/about/"])("legacy %p moves permanently to the profile", async (path) => {
    const r = await get(path, { "accept-language": "fr" })
    expect(r.status).toBe(308)
    expect(r.headers.get("location")).toEndWith("/fr")
  })

  test("trailing slash is stripped with 308", async () => {
    const r = await get("/pt/?a=1")
    expect(r.status).toBe(308)
    expect(r.headers.get("location")).toEndWith("/pt?a=1")
  })

  test.each(["/resume", "/cv", "/documents/resume.docx"])("%p redirects to the resume PDF", async (path) => {
    const r = await get(path)
    expect(r.status).toBe(308)
    expect(r.headers.get("location")).toEndWith("/diego-camara-resume.pdf")
  })

  test.each(["en", "pt", "fr", "es"])("/%s serves the page with security headers", async (lang) => {
    const r = await get(`/${lang}`)
    expect(r.status).toBe(200)
    expect(r.headers.get("content-type")).toStartWith("text/html")
    expect(await r.text()).toContain(`<html lang="${lang}"`)
    expect(r.headers.get("strict-transport-security")).toBe("max-age=63072000; includeSubDomains; preload")
    expect(r.headers.get("content-security-policy")).toContain("frame-ancestors 'none'")
    expect(r.headers.get("x-frame-options")).toBe("DENY")
    expect(r.headers.get("x-content-type-options")).toBe("nosniff")
    expect(r.headers.get("cross-origin-opener-policy")).toBe("same-origin")
  })

  test.each(["en", "pt"])("every image on /%s loads", async (lang) => {
    const html = await (await get(`/${lang}`)).text()
    const srcs = [...html.matchAll(/<img[^>]*?\ssrc="([^"]+)"/g)].map((m) => m[1].replaceAll("&amp;", "&"))
    expect(srcs.length).toBeGreaterThan(5)
    const statuses = await Promise.all(srcs.map(async (src) => [src, (await get(src)).status] as const))
    expect(statuses.filter(([, status]) => status !== 200)).toEqual([])
  })

  test.each(["/llms.txt", "/llms-full.txt", "/AGENTS.md", "/md/en"])("%p is markdown", async (path) => {
    const r = await get(path)
    expect(r.status).toBe(200)
    expect(r.headers.get("content-type")).toBe("text/markdown; charset=utf-8")
  })

  test("/pt.md is the markdown twin with a canonical link", async () => {
    const r = await get("/pt.md")
    expect(r.status).toBe(200)
    expect(r.headers.get("content-type")).toBe("text/markdown; charset=utf-8")
    expect(r.headers.get("link")).toBe('<https://www.diegocamara.com/pt>; rel="canonical"')
    expect(await r.text()).toStartWith("# Diego Câmara")
  })

  test.each(["/en/icon", "/pt/apple-icon", "/es/opengraph-image"])("%p is a PNG", async (path) => {
    const r = await get(path)
    expect(r.status).toBe(200)
    expect(r.headers.get("content-type")).toBe("image/png")
  })

  test("hashed assets are cached for a year", async () => {
    const html = await (await get("/en")).text()
    const asset = html.match(/\/(?:_next\/static|_astro)\/[^"]+\.js/)![0]
    const r = await get(asset)
    expect(r.status).toBe(200)
    expect(r.headers.get("cache-control")).toBe("public, max-age=31536000, immutable")
  })

  test.each([
    ["/pt/nao-existe", "", "pt"],
    ["/nope", "fr-FR,fr;q=0.9", "fr"],
  ])("404 for %p speaks the URL's or browser's language", async (path, accept, lang) => {
    const r = await get(path, accept ? { "accept-language": accept } : {})
    expect(r.status).toBe(404)
    expect(await r.text()).toContain(`<html lang="${lang}"`)
  })

  test("/md/en carries the canonical link too", async () => {
    expect((await get("/md/en")).headers.get("link")).toBe('<https://www.diegocamara.com/en>; rel="canonical"')
  })

  test("unknown paths get the 404 page", async () => {
    const r = await get("/nope/really")
    expect(r.status).toBe(404)
    expect(await r.text()).toContain("404")
    expect(r.headers.get("x-frame-options")).toBe("DENY")
    expect(r.headers.get("content-security-policy")).toContain("frame-ancestors 'none'")
  })

  test("PostHog is proxied through /ingest", async () => {
    const r = await get("/ingest/static/array.js")
    expect(r.status).toBe(200)
    expect(r.headers.get("content-type")).toContain("javascript")
  })
})
