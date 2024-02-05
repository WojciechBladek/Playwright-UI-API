import { APIRequestContext } from 'playwright';

export class BaseAPI {
  url = 'https://api.practicesoftwaretesting.com';
  registerUser = `${this.url}/users/register`;
  loginUser = `${this.url}/users/login`;

  constructor(protected request: APIRequestContext) {}
}
