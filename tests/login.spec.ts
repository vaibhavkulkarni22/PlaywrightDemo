import { test, expect } from "@playwright/test";

test("Valid login test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  // await page.getByPlaceholder("Username").fill("Admin");
  await page
    .locator("//input[@placeholder='Username']")
    .pressSequentially("Admin", { delay: 100 });
  await page
    .getByPlaceholder("Password")
    .pressSequentially("admin123", { delay: 100 });
  // await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//button[@type='submit']").click();
  // await page.waitForTimeout(5000);
  expect(page.url()).toContain("dashboard");
  // await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(5000);
  await page.locator(".oxd-userdropdown-name").click();
  // await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByText("Logout").click();

  expect(page.url()).toContain("login");
  // await expect(page).toHaveURL(/login/);
});

test("Invalid login test", async ({ page }) => {});
