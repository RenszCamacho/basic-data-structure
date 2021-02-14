// Repeat a String Repeat a String
/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string 
if num is not a positive number. For the purpose of this challenge, do not use the 
built-in .repeat() method.
*/

const repeatStringNumTimes = (str, num) => {
  let newStr = str;
  for (let i = 1; i < num; i++) {
    newStr += str;
  }
  return num <= 0 ? "" : newStr;
  // return num < 0 ? "" : str.repeat(num);
};

const result = repeatStringNumTimes("*", 8);
console.log(result);
