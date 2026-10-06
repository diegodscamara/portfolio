import type { NextConfig } from "next"

// Static pages can't carry per-request nonces, so inline scripts/styles are allowed; there are no third-party origins.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ")

const nextConfig: NextConfig = {
  // One small stylesheet: inlining it removes the only render-blocking request.
  // globalNotFound: the root layout lives under [lang], so unmatched URLs need their own 404 page.
  experimental: { inlineCss: true, globalNotFound: true },
  // PostHog through our own origin: ad-blockers leave it alone and CSP stays 'self'.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
      // Markdown twin of each page for agents: /en.md, /pt.md, ...
      { source: "/:lang(en|pt|fr|es).md", destination: "/md/:lang" },
    ]
  },
  async redirects() {
    // Old resume URLs (Vite site's .docx, the blog's /resume) point at the current PDF.
    return ["/resume", "/documents/resume.docx", "/cv"].map((source) => ({
      source,
      destination: "/diego-camara-resume.pdf",
      permanent: true,
    }))
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ]
  },
}

export default nextConfig
