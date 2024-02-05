import { getRandomValue } from '@_playwright/helpers/randomValue.helper';
import { RegisterNewUserModel } from '@_playwright/models/user.model';
import { faker } from '@faker-js/faker/locale/en';

const datesOfBirth = [
  '1990-01-01',
  '1992-05-12',
  '1997-12-03',
  '1984-06-15',
  '1993-05-12',
];

export function randomRegisterUserData(): RegisterNewUserModel {
  const firstName = faker.person.firstName().replace(/[^A-Za-z]/g, '');
  const lastName = faker.person.lastName().replace(/[^A-Za-z]/g, '');

  const registerUserData: RegisterNewUserModel = {
    first_name: firstName,
    last_name: lastName,
    dob: getRandomValue(datesOfBirth),
    address: faker.location.street().replace(/[^A-Za-z]/g, ''),
    city: faker.location.city().replace(/[^A-Za-z]/g, ''),
    state: faker.location.state(),
    country: 'PL',
    postcode: faker.location.zipCode('#####'),
    phone: faker.phone.number('501######'),
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
      provider: 'example.test',
    }),
    password: faker.internet.password({ prefix: '@#$%^&*(!', length: 15 }),
  };

  return registerUserData;
}
