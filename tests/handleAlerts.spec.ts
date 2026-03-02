import {test, expect} from '@playwright/test';

test("Handle dialog test - Alert Accept", async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am a JS Alert");
        await dialog.accept();
    })
    await page.locator("//button[text()='Click for JS Alert']").click();

});

test("Handle dialog test - Alert Dismiss", async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am a JS Alert");
        await dialog.dismiss();
    })
    await page.locator("//button[text()='Click for JS Alert']").click();

});

test("Handle dialog test - Confirm", async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("I am a JS Confirm");
        // await dialog.accept(); 
        await dialog.dismiss(); // This confirm dialog has two options "Ok"=Accept and "Cancel"=Dismiss 
    })
    await page.locator("//button[text()='Click for JS Confirm']").click();

});

test("Handle dialog test - Prompt", async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (dialog) => {

        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("I am a JS prompt");
        await dialog.accept("Vaibhav Kulkarni"); 
        // await dialog.dismiss(); // This confirm dialog has two options "Ok"=Accept and "Cancel"=Dismiss 
    })
    await page.locator("//button[text()='Click for JS Prompt']").click();
    await page.locator("//p[@id='result']");
    expect(await page.locator("//p[@id='result']").textContent()).toContain("Vaibhav Kulkarni");
    await page.waitForTimeout(5000);



});