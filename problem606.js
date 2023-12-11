// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
const largestOddNumber = (num) => {
  if (num % 2 !== 0) return num.toString(); //Returning number If num it self is an odd number
  const splittedNum = num.toString().split("");

  // Checking if whole number had no odd number
  if (!splittedNum.find((num) => num % 2 !== 0)) return "";

  const highestOddNum = splittedNum.sort()[splittedNum.length - 1];
  return highestOddNum;
};

const res = largestOddNumber("12");
console.log(res);
