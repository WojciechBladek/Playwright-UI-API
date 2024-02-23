import { test as setup } from '@_playwright/fixtures/merge.fixture';

setup('Generate .env file', async ({ createUser }) => {
  createUser;
});
