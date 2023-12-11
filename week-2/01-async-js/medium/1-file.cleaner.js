const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  data = data.replace(/\s+/g, " ");
  fs.writeFile("data.txt", data, (err) => {
    console.log(data);
  });
});
