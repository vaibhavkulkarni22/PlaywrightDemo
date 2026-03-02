import {test, expect} from '@playwright/test';

test("Verify application title", async ({page}) =>{
    await page.goto("https://www.google.com/");
    const url = page.url();
    console.log("Page URL is: ",url);
    expect (url).toContain("google.com");

    const title = await page.title();
    console.log("Page title is: ",title);
    
    // 1st way to verify title
    expect (title).toBe("Google");
    
    // 2nd way to verify title
    await expect(page).toHaveTitle("Google");

});