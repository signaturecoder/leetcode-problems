/**
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const freqA = {};
        
    for(let i = 0; i < s.length; i++) {
        freqA[s[i]] = (freqA[s[i]] || 0 ) + 1;
    }
    let count = 0;
    for(let j = 0; j < t.length; j++) {
        let char = t[j];
        if(char in freqA && freqA[char] > 0){
            freqA[char]--;
        } else {
            count++;
        }
    }
    return count;
};

const s = "anagram", t = "mangaar";
console.log(minSteps(s, t));
