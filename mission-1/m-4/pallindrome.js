// O(n)
var isPalindrome = function (str) {
  const normalizeStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(normalizeStr);
  const isPalindrome = normalizeStr.split("").reverse().join("");
  //   console.log(isPalindrome);

  return normalizeStr === isPalindrome;
};
console.log(isPalindrome("A man, a plan, a canal Panamar"));

// tow pointer approach // O(n)

const palindromPointer = (str) => {
  const normalizeStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalizeStr.length - 1;

  while (left < right) {
    if (normalizeStr[left] !== normalizeStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(palindromPointer("A man, a plan, a canal Panama"));
