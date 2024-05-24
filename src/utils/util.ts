/**
 * Generate a random number within a range in a safe way! (with Browser Support)
 * @param min Minimum value
 * @param max Maximum value
 * @returns A random number within the range
 */
export const safeRandom = (min: number, max: number): number => {
  const range = max - min;
  const bytes = Math.ceil(Math.log2(range) / 8);
  const mask = Math.pow(2, bytes * 8) - 1;

  let random;

  do {
    const array = new Uint8Array(bytes);
    window.crypto.getRandomValues(array);
    random =
      array.reduce((acc, val, index) => acc + (val << (index * 8)), 0) & mask;
  } while (random >= range);

  return min + random;
};
