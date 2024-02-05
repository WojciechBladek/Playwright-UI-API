import { LoginAPI } from '@_playwright/API/login.api';
import { RegisterAPI } from '@_playwright/API/register.api';
import { LoginPage } from '@_playwright/pages/login.page';
import { RegisterPage } from '@_playwright/pages/register.page';
import { test as baseTest } from '@playwright/test';

interface Pages {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  registerAPI: RegisterAPI;
  loginAPI: LoginAPI;
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
  registerAPI: async ({ request }, use) => {
    const registerAPI = new RegisterAPI(request);
    await use(registerAPI);
  },
  loginAPI: async ({ request }, use) => {
    const loginAPI = new LoginAPI(request);
    await use(loginAPI);
  },
});
