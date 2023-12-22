// Q1: https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let unique = new Set(); 
    for(let i = 0; i < nums.length; i++) {
        if(unique.has(nums[i])){
            return true;
        } else {
           unique.add(nums[i])
        }
    }
    return false;
};

const nums = [1,1];
console.log(containsDuplicate(nums));