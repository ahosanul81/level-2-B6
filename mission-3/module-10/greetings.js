const args = process.argv;
const name = args[2] || "guest";

const time = new Date().getHours();
let greeting;
if (time > 6 && time < 11) {
  greeting = "Good noon";
} else if (time > 12 && time < 16) {
  greeting = "Good afternood";
} else if (time > 17) {
  greeting = "Good evening";
} else {
  greeting = "good night";
}
console.log(`${greeting}, ${name}`);
