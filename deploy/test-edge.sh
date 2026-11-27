#!/usr/bin/env bash
# Runs deploy/edge.test.ts against a throwaway Caddy on the VPS (127.0.0.1 only) that serves SITE_DIR with the
# working-tree rules. Usage: deploy/test-edge.sh [/opt/portfolio/preview]
set -euo pipefail
cd "$(dirname "$0")/.."
HOST="${PORTFOLIO_HOST:-root@179.236.227.148}"
SITE_DIR="${1:-/opt/portfolio/preview}"
PORT=8088
TMP=/opt/portfolio/edge-test

ssh "$HOST" "mkdir -p $TMP"
rsync -az deploy/Caddyfile.test deploy/portfolio.rules deploy/portfolio.headers "$HOST:$TMP/"
ssh "$HOST" "docker rm -f portfolio-edge-test >/dev/null 2>&1; docker run -d --name portfolio-edge-test -p 127.0.0.1:$PORT:8080 \
  -v $TMP/Caddyfile.test:/etc/caddy/Caddyfile:ro -v $TMP:/etc/caddy/sites:ro -v $SITE_DIR:/srv/portfolio:ro caddy:2 >/dev/null"
ssh -N -L "$PORT:127.0.0.1:$PORT" "$HOST" &
tunnel=$!
cleanup() {
  kill "$tunnel" 2>/dev/null || true
  ssh "$HOST" "docker rm -f portfolio-edge-test >/dev/null 2>&1; rm -rf $TMP"
}
trap cleanup EXIT
sleep 3
EDGE_URL="http://127.0.0.1:$PORT" bun test deploy
