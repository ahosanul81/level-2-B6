const twoSum = (arr, target) => {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(target - arr[i])) {
      return [hashMap.get(target - arr[i]), i];
    } else {
      hashMap.set(arr[i], i);
    }
  }
};

console.log(twoSum([2, 5, 8, 8, 10, 7, 11], 9));
