export function checkIsWithinTolerance(
  actual: number | null,
  expected: number,
  tolerance: number,
): boolean {
  if (!expected) {
    return null;
  } else {
    return actual >= expected - tolerance && actual <= expected + tolerance;
  }
}
