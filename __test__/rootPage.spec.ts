import { test, expect } from "@playwright/test";

test("The page is displayed", async ({ page }) => {
	await page.goto("http://localhost:5173/");
	await page.getByRole("link").click();
	await expect(page).toBeTruthy();
});