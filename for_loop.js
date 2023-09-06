for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i}*${j}=${i*j}`);
    }
}
let pattern = "";

for (let i = 5; i >=1 ; i--) {
  for (let j = 5; j >= i; j--) {
    pattern += "* ";
  }
  pattern += "\n";
}

// Print the pattern
console.log(pattern);

//         *
//       * *
//     * * *
//   * * * *
// * * * * * 