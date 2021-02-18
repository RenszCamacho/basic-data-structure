//Chunky Monkey.

/*
Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.
*/

const chunkArrayInGroups = (arr, size) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i = i + size) {
    const chunk = arr.slice(i, i + size);
    newArr.push(chunk);
  }

  return newArr;
};

const result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(result);
