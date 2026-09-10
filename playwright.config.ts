import { defineConfig } from "@playwright/test";

// Browser smoke test of the canvas against the panel that
// `vendor/bin/testbench serve` boots (see testbench.yaml). CI starts the
// server itself; locally `bun run test:e2e` does.
export default defineConfig({
    testDir: "tests/e2e",
    timeout: 60_000,
    retries: process.env.CI ? 1 : 0,
    reporter: process.env.CI ? "github" : "list",
    use: {
        baseURL: process.env.E2E_BASE_URL ?? "http://127.0.0.1:8787",
        trace: "retain-on-failure",
        screenshot: "only-on-failure",
    },
    webServer: {
        command:
            "rm -f vendor/orchestra/testbench-core/laravel/database/database.sqlite && vendor/bin/testbench package:create-sqlite-db && vendor/bin/testbench serve --port=8787 --no-reload",
        url: "http://127.0.0.1:8787/admin/login",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
});
