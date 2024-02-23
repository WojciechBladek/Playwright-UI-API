import { USER_EMAIL } from '@_config/env.config';
import { expect, test } from '@_playwright/fixtures/merge.fixture';
import { waitForResponse } from '@_playwright/utils/wait.util';

test.describe('Verify user api response ', () => {
  test('Verify me endpoint response @logged', async ({
    request,
    loginUser,
  }) => {
    // Act
    loginUser;
    const response = await request.get(
      'https://api.practicesoftwaretesting.com/users/me',
    );

    // Assert
    await expect(response).toBeOK();
  });
  test('Verify me endpoint response method 2', async ({ loginUser, page }) => {
    // Act
    loginUser;
    const responsePromise = waitForResponse(page, '/users/me', 'GET', 200);
    const response = await responsePromise;
    const body = await response.json();

    // Assert
    expect(body['email']).toBe(USER_EMAIL);
    expect(response.ok()).toBeTruthy();
  });
});
