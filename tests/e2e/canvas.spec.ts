import { expect, test } from "@playwright/test";

// Add a trigger, connect an action to it, save — the path every user takes.
test("builds a workflow on the canvas and saves it", async ({ page }) => {
    await page.goto("/admin/login");
    await page.getByRole("textbox", { name: /Email address/ }).fill("admin@example.com");
    await page.getByRole("textbox", { name: /Password/ }).fill("password");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL(/\/admin$/);

    await page.goto("/admin/workflows/create");
    await page.getByRole("textbox", { name: /^Name/ }).fill("Smoke test");

    const canvas = page.locator(".fi-flow-canvas");
    await expect(canvas.locator(".svelte-flow")).toBeVisible();

    // The empty state opens the sidebar on the triggers list.
    await canvas.getByRole("button", { name: "Add a trigger" }).click();
    await canvas.locator(".fi-flow-sidebar").getByRole("button", { name: /^Manual/ }).click();
    await expect(canvas.locator(".svelte-flow__node")).toHaveCount(1);

    // The plus next to the trigger's output adds a connected node.
    await canvas.locator(".svelte-flow__node").getByRole("button", { name: "Add node" }).click();
    await canvas.locator(".fi-flow-sidebar").getByPlaceholder("Search nodes…").fill("log");
    await canvas.locator(".fi-flow-sidebar").getByRole("button", { name: /^Write to log/ }).click();
    await expect(canvas.locator(".svelte-flow__node")).toHaveCount(2);
    await expect(canvas.locator(".svelte-flow__edge")).toHaveCount(1);

    await page.getByRole("button", { name: "Create", exact: true }).click();
    await expect(page).toHaveURL(/\/admin\/workflows\/[^/]+\/edit$/);
    await expect(page.locator(".fi-flow-canvas .svelte-flow__node")).toHaveCount(2);
    await expect(page.locator(".fi-flow-canvas .svelte-flow__edge")).toHaveCount(1);
});
