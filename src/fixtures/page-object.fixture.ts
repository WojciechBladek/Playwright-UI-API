import { LoginPage } from '@_playwright/pages/login.page';
import { RegisterPage } from '@_playwright/pages/register.page';
import { test as baseTest } from '@playwright/test';

interface Pages {
  registerPage: RegisterPage;
  loginPage: LoginPage;
}

export const pageObjectTest = baseTest.extend<Pages>({
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await use(registerPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});
