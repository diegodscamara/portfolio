// Tells IndexNow engines (Bing, Yandex, Seznam, Naver...) the pages changed. Run after a production deploy.
import { locales } from "../src/i18n/config"
import { site } from "../src/lib/data"

const key = "5f98355bb6dcaa0ccf3d3df41fe300fa"
const host = new URL(site.url).host
const urlList = [...locales.map((l) => `${site.url}/${l}`), `${site.url}/llms.txt`, `${site.url}/llms-full.txt`]

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `${site.url}/${key}.txt`, urlList }),
})
console.log("IndexNow", res.status, res.statusText, urlList.length, "urls")
if (res.status >= 400) process.exit(1)
