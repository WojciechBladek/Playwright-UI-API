import {
  ACCOUNT_ID_MAILTRAP,
  BASE_URL,
  HOST,
  INBOX_ID_MAILTRAP,
  INBOX_TOKEN,
  MAIL,
  PASSWORD,
  USER,
} from '@_config/env.config';
import { RegisterAPI } from '@_playwright/API/register.api';
import { randomRegisterUserData } from '@_playwright/factories/register-user.factory';
import { pageObjectTest } from '@_playwright/fixtures/page-object.fixture';
import { LoginPage } from '@_playwright/pages/login.page';
import { UserLoginModelData } from '@_playwright/test-data/user.data';
import * as fs from 'fs';

interface Login {
  loginUser: LoginPage;
  createUser: RegisterAPI;
}

export const loginUserTest = pageObjectTest.extend<Login>({
  loginUser: async ({ loginPage, createUser }, use) => {
    createUser;
    await loginPage.login(UserLoginModelData);

    await use(loginPage);
  },
  createUser: async ({ loginAPI, registerAPI }, use) => {
    // Arrange
    const registerUserData = randomRegisterUserData();

    // Act
    await registerAPI.registerNewUser(registerUserData);
    const token = await loginAPI.getToken(registerUserData);

    const variable = `BASE_URL='${BASE_URL}'\nAPI_TOKEN='${token}'
   USER_EMAIL='${registerUserData.email}'
   USER_PASSWORD='${registerUserData.password}'
   USER_NAME='${registerUserData.first_name} ${registerUserData.last_name}'
   HOST='${HOST}'\nUSER='${USER}'
   PASSWORD='${PASSWORD}'\nMAIL='${MAIL}'
   INBOX_TOKEN='${INBOX_TOKEN}'
   ACCOUNT_ID_MAILTRAP='${ACCOUNT_ID_MAILTRAP}'
   INBOX_ID_MAILTRAP='${INBOX_ID_MAILTRAP}'
   DEV='1'`;

    fs.writeFileSync('.env', variable);
    await use(registerAPI);
  },
});
