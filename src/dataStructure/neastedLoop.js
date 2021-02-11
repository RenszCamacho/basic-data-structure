// for (let i = 0; i < 24; i++) {
//   for (let j = 0; j < 60; j++) {
//     i === 7 && j === 15
//       ? console.log(`hora: ${i}:${j} => Despierta!`)
//       : // : console.log(`hora: ${i}:${j}`);
//         "";
//   }
// }

// var list = [1, 2, 3, 4];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= 12; j++) {
    setInterval(
      function () {
        console.log(j);
      },
      j * 1000,
      i
    ); // we're passing x
    // console.log("%d => %d", i, j);
  }
}

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; i < 10; i++) {
//     // console.log(i, j);
//     setTimeout(
//       function () {
//         console.log(i, j);
//       },
//       2000,
//       i
//     );
//   }
// }
