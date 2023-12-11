// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// {}[]()
// ()]

// {()}


const isValid = (s) => {
  const getBracketTypes = (arr) => {
    const bracketTypes = {
      "(": false,
      "[": false,
      "{": false,
    };
    if (arr.includes("(") || arr.includes(")")) {
      bracketTypes["("] = true;
    }
    if (arr.includes("[") || arr.includes("]")) {
      bracketTypes["["] = true;
    }
    if (arr.includes("{" || arr.includes("}"))) {
      bracketTypes["{"] = true;
    }
    return bracketTypes;
  };

  if (!s || s.length % 2 !== 0) {
    return false;
  }

  let isValid = false
  let bracketTypes = getBracketTypes(s);

  if (bracketTypes["("]) {
    if (s.includes("()")) {
      isValid = true;
    } else {
      isValid = false;
    }
  }

  if (bracketTypes["["]) {
    if (s.includes("[]")) {
      isValid = true;
    } else {
    //   isValid = false;
    const arr = s.split('')
    }
  }
  if (bracketTypes["{"]) {
    if (s.includes("{}")) {
      isValid = true;
    } else {
      isValid = false;
    }
  }

  return isValid;
};
const answer1 = isValid("(){}[]");
// console.log(answer1);
