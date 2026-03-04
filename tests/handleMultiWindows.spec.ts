import { test, expect } from "@playwright/test";

test("Handle multiple tabs test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("(//a[contains(@href,'facebook')])[1]").click(),
  ]);
  await newPage.waitForTimeout(3000);

  await newPage.locator("(//input[@name='email'])[2]").fill("admin@admin.com");
  await newPage.locator("(//input[@type='password'])[2]").fill("admin@123");
  await newPage.waitForTimeout(3000);
  await newPage.close();
  await page.locator("//input[@id='email1']").fill("admin@admin.com");
  await page.locator("//input[@id='password1']").fill("admin@123");
  await page.waitForTimeout(3000);
});
