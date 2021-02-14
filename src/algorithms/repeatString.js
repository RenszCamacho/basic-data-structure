/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string 
if num is not a positive number. For the purpose of this challenge, do not use the 
built-in .repeat() method.
*/

//FOR LOOP
const repeatStringNumTimes = (str, num) => {
  let newStr = str;
  for (let i = 1; i < num; i++) {
    newStr += str;
  }
  return num <= 0 ? "" : newStr;
};

//RECURSION
const repeatStringNumTimes = (str, num) =>
  num <= 0 ? "" : str + repeatStringNumTimes(str, num - 1);

// const result = repeatStringNumTimes("*", 8);
// console.log(result);
