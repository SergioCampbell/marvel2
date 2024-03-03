import { test, expect } from "@playwright/test";

test("The page is displayed", async ({ page }) => {
	await page.goto("/");
	await expect(page).toBeTruthy();
});