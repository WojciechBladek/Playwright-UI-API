import { BASE_URL } from '@_config/env.config';
import { randomRegisterUserData } from '@_playwright/factories/register-user.factory';
import { test as setup } from '@_playwright/fixtures/merge.fixture';
import * as fs from 'fs';

setup('Generate .env file', async ({ loginAPI, registerAPI }) => {
  // Arrange
  const registerUserData = randomRegisterUserData();

  // Act
  await registerAPI.registerNewUser(registerUserData);
  const token = await loginAPI.getToken(registerUserData);

  const variable = `BASE_URL='${BASE_URL}'\nAPI_TOKEN='${token}' \nUSER_EMAIL='${registerUserData.email}' \nUSER_PASSWORD='${registerUserData.password}' \nUSER_NAME='${registerUserData.first_name} ${registerUserData.last_name}'`;

  fs.writeFileSync('.env', variable);
});
