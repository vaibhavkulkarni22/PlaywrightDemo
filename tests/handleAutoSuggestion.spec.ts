import {test, expect} from '@playwright/test';

test("Handle auto suggestion test", async ({page}) =>{
    await page.goto("https://www.google.com/");
    await page.locator("textarea[name='q']").fill("Playwright course");
    await page.waitForSelector("//ul[@role='listbox']//li[@role='presentation']//span");
    const elements = await page.$$("//ul[@role='listbox']//li[@role='presentation']//span");
    for (let i = 0; i < elements.length; i++)
    {   
        const text = await elements[i].textContent();
        if (text?.includes("hyderabad"))
        {
            await elements[i].click();
            break;
        }
    }
    
});