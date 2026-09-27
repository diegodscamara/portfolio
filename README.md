# www.diegocamara.com

Personal site of Diego Câmara, software engineer.

Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui, bun.

```bash
bun install
bun dev        # http://localhost:3000
bun run test   # unit tests
bun run e2e    # Playwright end-to-end (after bun run build)
bun run build
```

Facts (dates, links, stack) live in `src/lib/data.ts`; every visible sentence lives in `src/i18n/dictionaries/{en,pt,fr,es}.ts`, typed against English so a missing key fails the build. `/` redirects to `/en`, `/pt`, `/fr` or `/es` from the browser language (`src/proxy.ts`). The resume served at `/diego-camara-resume.pdf` is in `public/`.
