import { randomRegisterUserData } from '@_playwright/factories/register-user.factory';
import { expect, test } from '@_playwright/fixtures/merge.fixture';

test.describe('Verify register', () => {
  const registerUserData = randomRegisterUserData();

  test('register with correct data and login ', async ({
    loginPage,
    registerPage,
  }) => {
    // Arrange
    const exceptedUrlName = 'auth/login';

    // Act
    await registerPage.registerNewUser(registerUserData);
    await registerPage.waitForPageToLoadUrl(`**/${exceptedUrlName}`);

    // Assert
    expect(registerPage.getUrl()).toContain(exceptedUrlName);

    await test.step('login after registration', async () => {
      // Arrange
      const exceptedUrl = 'account';

      // Act
      await loginPage.login(registerUserData);
      await loginPage.waitForPageToLoadUrl(`**/${exceptedUrl}`);

      // Assert
      expect(loginPage.getUrl()).toContain(exceptedUrl);
      await expect(loginPage.nickName).toHaveText(
        registerUserData.first_name + ' ' + registerUserData.last_name,
      );
    });
  });

  test('register via api with correct data and login ', async ({
    registerAPI,
    loginAPI,
  }) => {
    // act
    const register = await registerAPI.registerNewUser(registerUserData);

    // assert
    expect(register.response.status()).toEqual(201);
    expect(register.object).toStrictEqual(registerUserData);

    await test.step('login via api after registration', async () => {
      // Act
      const login = await loginAPI.login(registerUserData);

      // Assert
      await expect(login).toBeOK();
    });
  });
});
