// import { randomUserData } from '@_playwright/factories/user.factory';
// import { pageObjectTest } from '@_playwright/fixtures/page-object.fixture';
// import { RegisterPage } from '@_playwright/pages/register.page';
// import { STORAGE_PATH } from '@_pw-config';

// interface Register {
//   registerNewUser: RegisterPage;
// }

// export const registerUserTest = pageObjectTest.extend<Register>({
//   registerNewUser: async ({ registerPage, page }, use) => {
//     const userData = randomUserData();

//     await registerPage.goto();
//     await registerPage.registerNewUser(userData);

//     await page.context().storageState({ path: STORAGE_PATH });
//     await use(registerPage);
//   },
// });
