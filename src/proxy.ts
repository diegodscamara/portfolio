import { NextResponse, type NextRequest } from "next/server"
import { redirectFor } from "@/i18n/config"

export function proxy(request: NextRequest) {
  const r = redirectFor(request.nextUrl.pathname, request.headers.get("accept-language"))
  if (!r) return
  const res = NextResponse.redirect(new URL(r.to, request.url), r.status)
  res.headers.set("Vary", "Accept-Language")
  return res
}

export const config = {
  // Skip Next internals, metadata images and anything with a file extension (public assets, robots, sitemap, llms).
  matcher: ["/((?!_next|.*\\.).*)"],
}
