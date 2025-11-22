const course1 = { name: "Programming hero " };
const course2 = { name: "Next level web development " };

const map = new Map();

map.set(course1, { course: "level - 1" });
map.set(course2, { course: "level - 2" });
// map.delete(course1);
console.log(map.has(course2)); // true / false
// map.forEach((value, key) => (key.name = "asdf " + key.name));
// console.log(map.keys());
// console.log(map.values());

// for (let key of map.keys()) {
//   key.name = "Abc " + key.name;
// }

console.log(map.entries());
console.log(map);
