/*
Truncate a string (first argument) if it is longer than the given maximum string length
(second argument). Return the truncated string with a ... ending.
*/

const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num) + "..." : str;

const result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(result);
