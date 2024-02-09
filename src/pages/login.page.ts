import { AccountPage } from './account.page';
import {
  LoginUserModel,
  RegisterNewUserModel,
} from '@_playwright/models/user.model';
import { BasePage } from '@_playwright/pages/base.page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '#/auth/login';

  emailAddressInput = this.page.getByTestId('email');
  passwordInput = this.page.getByTestId('password');

  loginButton = this.page.getByTestId('login-submit');

  constructor(page: Page) {
    super(page);
  }

  async login(
    userData: RegisterNewUserModel | LoginUserModel,
  ): Promise<AccountPage> {
    // fill form
    await this.emailAddressInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);

    // Register
    await this.loginButton.click();
    return new AccountPage(this.page);
  }
}
