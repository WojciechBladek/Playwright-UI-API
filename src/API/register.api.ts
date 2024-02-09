import { BaseAPI } from './base.api';
import { LoginAPI } from './login.api';
import { RegisterNewUserModel } from '@_playwright/models/user.model';
import { APIRequestContext, APIResponse } from 'playwright';

interface RegisterNewUser {
  response: APIResponse;
  object: object;
  loginAPI: LoginAPI;
}
export class RegisterAPI extends BaseAPI {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async registerNewUser(
    registerUserData: RegisterNewUserModel,
  ): Promise<RegisterNewUser> {
    const password = registerUserData.password;
    const response = await this.request.post(this.registerUser, {
      form: {
        first_name: registerUserData.first_name,
        last_name: registerUserData.last_name,
        dob: registerUserData.dob,
        address: registerUserData.address,
        city: registerUserData.city,
        state: registerUserData.state,
        country: registerUserData.country,
        postcode: registerUserData.postcode,
        phone: registerUserData.phone,
        email: registerUserData.email,
        password: password,
      },
    });
    const body = await response.json();
    const exceptedObject = {
      first_name: body.first_name,
      last_name: body.last_name,
      dob: body.dob,
      address: body.address,
      city: body.city,
      state: body.state,
      country: body.country,
      postcode: body.postcode,
      phone: body.phone,
      email: body.email,
      password: password,
    };
    return {
      response: response,
      object: exceptedObject,
      loginAPI: new LoginAPI(this.request),
    };
  }
}
