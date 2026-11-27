#!/usr/bin/env bash
# Serves dist/ through the production Caddy rules on localhost:${PORT:-3000}, for e2e and Lighthouse (needs Docker).
set -euo pipefail
cd "$(dirname "$0")/.."
exec docker run --rm --name portfolio-serve -p "127.0.0.1:${PORT:-3000}:8080" \
  -v "$PWD/deploy/Caddyfile.test:/etc/caddy/Caddyfile:ro" \
  -v "$PWD/deploy:/etc/caddy/sites:ro" \
  -v "$PWD/dist:/srv/portfolio:ro" \
  caddy:2
