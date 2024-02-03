import { RegisterNewUserModel } from '@_playwright/models/user.model';
import { faker } from '@faker-js/faker/locale/en';

export function randomRegisterUserData(): RegisterNewUserModel {
  const firstName = faker.person.firstName().replace(/[^A-Za-z]/g, '');
  const lastName = faker.person.lastName().replace(/[^A-Za-z]/g, '');

  const registerUserData: RegisterNewUserModel = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: '1990-01-01',
    address: faker.location.street().replace(/[^A-Za-z]/g, ''),
    postCode: faker.location.zipCode('#####'),
    city: faker.location.city().replace(/[^A-Za-z]/g, ''),
    state: faker.location.state(),
    country: 'PL',
    phoneNumber: faker.phone.number('501######'),
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
      provider: 'example.test',
    }),
    password: faker.internet.password({ prefix: '@#$%^&*(!', length: 15 }),
  };

  return registerUserData;
}
