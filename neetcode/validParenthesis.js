/**
 * https://leetcode.com/problems/valid-parentheses/description/
 */

 /**
 * @param {string} s
 * @return {boolean}
 */

 /**
  * Approach: 
  *  1. If the length of the string is odd, it means it has not been a balannced parenthesis.
  *  2. If the first character of string is any of the closing bracket then it is not valid parenthesis.
  *  3. If the last character of string is any of the opening bracket then it is also not valid parenthesis.
  * 
  *  We create an empty stack and a hast table consist of pair brackets as key-value pairs.
  *  Now, We traverse the string to check 
  *    a. if we found opening bracket, we will push the character to the stack.
  *    b. Else, we remove the last item from the stack and check if it is not the complimentary of the opening bracket 
  *    then it is not valid 
  * 
  *  Last we check if the stack is empty then it is valid otherwise not.
  */
 
var isValid = function(s) {
    const dataset = s.split('');
    const length = dataset.length;

    // Edge Cases
    if(length % 2 !== 0) return false;
    if([')', '}', ']'].includes(dataset[0])) return false;
    if(['(', '{', '['].includes(dataset.length - 1)) return false;


    const stack = [];
    const pair = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    for(let i = 0; i < length; i++) {
        if(['(', '{', '['].includes(s[i])) {
            stack.push(dataset[i]);
        } else {
            let pop_item = stack.pop();
            if(pair[pop_item] !== dataset[i]) return false;
        }
    }

    return stack.length ? false : true;
};

const s = "()[]";
console.log(isValid(s));