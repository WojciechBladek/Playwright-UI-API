import { BasePage } from '@_playwright/pages/base.page';
import { Page } from '@playwright/test';

export class AccountPage extends BasePage {
  url = '#/account';

  nickName = this.page.getByTestId('nav-user-menu');

  constructor(page: Page) {
    super(page);
  }

  async getNickname(): Promise<string> {
    const fullName = await this.nickName.textContent();
    return fullName.trim();
  }
}
