import { expect, Locator } from "playwright/test";

export class GreenKart {
  page: any;
  appUrl: string;
  searchItem: Locator;
  searchButton: Locator;
  addItemButton: Locator;
  items: Locator;
  cartIcon: Locator;
  cartItems: Locator;
  proceedToCheckoutButton: Locator;
  placeOrderButton: Locator;
  countryDropdown: Locator;
  termsAndConditionsCheckbox: Locator;
  proceedButton: Locator;



  constructor(page: any) {
    this.page = page;
    this.appUrl = "https://rahulshettyacademy.com/seleniumPractise/#/";
    this.searchItem = page.locator("//input[@placeholder='Search for Vegetables and Fruits']");
    this.searchButton = page.locator("//button[@type='submit']");
    this.addItemButton = page.locator("//button[normalize-space()='ADD TO CART']");
    this.items = this.page.locator("//div[@class='products']/div");
    this.cartIcon = this.page.locator("//a[@class='cart-icon']");
    this.cartItems = this.page.locator("//div[@class='cart-preview active']//p[@class='product-name']");
    this.proceedToCheckoutButton = this.page.locator("//button[normalize-space()='PROCEED TO CHECKOUT']");
    this.placeOrderButton = this.page.locator("//button[normalize-space()='Place Order']");
    this.countryDropdown = this.page.locator("select");
    this.termsAndConditionsCheckbox = this.page.locator("//input[@type='checkbox']");
    this.proceedButton = this.page.locator("//button[normalize-space()='Proceed']");


    }

    async addItemsToCart() {
        await this.searchItem.fill("Tomato");
        await this.searchButton.click();
        await this.page.waitForTimeout(3000);
    }

    async selectItemsFromSearchResults() {
        const count = await this.items.count();
        console.log("Total items found: ", count);
        for (let i = 0; i < count; i++) {
            const itemName = await this.items.nth(i).locator("h4.product-name").textContent();
            console.log("Item name: ", itemName);
            if (itemName?.trim().startsWith("Tomato")) {
                await this.items.nth(i).locator("button").click();
                console.log("Clicked on ADD TO CART for: ", itemName);
            }
        }
        await this.page.waitForTimeout(3000);
    }

    async verifyItemsInCart() {
        await this.cartIcon.click();
        await this.page.waitForTimeout(3000);
        const cartItemCount = await this.cartItems.count();
        console.log("Total items in cart: ", cartItemCount);
        for (let i = 0; i < cartItemCount; i++) {
            const cartItemName = await this.cartItems.nth(i).textContent();
            console.log("Cart item name: ", cartItemName);
        }
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
        await this.page.waitForTimeout(3000);
    }   
    async placeOrder() {
        await this.placeOrderButton.click();
        await this.page.waitForTimeout(3000);
    }   

    async selectCountryAndAcceptTerms() {
        await this.countryDropdown.selectOption("India");
        await this.termsAndConditionsCheckbox.check();
        await this.proceedButton.click();
        await this.page.waitForTimeout(3000);
    }

  }