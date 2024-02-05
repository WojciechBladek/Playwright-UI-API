import { pageObjectTest } from '@_playwright/fixtures/page-object.fixture';
import { LoginPage } from '@_playwright/pages/login.page';
import { UserLoginModelData } from '@_playwright/test-data/user.data';

interface Login {
  loginUser: LoginPage;
}

export const loginUserTest = pageObjectTest.extend<Login>({
  loginUser: async ({ loginPage }, use) => {
    await loginPage.login(UserLoginModelData);

    await use(loginPage);
  },
});
