import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // One small stylesheet: inlining it removes the only render-blocking request.
  experimental: { inlineCss: true },
}

export default nextConfig
