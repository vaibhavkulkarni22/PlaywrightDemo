import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Login test using Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.loginToApplication();
    await loginPage.verifyLogin();
    await loginPage.logoutFromApplication();
});