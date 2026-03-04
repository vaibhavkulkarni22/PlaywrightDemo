import { test, expect } from "@playwright/test";

test("Upload Single file test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  // uploading single file
  await page
    .locator("#file-upload")
    .setInputFiles("C:\\Users\\DELL\\Downloads\\upload\\samplefile12.txt");
  // await page.locator("#file-submit").click();
  await page.waitForTimeout(5000);
});

test.skip("Upload Mulitple files test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  // uploading multiple files
  await page
    .locator("#file-upload")
    .setInputFiles([
      "C:\\Users\\DELL\\Downloads\\upload\\samplefile123.txt",
      "C:\\Users\\DELL\\Downloads\\upload\\samplefile124.txt",
      "C:\\Users\\DELL\\Downloads\\upload\\samplefile125.txt",
    ]);
  // await page.locator("#file-submit").click();
  await page.waitForTimeout(5000);
});

// File download test
test("File download test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");

  // Start waiting for download before clicking
  const downloadPromise = page.waitForEvent("download");
  await page.locator("a[href='download/some-file.txt']").first().click();
  const download = await downloadPromise;

  // Wait for the download process to complete and save it
  await download.saveAs(
    "C:\\Users\\DELL\\Downloads\\" + download.suggestedFilename(),
  );
  const downloadPath = await download.path();
  console.log("Downloaded file path: ", downloadPath);
  // await page.pause();
});
