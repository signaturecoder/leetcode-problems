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
