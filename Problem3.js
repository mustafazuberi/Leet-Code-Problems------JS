//Solved

//  Longest Substring Without Repeating Characte
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// substring ---Without repeating characters

const lengthOfLongestSubstring = (s) => {
  let end = 0;
  let start = 0;
  let maxLength = 0;

  if (!s) return 0;

  const uniqueChars = new Set();

  while (end < s.length) {
    if (!uniqueChars.has(s[end])) {
      uniqueChars.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueChars.size);
    } else {
      uniqueChars.delete(s[start]);
      start++;
    }
  }

  return maxLength;
};
let s = "abcabcbb";
const answer2 = lengthOfLongestSubstring(s);
