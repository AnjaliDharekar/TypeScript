/* @returns true if input is palindrom   */

/**
 * @returns ture if the input string is a palindrome
 */

console.log(`============palindrome prog Export or module============== `);

// import in variable.ts file

export function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}