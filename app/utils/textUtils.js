/**
 * Convert the first character of a string to uppercase
 * @param text
 * @returns {string}
 */
export const firstLetterToUpperCase = (text = '') => text.charAt(0).toUpperCase() + text.slice(1)
