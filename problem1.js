/**
 * @file Contains solution to problem statement (1). It uses
 * `summands` function defined in `polyfill.js`.
 *
 * Problem: Write a program that will print three elements
 * in an array whose sum is equal to a given number.
 */

var Polyfill = require('./polyfill');
Polyfill.run();

// Samples
console.log([3, 1, 2, 0].sort((a, b) => a - b).summands(3, 6));
console.log([3, 1, 2, 0].sort((a, b) => a - b).summands(3, 8));
