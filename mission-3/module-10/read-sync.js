const fs = require("fs");
console.log("Start reading..........");
try {
  const data = fs.readFileSync("./data.txt", "binary");
  console.log("----------> file content <----------- ");
  console.log(data);
} catch (error) {
  console.log(error);
}

console.log("--------> Finished <----------");
