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

async function signIn(page: import("@playwright/test").Page) {
    await page.goto("/admin/login");
    await page.getByRole("textbox", { name: /Email address/ }).fill("admin@example.com");
    await page.getByRole("textbox", { name: /Password/ }).fill("password");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL(/\/admin$/);
}

test("undoes, redoes, copies and pastes on the canvas", async ({ page }) => {
    await signIn(page);
    await page.goto("/admin/workflows/create");

    const canvas = page.locator(".fi-flow-canvas");
    await canvas.getByRole("button", { name: "Add a trigger" }).click();
    await canvas.locator(".fi-flow-sidebar").getByRole("button", { name: /^Manual/ }).click();
    const nodes = canvas.locator(".svelte-flow__node");
    await expect(nodes).toHaveCount(1);

    await canvas.getByRole("button", { name: "Undo", exact: true }).click();
    await expect(nodes).toHaveCount(0);
    await canvas.getByRole("button", { name: "Redo", exact: true }).click();
    await expect(nodes).toHaveCount(1);

    // The new node is selected; the keyboard shortcuts act on the selection.
    await nodes.first().click();
    await page.keyboard.press("ControlOrMeta+c");
    await page.keyboard.press("ControlOrMeta+v");
    await expect(nodes).toHaveCount(2);
    await page.keyboard.press("ControlOrMeta+d");
    await expect(nodes).toHaveCount(3);

    // Right-click → the menu is keyboard-driven and deletes the node.
    // The copies sit on top of the original; act on the topmost one.
    await nodes.last().click({ button: "right" });
    const menu = canvas.getByRole("menu");
    await expect(menu).toBeVisible();
    await page.keyboard.press("End");
    await page.keyboard.press("Enter");
    await expect(nodes).toHaveCount(2);
});

test("marks the nodes an active workflow cannot be saved with", async ({ page }) => {
    await signIn(page);
    await page.goto("/admin/workflows/create");
    await page.getByRole("textbox", { name: /^Name/ }).fill("Incomplete");
    await page.getByRole("switch", { name: /Active/ }).check();

    const canvas = page.locator(".fi-flow-canvas");
    await canvas.getByRole("button", { name: "Add node" }).first().click();
    await canvas.locator(".fi-flow-sidebar").getByPlaceholder("Search nodes…").fill("email");
    await canvas.locator(".fi-flow-sidebar").getByRole("button", { name: /^Send email/ }).click();
    await expect(canvas.locator(".svelte-flow__node")).toHaveCount(1);

    await page.getByRole("button", { name: "Create", exact: true }).click();

    // Not connected and no recipient: the node gets a badge, the form the messages.
    await expect(canvas.locator(".fi-flow-node-problems")).toBeVisible();
    await expect(page.getByText(/Add at least one trigger/)).toBeVisible();
    await expect(page).toHaveURL(/\/admin\/workflows\/create$/);
});
