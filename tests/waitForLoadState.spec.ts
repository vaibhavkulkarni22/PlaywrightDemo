import { test, expect } from "@playwright/test";

test("Count checkboxes on signup page", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  // await page.getByPlaceholder("Enter Email").fill("admin@email.com");
  // await page.getByPlaceholder("Enter Password").fill("admin@123");
  // await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText("New user? Signup").click();
  await page.waitForLoadState("load");
  const checkboxes = page.locator("//input[@type='checkbox']");
  const count = await checkboxes.count();
  console.log("Total checkboxes found: ", count);
  await expect(checkboxes).toHaveCount(5);
});
