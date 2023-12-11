/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const calculateTotalSpentByCategory = require("../easy/expenditure-analysis");

function calculateTime(n) {
  const t1 = new Date().getTime();
  sum = 0;
  for (i = 0; i < n; i++) {
    sum += i;
  }
  const t2 = new Date().getTime();
  return t2 - t1;
}

console.log(calculateTime(100) / 1000);
console.log(calculateTime(1000) / 1000);
console.log(calculateTime(500000000) / 1000);
