import { defineConfig, devices } from "@playwright/test"

const port = Number(process.env.PORT ?? 3000)

export default defineConfig({
  testDir: "e2e",
  testMatch: "**/*.e2e.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "retain-on-failure",
  },
  // CI uses the runner's preinstalled Google Chrome, so there's no browser download or apt step.
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], channel: process.env.CI ? "chrome" : undefined } }],
  // Runs against the production build (`bun run build` first), like the deployed site.
  webServer: {
    // Inline PORT: webServer.env would replace the whole environment (PATH included).
    command: `PORT=${port} bun run start`,
    url: `http://localhost:${port}/en`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
