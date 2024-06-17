/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let cnt = 0;
    for(let i = 1; i < arr.length + k; i++) {
        let flag = false;
        for(let j = 0; j < arr.length; j++) {
            if(i === arr[j]){
                flag = true;
            }
        }
        if(!flag) {
            cnt++;
        }

        if(cnt === k)
            return i;
    }
     
};
const arr = [1,2,3,4], k = 2;
console.log(findKthPositive(arr, k));

/**
 * [2, 3, 4, 7, 11], k = 5
 * 
 * calculate missing integer first and return the kth element
 * for(let i = 1; i < a.length + k; i++) {
 *  if(a[i] !== i) {
 *          cnt++;
 *  }
 * if(cnt === k){
 * return i;
 * }
 * }
 * run loop while count 
 */