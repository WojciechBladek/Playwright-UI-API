import { BaseAPI } from './base.api';
import {
  LoginUserModel,
  RegisterNewUserModel,
} from '@_playwright/models/user.model';
import { APIRequestContext, APIResponse } from 'playwright';

export class LoginAPI extends BaseAPI {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async login(
    loginUserData: RegisterNewUserModel | LoginUserModel,
  ): Promise<APIResponse> {
    const response = await this.request.post(this.loginUser, {
      form: {
        email: loginUserData.email,
        password: loginUserData.password,
      },
    });
    return response;
  }

  async getToken(loginUserData: RegisterNewUserModel): Promise<string> {
    const response = await this.login(loginUserData);
    const tokenBody = await response.json();
    const token = tokenBody['access_token'];
    return token;
  }
}
