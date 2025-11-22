const fs = require("fs");
console.log("Start reading..........");
fs.readFile("./data.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log("----------> file content <----------- ");
  console.log(data);
});

console.log("--------> Finished <----------");
