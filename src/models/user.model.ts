export interface RegisterNewUserModel {
  first_name: string;
  last_name: string;
  dob: string;
  address: string;
  postcode: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  password: string;
}

export interface LoginUserModel {
  email: string;
  password: string;
}

export interface UserNameModel {
  nickname: string;
}
