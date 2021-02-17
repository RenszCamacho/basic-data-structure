// Mutations

/*Return true if the string in the first element of the array contains all of the letters of the 
string in the second element of the array.
*/

const mutation = (arr) => {
  const firstStr = [...arr[0].toLowerCase()],
    secondStr = [...arr[1].toLowerCase()];
  return secondStr.filter((el) => firstStr.indexOf(el) < 0) == 0;
};
const a = mutation(["HelLO", "elh"]);
console.log(a);
