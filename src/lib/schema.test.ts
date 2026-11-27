import { describe, expect, test } from "bun:test"
import { profileGraph } from "./schema"

describe("profileGraph", () => {
  test("describes the localized profile page, the person and the FAQ", () => {
    const g = profileGraph("pt")
    const types = g["@graph"].map((n) => (n as { "@type": string })["@type"])
    expect(types).toEqual(["WebSite", "Organization", "ProfilePage", "Person", "FAQPage"])
    const page = g["@graph"][2] as { url: string; inLanguage: string }
    expect(page.url).toBe("https://www.diegocamara.com/pt")
    expect(page.inLanguage).toBe("pt")
  })
})
