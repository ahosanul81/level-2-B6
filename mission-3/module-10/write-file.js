const fs = require("fs");
const content1 = "this is sync content to file ";
try {
  fs.writeFileSync("./test-write-sycn.txt", content1);
  console.log("file written sync");
} catch (error) {
  console.error(error);
}

const content2 = "this is async content to file ";

fs.writeFile("./test-write-async.txt", content2, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("file written asynchronously");
  }
});
