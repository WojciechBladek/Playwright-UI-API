export function getRandomValue(array: string[]): string {
  return array[Math.round(Math.random() * (array.length - 1))];
}
