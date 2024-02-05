import { loginUserTest } from './register.fixture';
import { pageObjectTest } from '@_playwright/fixtures/page-object.fixture';
import { mergeTests } from 'playwright/test';

export { expect } from '@playwright/test';

export const test = mergeTests(pageObjectTest, loginUserTest);
