import { expect, Locator } from "playwright/test";
import * as testData from "../tests/testData.json";

export class LoginPage {
  page: any;
  appUrl: string;
  usernameInput: string;
  passwordInput: string;
  loginButton: string;
  cartButton: string;
  menu: Locator;
  signOut: Locator;

  constructor(page: any) {
    this.page = page;
    this.appUrl = "https://freelance-learn-automation.vercel.app/login";
    this.usernameInput = '//input[@id="email1"]';
    this.passwordInput = '//input[@id="password1"]';
    this.loginButton = '//button[text()="Sign in"]';
    this.cartButton = '//button[text()="Cart"]';
    this.menu = page.locator('//img[contains(@src, "burger-menu")]');
    this.signOut = page.locator('//button[text()="Sign out"]');
  }

  async loginToApplication() {
    await this.page.goto(this.appUrl);
    await this.page.locator(this.usernameInput).fill(testData.username);
    await this.page.locator(this.passwordInput).fill(testData.password);
    await this.page.locator(this.loginButton).click();
  }

  async verifyLogin() {
    await this.page.waitForLoadState("load");
    await expect(this.page.locator(this.cartButton)).toBeVisible();
  }

  async logoutFromApplication() {
    await this.menu.click();
    await this.signOut.click();
    await expect(this.page.locator(this.loginButton)).toBeVisible();
  }
}
