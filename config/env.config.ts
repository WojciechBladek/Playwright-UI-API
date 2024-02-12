import * as dotenv from 'dotenv';

dotenv.config({ override: true });

function requireEnvVariable(envVariable: string, envName?: string): string {
  if (envName) {
    environment(envName);
  }
  const envVariableValue = process.env[envVariable];
  if (envVariableValue === undefined) {
    throw new Error(`Environment variable  ${envVariable} is not set.`);
  }
  return envVariableValue;
}
function environment(env: string): void {
  if (env === 'dev') {
    dotenv.config({ path: `.env.${env}` });
  }
}

export const BASE_URL = requireEnvVariable('BASE_URL');
export const USER_EMAIL = requireEnvVariable('USER_EMAIL');
export const USER_PASSWORD = requireEnvVariable('USER_PASSWORD');
export const USER_NAME = requireEnvVariable('USER_NAME');
export const API_TOKEN = requireEnvVariable('API_TOKEN');

export const HOST = requireEnvVariable('HOST', 'dev');
export const USER = requireEnvVariable('USER', 'dev');
export const PASSWORD = requireEnvVariable('PASSWORD', 'dev');
export const MAIL = requireEnvVariable('MAIL', 'dev');
export const INBOX_TOKEN = requireEnvVariable('INBOX_TOKEN', 'dev');
