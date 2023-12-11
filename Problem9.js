// SOLVED (But have to do without converting it in Integer)

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = (x) => {
  const reversedX = Number(x.toString().split("").reverse().join(""));
  if (x === reversedX || x === " ") return true;
  return false;
};

const res = isPalindrome(121);

// Without converting in to integer
const isIntegerPalindrome = (x) => {
  const splittedX = x.split("").map((numX) => Number(numX));
  return splittedX;
};

const resPalindromeInt = isIntegerPalindrome("432");
// console.log(resPalindromeInt);
