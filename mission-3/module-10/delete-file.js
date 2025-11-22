const fs = require("fs");

fs.writeFileSync("./temp.txt", "this is temp file");
console.log("file created");

if (fs.existsSync("./temp.txt")) {
  console.log("file exist");
  fs.unlinkSync("./temp.txt");
  console.log("file deleted");
}
