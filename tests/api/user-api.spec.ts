import { expect, test } from '@_playwright/fixtures/merge.fixture';

//TODO: wip
test.describe('Verify user api response ', () => {
  test('Verify me endpoint response @logged', async ({ request }) => {
    // Act
    const response = await request.get(
      'https://api.practicesoftwaretesting.com/users/me',
    );

    // Assert
    await expect(response).toBeOK();
  });
});
