/**
 * Test if a _full_ string is Chinese.
 * @param str The string to test
 * @param options
 */
export function isChinese(
  str: string,
  {
    threshold,
  }?: {
    threshold?: number;
  },
): boolean;

/**
 * Test if a string contains _any_ Chinese characters.
 * @param str The string to test
 */
export function hasChinese(str: string): boolean;

/**
 * The RegExp used for testing strings is exported directly for more
 * flexibility.
 */
export const RE: RegExp;
