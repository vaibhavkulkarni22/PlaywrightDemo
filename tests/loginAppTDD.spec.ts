import { test, expect } from "@playwright/test";
import * as testdata from "./testlogindata.json";

test.describe("Data driven login test", () => {
  for (const data of testdata.users) {
    test.describe(`Login with users ${data.id}`, () => {
      test("Login to Application", async ({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/login");
        await page.getByPlaceholder("Enter Email").fill(data.username);
        await page.getByPlaceholder("Enter Password").fill(data.password);
        await page.waitForTimeout(3000);
      });
    });
  }
});
