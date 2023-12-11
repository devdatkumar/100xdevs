const fs = require("fs").promises;

data = "yo boy! how you doing";
async function fswrite() {
  await fs.writeFile("data.txt", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved! with data: ", data);
  });
}

fswrite();
