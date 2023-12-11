// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Example 1
const l1Ex1 = [2, 4, 3];
const l2Ex1 = [5, 6, 4];

// Example 2
const l1Ex2 = [0];
const l2Ex2 = [0];

// Example 3
const l1Ex3 = [9, 9, 9, 9, 9, 9, 9];
const l2Ex3 = [9, 9, 9, 9];

const addTwoNumbers = (l1, l2) => {
  // Input validation
  if (!Array.isArray(l1) || !Array.isArray(l2)) {
    throw new Error("Invalid input. Please provide valid linked lists.");
  }

  const num1 = l1.reverse().join("");
  const num2 = l2.reverse().join("");
  const sum = +num1 + +num2;
  const summedArray = sum
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return +str;
    });
  return summedArray;
};

const result1 = addTwoNumbers(l1Ex1, l2Ex1);
const result2 = addTwoNumbers(l1Ex2, l2Ex2);
const result3 = addTwoNumbers(l1Ex3, l2Ex3);
console.log(result1, result2, result3);
