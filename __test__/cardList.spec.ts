import { expect, test } from "@playwright/test";

let home;

test.beforeEach(async ({ page }) => {
	home = await page.goto("/");

});

test("Displaying card list", async ({ page }) => {
	expect(home).toBeDefined();
	await page.getByText("RESULTS").click();
	await page.locator("section").first().isVisible();
});

test("Can filter characters", async ({ page }) => {
	expect(home).toBeDefined();
	await page.getByPlaceholder("SEARCH A CHARACTER...").fill("Iron man");
	await page.locator("div").filter({ hasText: "Iron Man" }).nth(2).isVisible();
});

test("Can mark a character as favorite", async ({ page }) => {
	expect(home).toBeDefined();
	await page.getByPlaceholder("SEARCH A CHARACTER...").click();
	await page.getByPlaceholder("SEARCH A CHARACTER...").fill("Iron man");
	await page.locator("div").filter({ hasText: "Iron Man" }).nth(2).isVisible();
	await page.getByRole("button").click();
	await page.getByRole("link", { name: "1" }).click();
	await page.getByRole("heading", { name: "Favorite List" }).isVisible();
	await page.locator("div").filter({ hasText: "Iron Man" }).nth(3).isVisible();
});

test("Can navigate to character details", async ({ page }) => {
	expect(home).toBeDefined();
	await page.getByPlaceholder("SEARCH A CHARACTER...").fill("Iron man");
	await page.locator("div").filter({ hasText: "Iron Man" }).nth(2).isVisible();
	await page.getByRole("link", { name: "Iron Man" }).isVisible();
	await page.getByRole("heading", { name: "Iron Man" }).isVisible();
	await page.getByRole("heading", { name: "Comics" }).isVisible();
});
