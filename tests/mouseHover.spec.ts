import { test, expect } from "@playwright/test";

test("Mouse Hover Test", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page
    .getByPlaceholder("Enter Email")
    .pressSequentially("admin@email.com");
  await page.getByPlaceholder("Enter Password").pressSequentially("admin@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForTimeout(3000);
  await page.locator("//span[text()='Manage']").hover();
  await page.waitForTimeout(3000);
  await page.locator("//a[text()='Manage Courses']").hover();
  await page.waitForTimeout(3000);
  await page.locator("//a[text()='Manage Categories']").click();
  await page.waitForTimeout(3000);
});
