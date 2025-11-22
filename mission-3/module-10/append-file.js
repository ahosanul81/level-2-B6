const fs = require("fs");

fs.writeFileSync("./app.log", "application started \n");
console.log("file created");

const logEntry1 = `${new Date().toISOString()}  "User logged in \n"`;
fs.appendFileSync("./app.log", logEntry1);
const logEntry2 = `${new Date().toISOString()}  "data fetched in \n"`;
fs.appendFileSync("./app.log", logEntry2);
