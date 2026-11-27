import { describe, expect, test } from "bun:test"
import { manifest, robotsTxt, sitemapXml } from "./seo"

describe("sitemapXml", () => {
  const xml = sitemapXml()
  test("lists every locale with hreflang alternates and x-default", () => {
    for (const l of ["en", "pt", "fr", "es"]) expect(xml).toContain(`<loc>https://www.diegocamara.com/${l}</loc>`)
    expect(xml.match(/<url>/g)).toHaveLength(4)
    expect(xml.match(/hreflang="x-default" href="https:\/\/www.diegocamara.com\/en"/g)).toHaveLength(4)
  })
  test("english has top priority", () => {
    expect(xml).toContain("<loc>https://www.diegocamara.com/en</loc>")
    expect(xml.split("<url>")[1]).toContain("<priority>1</priority>")
    expect(xml.split("<url>")[2]).toContain("<priority>0.8</priority>")
  })
  test("is well-formed enough to start with the XML declaration", () => expect(xml).toStartWith('<?xml version="1.0" encoding="UTF-8"?>'))
})

test("robots.txt allows everyone and points at the sitemap", () => {
  expect(robotsTxt()).toBe("User-Agent: *\nAllow: /\n\nSitemap: https://www.diegocamara.com/sitemap.xml\n")
})

test("manifest uses the english copy and icons", () => {
  const m = manifest()
  expect(m.start_url).toBe("/")
  expect(m.icons.map((i) => i.src)).toEqual(["/en/icon", "/en/apple-icon"])
})
