import { test, expect } from "@playwright/test";

test("Keyboard event test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("textarea[name='q']").fill("Playwright");
  // await page.locator("textarea[name='q']").press("Enter");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Control+V");
  await page.keyboard.press("Enter");
});

test("Delete some words", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("textarea[name='q']").focus();
  await page.keyboard.type("Vaibhav Kulkarni!");
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.down("Shift");
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.press("Backspace");
  await page.keyboard.up("Shift");
  await page.keyboard.press("Enter");
});

test("Delete as per given word", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("textarea[name='q']").focus();
  await page.keyboard.type("Vaibhav Kulkarni!");
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.down("Shift");
  for (let i = 0; i < "Kulkarni".length; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.press("Backspace");
  await page.keyboard.up("Shift");
  await page.keyboard.press("Enter");
});
