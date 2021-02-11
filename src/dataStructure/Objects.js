/*
 A foods object has been created with three entries.
 Using the syntax of your choice, add three more entries to it:
 bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

/*Here we've defined an object userActivity, which includes another object nested within it. 
  Set the value of the online key to 45.*/

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

/*
We've defined a function, checkInventory, which receives a scanned item as an argument. 
Return the current value of the scannedItem key in the foods object. 
You can assume that only valid keys will be provided as an argument to checkInventory.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  food[scannedItem];
}

console.log(checkInventory("apples"));
