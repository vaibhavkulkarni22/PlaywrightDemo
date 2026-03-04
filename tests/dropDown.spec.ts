import { test, expect } from "playwright/test";

test.describe("Handle Dropdown, Checkbox, Radio Buttons, Mulitple Selection @smoke", () => {
  test.use({ viewport: { width: 1440, height: 703 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
  });

  test("Handle Dropdown", async ({ page }) => {
    // 1st way of dropdown selection using label
    await page.locator("#state").selectOption({ label: "Maharashtra" });
    // 2nd way of dropdown selection using value
    await page.locator("#state").selectOption({ value: "Goa" });
    // 3rd way of dropdown selection using index
    await page.locator("#state").selectOption({ index: 2 });
    await page.waitForTimeout(5000);
    const values = await page.locator("#state option").allTextContents();
    for (let i = 0; i < values.length; i++) {
      console.log(values[i]);
      if (values[i] === "Delhi") {
        break;
      }
    }
  });
  test("Handle Checkbox @regression", async ({ page }) => {
    // //div[@class='interests-div']//div/label
    const allCheckboxes = await page
      .locator("//div[@class='interests-div']//div/label")
      .all();
    for (let i = 0; i < allCheckboxes.length; i++) {
      const checkbox = allCheckboxes[i];
      console.log(await checkbox.textContent());
      await checkbox.click();
    }

    for (let i = 0; i < allCheckboxes.length; i++) {
      const checkbox = allCheckboxes[i];
      const text = await checkbox.textContent();
      if (text === "Java" || text === "Python") {
        await checkbox.check();
      } else {
        await checkbox.uncheck();
      }
    }

    await page.waitForTimeout(5000);
  });
  test("Handle Radio Buttons @regression", async ({ page }) => {
    const radioButtonsLocator = page.locator(
      "//div[contains(@class,'genders-div')]//input",
    );
    await radioButtonsLocator.first().waitFor();
    const radioButtonsCount = await radioButtonsLocator.count();
    console.log("Number of radio buttons:", radioButtonsCount);

    const texts = await page
      .locator("//div[contains(@class,'genders-div')]//label")
      .allTextContents();
    texts.forEach((text) => console.log("Radio button text:", text));

    await page.locator("input[value='Female']").check();
    await page.locator("input[value='Male']").check();
    await page.waitForTimeout(2000);
  });
  test("Handle Multiple Selection @regression", async ({ page }) => {
    await page
      .locator("#hobbies")
      .selectOption(["Playing", "Reading", "Swimming"]);
    await page.waitForTimeout(5000);
  });
});
