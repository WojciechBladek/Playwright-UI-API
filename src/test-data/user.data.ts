import { USER_EMAIL, USER_PASSWORD } from '@_config/env.config';
import { LoginNewUserModel } from '@_playwright/models/user.model';

export const UserLoginModelData: LoginNewUserModel = {
  userEmail: USER_EMAIL,
  userPassword: USER_PASSWORD,
};
