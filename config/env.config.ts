import * as dotenv from 'dotenv';

dotenv.config({ override: true });

function requireEnvVariable(envVariable: string): string {
  const envVariableValue = process.env[envVariable];
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable  ${envVariable} is not set.`);
  }
  return envVariableValue;
}

export const BASE_URL = requireEnvVariable('BASE_URL');
export const DEV = requireEnvVariable('DEV');
export const USER_EMAIL = requireEnvVariable('USER_EMAIL');
export const USER_PASSWORD = requireEnvVariable('USER_PASSWORD');
export const USER_NAME = requireEnvVariable('USER_NAME');
export const API_TOKEN = requireEnvVariable('API_TOKEN');
export const HOST = requireEnvVariable('HOST');
export const USER = requireEnvVariable('USER');
export const PASSWORD = requireEnvVariable('PASSWORD');
export const MAIL = requireEnvVariable('MAIL');
export const INBOX_TOKEN = requireEnvVariable('INBOX_TOKEN');
export const ACCOUNT_ID_MAILTRAP = requireEnvVariable('ACCOUNT_ID_MAILTRAP');
export const INBOX_ID_MAILTRAP = requireEnvVariable('INBOX_ID_MAILTRAP');
