# Tests for PracticeSoftwareTesting application

## TOOLSHOP.demo Application

Repository: https://github.com/WojciechBladek/Playwright-UI-AP

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
- to run MailTrap tests u need to create account on (https://mailtrap.io/home)
- .env file variables example:
- .env TEMPLATE
- API_TOKEN,USER_EMAIL, USER_PASSWORD, USER_NAME - will be generated automatically in the setup file

```javascript
BASE_URL='https://practicesoftwaretesting.com/'
API_TOKEN=''
USER_EMAIL=''
USER_PASSWORD=''
USER_NAME=''
HOST=''
USER=''
PASSWORD=''
MAIL=''
INBOX_TOKEN=''
ACCOUNT_ID_MAILTRAP=''
INBOX_ID_MAILTRAP=''
DEV='1'
```

- go to base url and then create an account with your data and substitute it into the variables in .env

### Update framework

- install latest version of `npm i @playwright/test`
- install latest version of browsers `npx playwright install`
- check version `npx playwright --version`

## Use

Run all tests:

```javascript
npx playwright test
```

Run all tests with tags:

```javascript
npx playwright test --grep "@GEN-S1-01"
```

Run all tests without tags:

```javascript
npx playwright test --grep-invert "@GEN-S1-01"
```

Repeat tests with value:

```javascript
npx playwright test --grep "@@GEN-S2-01" --repeat-each=5
```

For more usage cases look in `package.json` scripts section.
