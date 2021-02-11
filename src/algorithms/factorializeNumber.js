// Factorialize a Number
/*
Using recursion, we have a base case and a recursive case. It is important to have a base case,
otherwise we will have an infinite loop.
*/

const factorialize = (num) => (num === 0 ? 1 : num * factorialize(num - 1));

const result = factorialize(5);
console.log(result);
