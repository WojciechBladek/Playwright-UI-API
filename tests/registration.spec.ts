import { randomRegisterUserData } from '@_playwright/factories/register-user.factory';
import { expect, test } from '@_playwright/fixtures/merge.fixture';

test.describe.configure({ mode: 'serial' });
test.describe('Verify register', () => {
  const registerUserData = randomRegisterUserData();
  // optional method if we don't wanna use serial mode, but not stable.
  // const credentials = {
  //   email: registerUserData.email,
  //   password: registerUserData.password,
  // };
  // fs.writeFileSync(
  //   'src/user-data/credentials.json',
  //   JSON.stringify(credentials),
  // );

  test('register with correct data and login ', async ({ registerPage }) => {
    // Arrange
    const exceptedUrlName = 'auth/login';

    // Act
    await registerPage.registerNewUser(registerUserData);
    await registerPage.waitForPageToLoadUrl(`**/${exceptedUrlName}`);

    // Assert
    expect(registerPage.getUrl()).toContain(exceptedUrlName);
  });
  test('login after registration', async ({ loginPage }) => {
    const exceptedUrl = 'account';
    // Arrange

    // Act
    await loginPage.loginNewUser(registerUserData);
    await loginPage.waitForPageToLoadUrl(`**/${exceptedUrl}`);

    // Assert
    expect(loginPage.getUrl()).toContain(exceptedUrl);
    await expect(loginPage.nickName).toHaveText(
      registerUserData.firstName + ' ' + registerUserData.lastName,
    );
  });
});
