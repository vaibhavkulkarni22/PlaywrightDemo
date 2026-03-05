import {test, expect} from "@playwright/test";
import {GreenKart} from "../pages/greenKart";


test.describe("GreenKart App Testing", () => {
    let greenKart: GreenKart;
    test.beforeEach(async ({page}) => {
        greenKart = new GreenKart(page);
        await page.goto(greenKart.appUrl);
    });

    test("Place order", async ({page}) => {
        await greenKart.addItemsToCart();
        await greenKart.selectItemsFromSearchResults();
        await greenKart.verifyItemsInCart();
        await greenKart.proceedToCheckout();
        await greenKart.placeOrder();
        await greenKart.selectCountryAndAcceptTerms();
    
    });

});