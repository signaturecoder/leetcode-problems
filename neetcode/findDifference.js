/**
 * 
 * Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const s = "abcd", t = "abcde";
var findTheDifference = function(s, t) {
    const freqA = {};
        
    for(let i = 0; i < s.length; i++) {
        freqA[s[i]] = (freqA[s[i]] || 0 ) + 1;
    }

    console.log(freqA);

    for(let j = 0; j < t.length; j++) {
        if(!(t[j] in freqA)){
            return t[j];
        }
    }
};

findTheDifference(S, t);

const nums1 = [1,2,3], nums2 = [2,4]
var getCommon = function(nums1, nums2) {
    
    let lookup = {};
    for(let char of nums2){
        lookup[char] = (lookup[char] || 0 ) + 1;
    }

    for(let val of nums1) {
        if(val in lookup){
            return val;
        }
    }

    return -1;
};

getCommon(nums1, nums2);
