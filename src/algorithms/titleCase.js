// Title Case a Sentence
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of 
the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
for (let i = 1; i <= 100; i++) {
  // if (i % 3 === 0 && i % 5 === 0) {
  //   console.log("Fizz Buzz");
  // } else if (i % 3 === 0) {
  //   console.log("Fizz");
  // } else if (i % 5 === 0) {
  //   console.log("Buzz");
  // } else {
  //   console.log(i);
  // }

  i % 3 === 0 && i % 5 === 0
    ? console.log("Fizz Buzz")
    : i % 3 === 0
    ? console.log("Fizz")
    : i % 5 === 0
    ? console.log("Buzz")
    : console.log(i);
}
