// ---1)
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

const twoSum = (nums, target) => {
  if(!nums || !target) return 

  let ansIndexes;
  nums.forEach((numElement, numElementIndex) => {
    nums.forEach((eachNum, eachNumIndex) => {
      if (numElement + eachNum === target && eachNumIndex !== numElementIndex) {
        ansIndexes = [numElementIndex, eachNumIndex];
        ansIndexes = ansIndexes.sort();
      }
    });
  });

  return ansIndexes;
};

let nums = [3, 3];
let target = 6;
const answer = twoSum(nums, target);
// console.log(answer);
