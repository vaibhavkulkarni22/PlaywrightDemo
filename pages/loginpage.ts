import { expect, Locator } from "playwright/test";
import * as testData from "../tests/testData.json";

export class LoginPage {
  page: any;
  appUrl: string;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  cartButton: Locator;
  menu: Locator;
  signOut: Locator;

  constructor(page: any) {
    this.page = page;
    this.appUrl = "https://freelance-learn-automation.vercel.app/login";
    this.usernameInput = page.locator('//input[@id="email1"]');
    this.passwordInput = page.locator('//input[@id="password1"]');
    this.loginButton = page.locator('//button[text()="Sign in"]');
    this.cartButton = page.locator('//button[text()="Cart"]');
    this.menu = page.locator('//img[contains(@src, "burger-menu")]');
    this.signOut = page.locator('//button[text()="Sign out"]');
  }

  async loginToApplication() {
    await this.page.goto(this.appUrl);
    await this.usernameInput.fill(testData.username);
    await this.passwordInput.fill(testData.password);
    await this.loginButton.click();
  }

  async verifyLogin() {
    await this.page.waitForLoadState("load");
    await expect(this.cartButton).toBeVisible();
  }

  async logoutFromApplication() {
    await this.menu.click();
    await this.signOut.click();
    await expect(this.loginButton).toBeVisible();
  }
}
