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

test("Could filter characters", async ({ page }) => {
	expect(home).toBeDefined();
	await page.getByPlaceholder("SEARCH A CHARACTER...").fill("Iron man");
	await page.locator("div").filter({ hasText: "Iron Man" }).nth(2).isVisible();
});

test("Could mark a character as favorite", async ({ page }) => {
	expect(home).toBeDefined();
	await page.locator("div:nth-child(4) > .characterName > .like").click();
	await page.getByRole("link", { name: "1" }).click();
	await page.getByRole("link", { name: "Aaron Stack" }).click();
});

test("Could navigate to character details", async ({ page }) => {
	expect(home).toBeDefined();
	await page.getByPlaceholder("SEARCH A CHARACTER...").fill("Iron man");
	await page.locator("div").filter({ hasText: "Iron Man" }).nth(2).isVisible();
	await page.getByRole("link", { name: "Iron Man" }).isVisible();
	await page.getByRole("heading", { name: "Iron Man" }).isVisible();
	await page.getByRole("heading", { name: "Comics" }).isVisible();
});
