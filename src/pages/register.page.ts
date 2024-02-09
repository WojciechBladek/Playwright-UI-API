import { LoginPage } from './login.page';
import { RegisterNewUserModel } from '@_playwright/models/user.model';
import { BasePage } from '@_playwright/pages/base.page';
import { Page } from '@playwright/test';

export class RegisterPage extends BasePage {
  url = '#/auth/register';

  firstNameInput = this.page.getByTestId('first-name');
  lastNameInput = this.page.getByTestId('last-name');
  dateOfBirthInput = this.page.getByTestId('dob');
  addressInput = this.page.getByTestId('address');
  postCodeInput = this.page.getByTestId('postcode');
  cityInput = this.page.getByTestId('city');
  stateInput = this.page.getByTestId('state');
  countryInput = this.page.getByTestId('country');
  phoneNumberInput = this.page.getByTestId('phone');
  emailAddressInput = this.page.getByTestId('email');
  passwordInput = this.page.getByTestId('password');

  registerButton = this.page.getByTestId('register-submit');

  constructor(page: Page) {
    super(page);
  }

  async registerNewUser(userData: RegisterNewUserModel): Promise<LoginPage> {
    // fill form
    await this.firstNameInput.fill(userData.first_name);
    await this.lastNameInput.fill(userData.last_name);
    await this.dateOfBirthInput.fill(userData.dob);
    await this.addressInput.fill(userData.address);
    await this.postCodeInput.fill(userData.postcode);
    await this.cityInput.fill(userData.city);
    await this.stateInput.fill(userData.state);
    await this.countryInput.selectOption(userData.country);
    await this.phoneNumberInput.fill(userData.phone);
    await this.emailAddressInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);

    // Register
    await this.registerButton.click();

    return new LoginPage(this.page);
  }
}
