import { API_TOKEN, BASE_URL, DEV } from '@_config/env.config';
import { defineConfig, devices } from '@playwright/test';

export const STORAGE_PATH = 'playwright/.auth/user.json';
export const RESPONSE_TIMEOUT = 10_000;
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  retries: 1,
  workers: undefined,
  reporter: [
    ['html'],
    ['github'],
    ['json', { outputFile: './playwright-report/results.json' }],
    [
      'junit',
      {
        outputFile: './playwright-report/results.xml',
        embedAnnotationsAsProperties: true,
      },
    ],
    ['list'],
    [
      'allure-playwright',
      {
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],
  use: {
    baseURL: DEV === '1' ? BASE_URL : 'https://localhost:4200',
    trace: 'retain-on-failure',
    testIdAttribute: 'data-test',
  },

  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium-logged',
      grep: /@logged/,
      use: {
        ...devices['Desktop Chrome'],
        extraHTTPHeaders: {
          Authorization: `bearer ${API_TOKEN}`,
        },
      },
      dependencies: ['setup'],
    },
    {
      name: 'chromium-non-logged',
      grepInvert: /@logged/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
