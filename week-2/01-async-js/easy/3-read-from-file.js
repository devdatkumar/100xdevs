const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  expensiveOperation();
  console.log(data);
});

function expensiveOperation() {
  for (let i = 0; i < 10000000000; i++) {
    i++;
  }
}
