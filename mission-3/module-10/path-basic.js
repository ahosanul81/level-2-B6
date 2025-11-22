const path = require("path");

console.log("current file info \n");
console.log("filename -", __filename);
console.log("directoryName -", __dirname);

console.log("\n " + "-".repeat(50) + "\n");

const filePath = "/shafaet/document/next.pdf";
console.log("filepath:", filePath, "m");
console.log("Directory: ", path.dirname(filePath));
console.log("Base name: ", path.basename(filePath));
console.log("File extension:", path.extname(filePath));
console.log("File name:", path.basename(filePath, path.extname(filePath)));

console.log("\n " + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("Formated path: ", path.format(parsed));
