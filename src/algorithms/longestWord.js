/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
const findLongestWordLength = (str) => {
  return Math.max(...str.split(" ").map((word) => [...word].length));
  // const a = str.split(" ");
  // const b = a.map((e) => e.split("").length);
  // return Math.max(...b);
};

const result = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog"
);
console.log(result);
