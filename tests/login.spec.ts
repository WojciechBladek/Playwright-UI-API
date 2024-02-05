import { expect, test } from '@_playwright/fixtures/merge.fixture';
import {
  UserLoginModelData,
  UserNameModelData,
} from '@_playwright/test-data/user.data';

test.describe('Verify login', () => {
  test('Login with correct data and login ', async ({ loginPage }) => {
    // Arrange
    const exceptedUserName = UserNameModelData.nickname;
    const exceptedUrlName = 'auth/login';

    // Act
    await loginPage.login(UserLoginModelData);

    expect(loginPage.getUrl()).toContain(exceptedUrlName);
    await expect(loginPage.nickName).toHaveText(exceptedUserName);
  });

  test('Login via api with correct data and login ', async ({ loginAPI }) => {
    // Act
    const login = await loginAPI.login(UserLoginModelData);

    // Assert
    await expect(login).toBeOK();
  });
});
