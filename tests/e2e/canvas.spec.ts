import { expect, test } from "@playwright/test";
import { existsSync } from "node:fs";

// Signed in once for the run by auth.setup.ts.

// Add a trigger, connect an action to it, save — the path every user takes.
test("builds a workflow on the canvas and saves it", async ({ page }) => {
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

test("undoes, redoes, copies and pastes on the canvas", async ({ page }) => {
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

// The rarer starters (a template, an import) sit behind the header's
// more-actions menu, beside New workflow.
async function openStarter(page: import("@playwright/test").Page, name: string) {
    await page.locator(".fi-header .fi-dropdown-trigger button").click();
    await page.getByRole("button", { name }).click();
}

test("starts a workflow from a template", async ({ page }) => {
    await page.goto("/admin/workflows");
    await openStarter(page, "New from template");

    await page.getByRole("radio", { name: /Welcome series/ }).check();
    await page.getByRole("button", { name: "Create workflow" }).click();

    // Opened for review: nothing to fill in here, so no badge.
    await expect(page).toHaveURL(/\/admin\/workflows\/[^/]+\/edit\?review=1$/);
    await expect(page.locator(".fi-flow-canvas .svelte-flow__node")).toHaveCount(4);
    await expect(page.locator(".fi-flow-canvas .svelte-flow__edge")).toHaveCount(3);
    await expect(page.locator(".fi-flow-node-problems")).toHaveCount(0);
});

// A draft with a choice left to the person opens with the validator's
// badge on that node, as after a refused save; editing the node clears it.
test("marks the nodes still to fill in when a template opens for review", async ({ page }) => {
    await page.goto("/admin/workflows");
    await openStarter(page, "New from template");
    await page.getByRole("radio", { name: /High-value order alert/ }).check();
    await page.getByRole("button", { name: "Create workflow" }).click();

    // The trigger's record type and the notification's recipients are the template's choices left to the person.
    await expect(page).toHaveURL(/\/admin\/workflows\/[^/]+\/edit\?review=1$/);
    await expect(page.locator(".fi-flow-node-problems")).toHaveCount(2);
    const trigger = page.locator(".fi-flow-canvas .svelte-flow__node").filter({ hasText: "Order created" });
    await expect(trigger.locator(".fi-flow-node-problems")).toHaveAttribute("title", /Record type/);

    // Choosing the record type in the trigger's settings clears its badge.
    await trigger.dblclick();
    const slideOver = page.locator(".fi-modal-window").filter({ hasText: "Record type" });
    await slideOver.getByRole("combobox", { name: /^Record type/ }).click();
    await page.getByRole("option", { name: "Order", exact: true }).click();
    await slideOver.getByRole("button", { name: "Apply" }).click();
    await expect(slideOver).toBeHidden();
    await expect(trigger.locator(".fi-flow-node-problems")).toHaveCount(0);
    await expect(page.locator(".fi-flow-node-problems")).toHaveCount(1);
});

// "Describe a workflow" is offered by the workbench once packstub/agents is
// installed: the modal takes a sentence and a model from the engine's
// picker. The draft itself would ask a real provider, so it is not sent.
test("offers Describe a workflow when the engine is installed", async ({ page }) => {
    test.skip(!existsSync("vendor/packstub/agents"), "packstub/agents is not installed in the workbench");

    await page.goto("/admin/workflows");
    await page.getByRole("button", { name: "Describe a workflow" }).click();

    const modal = page.locator(".fi-modal-window").filter({ hasText: "Describe the workflow you want" });
    await expect(modal).toBeVisible();
    await expect(modal.getByRole("textbox", { name: /^What should the workflow do/ })).toBeVisible();
    await expect(modal.getByRole("combobox", { name: /^Model/ }).locator("option", { hasText: /Claude/ }).first()).toBeAttached();
    await expect(modal.getByRole("button", { name: "Draft workflow" })).toBeVisible();
});

// The real Ask AI node, offered by the workbench once packstub/agents is
// installed (composer require packstub/agents --dev; CI's canvas job does):
// its own AI group in the sidebar, the teal look on the canvas, the settings
// slide-over, and a dry run that names the model it would ask.
test("offers the real Ask AI node in the AI group and dry-runs it", async ({ page }) => {
    test.skip(!existsSync("vendor/packstub/agents"), "packstub/agents is not installed in the workbench");

    await page.goto("/admin/workflows/create");
    await page.getByRole("textbox", { name: /^Name/ }).fill("Triage with AI");

    const canvas = page.locator(".fi-flow-canvas");
    await canvas.getByRole("button", { name: "Add a trigger" }).click();
    await canvas.locator(".fi-flow-sidebar").getByRole("button", { name: /^Manual/ }).click();
    await expect(canvas.locator(".svelte-flow__node")).toHaveCount(1);

    // The groups: the three built-in ones, then AI because Ask AI is offered.
    await canvas.locator(".svelte-flow__node").getByRole("button", { name: "Add node" }).click();
    const sidebar = canvas.locator(".fi-flow-sidebar");
    await expect(sidebar.getByRole("button", { name: /^Triggers/ })).toBeVisible();
    await expect(sidebar.getByRole("button", { name: /^Conditions/ })).toBeVisible();
    await sidebar.getByRole("button", { name: /^AI Ask a model/ }).click();
    await expect(sidebar.getByRole("heading", { name: "AI" })).toBeVisible();
    await sidebar.getByRole("button", { name: /^Ask AI/ }).click();

    const askAi = canvas.locator(".svelte-flow__node").filter({ hasText: "Ask AI" });
    await expect(askAi).toHaveCount(1);
    await expect(askAi.locator(".bg-teal-600")).toBeVisible();
    await expect(canvas.locator(".svelte-flow__edge")).toHaveCount(1);

    // The settings come from the engine: the model picker lists the platform's entries.
    // The new node can land at the edge of the viewport; bring both nodes into view first.
    await canvas.locator(".svelte-flow__controls-fitview").click();
    await askAi.dblclick();
    const slideOver = page.locator(".fi-modal-window").filter({ hasText: "Ask AI" });
    await slideOver.getByRole("textbox", { name: /^Question/ }).fill("Is order {{ manual }} urgent?");
    await slideOver.getByRole("textbox", { name: /^Name/ }).last().fill("urgent");
    await slideOver.getByRole("combobox", { name: /^Type/ }).selectOption("boolean");
    await expect(slideOver.getByRole("combobox", { name: /^Model/ }).locator("option", { hasText: /Claude/ }).first()).toBeAttached();
    await slideOver.getByRole("button", { name: "Apply" }).click();
    await expect(slideOver).toBeHidden();

    await page.getByRole("button", { name: "Create", exact: true }).click();
    await expect(page).toHaveURL(/\/admin\/workflows\/[^/]+\/edit$/);

    // Loaded from the saved definition, the node finds its group again by identifier.
    const saved = page.locator(".fi-flow-canvas .svelte-flow__node").filter({ hasText: "Ask AI" });
    await expect(saved).toHaveCount(1);
    await expect(saved.locator(".bg-teal-600")).toBeVisible();

    // A test run never asks the model and logs the one it would ask.
    await page.getByRole("button", { name: "Test", exact: true }).click();
    await page.getByRole("button", { name: "Run test" }).click();
    const result = page.locator(".fi-modal-window").filter({ hasText: "Test result" });
    await expect(result).toBeVisible();
    await expect(result.getByText("simulated", { exact: true })).toBeVisible();
    await result.getByText("Would use").click();
    await expect(result.getByText(/"would_ask": "Claude/)).toBeVisible();
});
