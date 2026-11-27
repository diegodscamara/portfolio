#!/usr/bin/env bash
# Build the site and publish it to the VPS by hand (CI does this on every green push to main; see
# .github/workflows/deploy.yml). Pass --edge to also push the Caddy site config and reload.
set -euo pipefail
cd "$(dirname "$0")/.."
HOST="${PORTFOLIO_HOST:-root@179.236.227.148}"
# Live site by default; PORTFOLIO_DIR=/opt/portfolio/preview publishes a build that nothing public serves yet.
DIR="${PORTFOLIO_DIR:-/opt/portfolio/site}"

bun run build
test -f dist/en.html || { echo "build produced no dist/en.html" >&2; exit 1; }
# --delay-updates/--delete-after: old chunks stay until every new file is in place, so open tabs keep working.
ssh "$HOST" "mkdir -p $DIR"
rsync -az --delay-updates --delete-after --chmod=Da+rx,Fa+r dist/ "$HOST:$DIR/"
# CI deploys as portfolio-deploy (rrsync-restricted key), so it must keep owning every file a root rsync writes.
ssh "$HOST" "chown -R portfolio-deploy:portfolio-deploy $DIR"

if [[ "${1:-}" == "--edge" ]]; then
  rsync -az deploy/portfolio.caddy deploy/portfolio.rules deploy/portfolio.headers "$HOST:/opt/edge/sites/"
  ssh "$HOST" 'cd /opt/edge && docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile'
fi

if [[ "$DIR" == /opt/portfolio/site ]]; then
  curl -fsS -o /dev/null -w "https://www.diegocamara.com/en %{http_code}\n" https://www.diegocamara.com/en
fi
