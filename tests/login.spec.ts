import { expect, test } from '@_playwright/fixtures/merge.fixture';
import {
  UserLoginModelData,
  UserNameModelData,
} from '@_playwright/test-data/user.data';

test.describe('Verify login @logged', () => {
  test('Login with correct data and login ', async ({ loginPage }) => {
    // Arrange
    const exceptedUserName = UserNameModelData.nickname;
    const exceptedUrlName = 'account';

    // Act
    const accountPage = await loginPage.login(UserLoginModelData);
    await accountPage.waitForPageToLoadUrl(`**/${accountPage.url}`);
    const exceptedNickname = await accountPage.getNickname();

    expect(accountPage.getUrl()).toContain(exceptedUrlName);
    expect(exceptedNickname).toEqual(exceptedUserName);
  });

  test('Login via api with correct data and login @logged', async ({
    loginAPI,
  }) => {
    // Act
    const login = await loginAPI.login(UserLoginModelData);

    // Assert
    await expect(login).toBeOK();
  });
});
