// SOLVED
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

const findSpecialInteger = (arr) => {
  const counts = {};
  //This will create num as a key and add after counting each num in key as a value
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // finding highset valued key in counts
  let mostCommonInteger;
  let maxCount = 0;
  for (let key in counts) {
    if (counts[key] > maxCount) {
      mostCommonInteger = key;
      maxCount = counts[key];
    }
  }

  return mostCommonInteger;
};
const res = findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]);
console.log("The most repetitive integer is:", res);
