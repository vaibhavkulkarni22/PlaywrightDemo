import { test, expect } from "@playwright/test";

test("Handling iFrames test", async ({ page }) => {
  await page.goto("https://docs.oracle.com/javase/8/docs/api/");

  const iframe1 = page.frameLocator('[name="packageListFrame"]');
  const iframe2 = page.frameLocator('[name="packageFrame"]');

  // 1st way to click frame element
  // await page.frameLocator('[name="packageListFrame"]').getByRole('link', { name: /java\.applet/i }).click();

  // await page.locator("//a[normalize-space()='java.applet']").click(); // This wont work, before this need to switch to the frames

  // 2nd way to click frame element
  // const iframe = page.frameLocator('[name="packageListFrame"]');
  // await iframe.locator("//a[normalize-space()='java.applet']").click();

  // 3rd way to click frame element
  await iframe1.locator("//a[normalize-space()='java.applet']").click();
  await page.waitForTimeout(5000);
  await iframe2.getByText("AppletContext").click();
  await page.pause();
});
