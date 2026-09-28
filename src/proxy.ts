import { NextResponse, type NextRequest } from "next/server"
import { redirectFor } from "@/i18n/config"

export function proxy(request: NextRequest) {
  const r = redirectFor(request.nextUrl.pathname, request.headers.get("accept-language"))
  if (!r) {
    // global-not-found receives no props; hand it the path so a 404 can speak the URL's language.
    const headers = new Headers(request.headers)
    headers.set("x-pathname", request.nextUrl.pathname)
    return NextResponse.next({ request: { headers } })
  }
  const to = new URL(r.to, request.url)
  to.search = request.nextUrl.search // keep UTM tags through / -> /en and legacy redirects
  const res = NextResponse.redirect(to, r.status)
  res.headers.set("Vary", "Accept-Language")
  return res
}

export const config = {
  // Skip Next internals, metadata images and anything with a file extension (public assets, robots, sitemap, llms).
  matcher: ["/((?!_next|ingest|.*\\.).*)"],
}
