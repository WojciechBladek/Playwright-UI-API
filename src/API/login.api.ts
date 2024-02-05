import { BaseAPI } from './base.api';
import { RegisterNewUserModel } from '@_playwright/models/user.model';
import { APIRequestContext, APIResponse } from 'playwright';

export class LoginAPI extends BaseAPI {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async loginNewUserAfterRegistration(
    loginUserData: RegisterNewUserModel,
  ): Promise<APIResponse> {
    const response = await this.request.post(this.loginUser, {
      form: {
        email: loginUserData.email,
        password: loginUserData.password,
      },
    });
    return response;
  }
}
