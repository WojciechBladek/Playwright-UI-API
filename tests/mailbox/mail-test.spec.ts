import {
  ACCOUNT_ID_MAILTRAP,
  HOST,
  INBOX_ID_MAILTRAP,
  INBOX_TOKEN,
  MAIL,
  PASSWORD,
  USER,
} from '@_config/env.config';
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
test.describe.configure({ mode: 'serial' });
test.describe('Verify mailbox', () => {
  let messageId: string;
  const message = 'Hello Mail Testing';
  const subject = 'Mail Tester';

  test.afterAll('Delete message from inbox', async ({ request }) => {
    const response = await request.delete(
      `https://mailtrap.io/api/accounts/${ACCOUNT_ID_MAILTRAP}/inboxes/${INBOX_ID_MAILTRAP}/messages/${messageId}`,
      {
        headers: {
          'Api-Token': `${INBOX_TOKEN}`,
        },
      },
    );
    await expect(response, 'Message should be deleted after test').toBeOK();
  });

  test('Send mail to inbox', async () => {
    async function main(): Promise<MailBox> {
      const info = await transporter.sendMail({
        from: `"Fred Foo 👻" <${MAIL}>`,
        to: `bar@example.com, ${MAIL}`,
        subject: `${subject}`,
        text: `${message}`,
        html: `<b>${message}</b>`,
      });
      const mailBox = info.envelope;
      return mailBox;
    }

    const mail = await main();
    expect(mail.from).toEqual(MAIL);
  });

  test('Verify mail message', async ({ request }) => {
    // Arrange
    const inbox = await request.get(
      `https://mailtrap.io/api/accounts/${ACCOUNT_ID_MAILTRAP}/inboxes/${INBOX_ID_MAILTRAP}/messages`,
      {
        headers: {
          'Api-Token': `${INBOX_TOKEN}`,
        },
      },
    );

    // Act
    const response = await inbox.json();
    messageId = await response[0].id;

    const textMessage = await request.get(
      `https://mailtrap.io/api/accounts/${ACCOUNT_ID_MAILTRAP}/inboxes/${INBOX_ID_MAILTRAP}/messages/${messageId}/body.txt`,
      {
        headers: {
          'Api-Token': `${INBOX_TOKEN}`,
          Accept: 'text/plain, application/json',
        },
      },
    );
    const expectedMessage = await textMessage.text();

    // Assert
    expect(response[0].subject, 'Verify subject ').toEqual(subject);
    expect(
      expectedMessage,
      'Message text should be equal with message',
    ).toEqual(message);
  });
});
