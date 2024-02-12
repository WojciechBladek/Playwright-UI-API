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
import { randomRegisterUserData } from '@_playwright/factories/register-user.factory';
import { test as setup } from '@_playwright/fixtures/merge.fixture';
import * as fs from 'fs';

setup('Generate .env file', async ({ loginAPI, registerAPI }) => {
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
INBOX_ID_MAILTRAP='${INBOX_ID_MAILTRAP}'`;

  fs.writeFileSync('.env', variable);
});
