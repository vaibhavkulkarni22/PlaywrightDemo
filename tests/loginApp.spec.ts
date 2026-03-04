import { test, expect } from "@playwright/test";
import * as testdata from "./testData.json";

test("Login to app using JSON file", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.getByPlaceholder("Enter Email").fill(testdata.username);
  await page.getByPlaceholder("Enter Password").fill(testdata.password);
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(
    "https://freelance-learn-automation.vercel.app/dashboard",
  );
});
