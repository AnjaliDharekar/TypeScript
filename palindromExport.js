"use strict";
/* @returns true if input is palindrom   */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * @returns ture if the input string is a palindrome
 */
console.log("============palindrome prog Export or module============== ");
// import in variable.ts file
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
