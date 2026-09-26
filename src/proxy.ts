import { NextResponse, type NextRequest } from "next/server"
import { hasLocale, pickLocale } from "@/i18n/config"

// Sends locale-less paths (like "/") to the visitor's preferred language.
export function proxy(request: NextRequest) {
  const first = request.nextUrl.pathname.split("/")[1]
  if (hasLocale(first)) return
  const url = request.nextUrl.clone()
  url.pathname = `/${pickLocale(request.headers.get("accept-language"))}${request.nextUrl.pathname}`.replace(/\/$/, "")
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, metadata images and anything with a file extension (public assets).
  matcher: ["/((?!_next|icon|opengraph-image|.*\\.).*)"],
}
