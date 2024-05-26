//Q1: https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // if both strings are of unequal length
  if (s.length !== t.length) return false;

  // sort both the strings
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");

  // compare both the strings
  if (str1 === str2) return true;
  else return false;
};

// case 1:
const s = "anagram",
  t = "nagaram";

// case 2:
// const s = "rat",
//   t = "car";
console.log(isAnagram(s, t));


function validAnagram(arrA, arrB) {
  if(arrA.length !== arrB.length) return false;

  let freqA = {}, freqB = {};
  for(let char of arrA) {
    freqA[char] = (arrA[char] || 0 ) + 1;
  }

  for(let char of arrB) {
    freqB[char] = (arrB[char] || 0 ) + 1;
  }

  for(let key in freqA) {
    if(!(key in freqB))
        return false;
    if(freqB[key] !== freqA[key])
        return false;
  }

  return true;
}

validAnagram(s,t);
