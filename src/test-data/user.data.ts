import { USER_EMAIL, USER_NAME, USER_PASSWORD } from '@_config/env.config';
import { LoginUserModel, UserNameModel } from '@_playwright/models/user.model';

export const UserLoginModelData: LoginUserModel = {
  email: USER_EMAIL,
  password: USER_PASSWORD,
};

export const UserNameModelData: UserNameModel = {
  nickname: USER_NAME,
};
