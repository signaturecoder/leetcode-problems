/**
 * 
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 * Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str = [...s];
    let left = 0, right = str.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while(left < right) {
        if(vowels.includes(str[left]) && vowels.includes(str[right])) {
            [str[right], str[left]] = [str[left], str[right]];
            left++;
            right--;
        } else if(vowels.includes(str[left])) {
            right--;
        } else {
            left++;
        }
    }
    return str.join('');
};


var reverseOnlyLetters = function(s) {
    let str = [...s];
    let left = 0, right = str.length - 1;
    while(left < right) {
        let strFromLeft = (str[left].charCodeAt(0) >= 65 && str[left].charCodeAt(0) <= 90) || (str[left].charCodeAt(0) >= 97 && str[left].charCodeAt(0) <= 122);
        let strFromRight = (str[right].charCodeAt(0) >= 65 && str[right].charCodeAt(0) <= 90) || (str[right].charCodeAt(0) >= 97 && str[right].charCodeAt(0) <= 122);
        if(strFromLeft && strFromRight) {
            [str[right], str[left]] = [str[left], str[right]];
            left++;
            right--;
        } else if (strFromLeft) {
            right--;
        } else {
            left++;
        }
    }
    return str.join('');
};

const s = "a-bC-dEf-ghIj"
// console.log(reverseOnlyLetters(s));


var removeElement = function(nums, val) {
    const filteredArr = nums.filter(item => item !== val);
    return filteredArr.length;
};

console.log(removeElement([3,2,2,3], 3));


var reverseWords = function(s) {
    const strWithoutSpace = s.split(" ").filter(item => item !== '');
    let result = '';
    for(let i = strWithoutSpace.length - 1; i >= 0; i--) {
        result += strWithoutSpace[i] + " ";
    }
    return result.trim();
};

const str ="a good   example";
console.log(reverseWords(str));