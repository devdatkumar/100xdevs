/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("One second has passed");
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Two seconds have passed");
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Three seconds have passed");
      resolve();
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const startTime = new Date();
  const promises = [wait1(t1), wait2(t2), wait3(t3)];
  await Promise.all(promises);
  const endTime = new Date();
  const elapsedTime = endTime - startTime;
  return elapsedTime;
  console.log(`All promises resolved in ${elapsedTime} milliseconds`);
}

module.exports = calculateTime;
