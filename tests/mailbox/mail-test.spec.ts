import { HOST, MAIL, PASSWORD, USER } from '@_config/env.config';
import { expect, test } from '@_playwright/fixtures/merge.fixture';
import { MailBox } from '@_playwright/models/mail.model';
import * as nodemailer from 'nodemailer';

//config
const transporter = nodemailer.createTransport({
  host: HOST,
  port: 2525,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});

test.describe('Verify mailbox', () => {
  test('Send mail to inbox', async () => {
    async function main(): Promise<MailBox> {
      const info = await transporter.sendMail({
        from: `"Fred Foo 👻" <${MAIL}>`,
        to: `bar@example.com, ${MAIL}`,
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>',
      });
      const mailBox = info.envelope;
      return mailBox;
    }

    const mail = await main();
    expect(mail.from).toEqual(MAIL);
  });
});
