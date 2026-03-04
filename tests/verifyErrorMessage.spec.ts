import { test, expect } from "@playwright/test";

test.describe("Login Error Messages", () => {
  test.use({ viewport: { width: 1440, height: 703 } });

  test.beforeEach(async ({ page }) => {
    // console.log("Viewport width:", await page.viewportSize()?.width);
    // console.log("Viewport height:", await page.viewportSize()?.height);
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  test("Verify error message is displayed when invalid credentials are entered", async ({
    page,
  }) => {
    // Enter invalid credentials
    await page.fill('input[name="username"]', "admin");
    await page.fill('input[name="password"]', "admi1225");
    // Click the login button
    await page.click('button[type="submit"]');
    // Wait for the error message to appear
    const errorMessage = await page
      .locator("//p[contains(@class, 'alert-content-text')]")
      .textContent();
    await console.log("Error message locator: ", errorMessage);
    // Verify that the error message is displayed
    await expect(errorMessage).toContain("Invalid");
  });
  test("Verify error message is displayed when password is left blank", async ({
    page,
  }) => {
    // Enter username and leave password blank
    await page.fill('input[name="username"]', "admin");
    await page.fill('input[name="password"]', "");
    // Click the login button
    await page.click('button[type="submit"]');
    // Wait for the error message to appear
    const errorMessage = await page
      .locator("//span[contains(@class, 'input-group__message')]")
      .last()
      .textContent();
    await console.log("Error message locator: ", errorMessage);
    // Verify that the error message is displayed
    await expect(errorMessage).toContain("Required");
  });
  test("Verify error message is displayed when username is left blank", async ({
    page,
  }) => {
    // Enter username and leave password blank
    await page.fill('input[name="username"]', "");
    await page.fill('input[name="password"]', "admin123");
    // Click the login button
    await page.click('button[type="submit"]');
    // Wait for the error message to appear
    const errorMessage = await page
      .locator("//span[contains(@class, 'input-group__message')]")
      .first()
      .textContent();
    await console.log("Error message locator: ", errorMessage);
    // Verify that the error message is displayed
    await expect(errorMessage).toContain("Required");
  });
  test("Verify error message is displayed when username & password is left blank", async ({
    page,
  }) => {
    // Enter username and leave password blank
    await page.fill('input[name="username"]', "");
    await page.fill('input[name="password"]', "");
    // Click the login button
    await page.click('button[type="submit"]');
    // Wait for the error message to appear
    const errorMessage1 = await page
      .locator("//span[contains(@class, 'input-group__message')]")
      .first()
      .textContent();
    const errorMessage2 = await page
      .locator("//span[contains(@class, 'input-group__message')]")
      .last()
      .textContent();
    await console.log("Error message locator: ", errorMessage1, errorMessage2);
    // Verify that the error message is displayed
    expect(
      errorMessage1 === "Required" && errorMessage2 === "Required",
    ).toBeTruthy();
  });
});
