import { expect, test as setup } from "@playwright/test";

// One sign-in per run, shared by every spec as storage state: Filament's
// login page allows five attempts a minute, fewer than the specs.
setup("signs in", async ({ page }) => {
    await page.goto("/admin/login");
    await page.getByRole("textbox", { name: /Email address/ }).fill("admin@example.com");
    await page.getByRole("textbox", { name: /Password/ }).fill("password");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL(/\/admin$/);
    await page.context().storageState({ path: "tests/e2e/.auth/admin.json" });
});
