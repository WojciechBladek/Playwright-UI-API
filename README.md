# Tests for skleptest.pl application

## GEN Shop Application

Repository: https://github.com/WojciechBladek/WojciechBladek/tree/main/Playwright

Follow instructions in app README

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky install`
- prepare local env file: `.env`
- .env file variables example:
```
BASE_URL='https://skleptest.pl/'
USER_EMAIL='email.adress@test.com'
USER_PASSWORD='password'
USER_NAME= 'email.adress'
```
- go to base url and then create an account with your data and substitute it into the variables in .env

### Update framework

- install latest version of `npm i @playwright/test`
- install latest version of browsers `npx playwright install`
- check version `npx playwright --version`

## Use

Run all tests:

```
npx playwright test
```

Run all tests with tags:

```
npx playwright test --grep "@GEN-S1-01"
```

Run all tests without tags:

```
npx playwright test --grep-invert "@GEN-S1-01"
```

Repeat tests with value:

```
npx playwright test --grep "@@GEN-S2-01" --repeat-each=5
```

For more usage cases look in `package.json` scripts section.
