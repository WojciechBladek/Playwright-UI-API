import { randomRegisterUserData } from '@_playwright/factories/register-user.factory';
import { expect, test } from '@_playwright/fixtures/merge.fixture';

test.describe('Verify register', () => {
  test('register with correct data and login ', async ({ registerPage }) => {
    // Arrange
    const registerUserData = randomRegisterUserData();
    const expectedUrlName = 'auth/login';

    // Act
    const loginPage = await registerPage.registerNewUser(registerUserData);
    await registerPage.waitForPageToLoadUrl(`**/${expectedUrlName}`);

    // Assert
    expect(loginPage.getUrl(), 'User should be on login page').toContain(
      expectedUrlName,
    );

    await test.step('login after registration', async () => {
      // Arrange
      const expectedUrl = 'account';

      // Act
      const accountPage = await loginPage.login(registerUserData);
      await accountPage.waitForPageToLoadUrl(`**/${expectedUrl}`);

      // Assert
      expect(accountPage.getUrl(), 'User should be on accountPage').toContain(
        expectedUrl,
      );
      await expect(accountPage.nickName).toHaveText(
        registerUserData.first_name + ' ' + registerUserData.last_name,
      );
    });
  });

  test('register via api with correct data and login  ', async ({
    registerAPI,
  }) => {
    // Arrange
    const registerUserData = randomRegisterUserData();
    // act
    const register = await registerAPI.registerNewUser(registerUserData);

    // assert
    expect(register.response.status(), 'New user is created').toEqual(201);
    expect(
      register.object,
      'Register data is equal with backend response',
    ).toStrictEqual(registerUserData);

    await test.step('login via api after registration', async () => {
      // Act
      const login = await register.loginAPI.login(registerUserData);

      // Assert
      await expect(login).toBeOK();
    });
  });
});
