export async function getRandomValue(values: string[]): Promise<string> {
  return values[Math.round(Math.random() * (values.length - 1))];
}
