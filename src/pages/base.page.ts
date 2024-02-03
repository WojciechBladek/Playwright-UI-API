import { Page } from '@playwright/test';

export class BasePage {
  url = '';
  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    return await this.page.title();
  }

  getUrl(): string {
    return this.page.url();
  }

  async waitForPageToLoadUrl(url = this.url): Promise<void> {
    await this.page.waitForURL(url);
  }
}
