// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


const addTwoNumbers = (l1, l2) => {
    const num1 = l1.reverse().join('')
    const num2 = l2.reverse().join('')
    const sum = +num1 + +num2
    const sumArrString = sum.toString().split('').reverse()
    
    const ans = sumArrString.map((str) => {
        return +str
    })
    return ans
};

const l1 = [2,4,3]
const l2 = [5,6,4]
addTwoNumbers(l1,l2)