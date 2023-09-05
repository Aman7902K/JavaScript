for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i}*${j}=${i*j}`);
    }
}
// Initialize an empty string to store the pattern
let pattern = "";

// Loop through rows
for (let i = 5; i >=1 ; i--) {
  // Loop through columns
  pattern += i*"_"
  for (let j = 5; j >= i; j--) {
    // Add a star (*) to the pattern
    pattern += "* ";
  }
  // Add a line break at the end of each row
  pattern += "\n";
}

// Print the pattern
console.log(pattern);