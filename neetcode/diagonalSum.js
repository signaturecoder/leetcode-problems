/**
 * @param {number[][]} mat
 * @return {number}
 */

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var diagonalSum = function (mat) {
    // declare a variable to store the sum of diagonal
    // calculate the size of matrix
    // loop over the matrix till the size of it
    //    If both the indexes of element are equal and add it to sum
    //    If sum of both the indexes are 1 less than the size of matrix, add it to the sum

    let sum = 0;
    let size = mat[0].length;

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if(i === j) {
                sum += mat[i][j];
            } else if(i + j === size - 1) {
                sum += mat[i][j];
            }
        }
    }

    return sum;
};

// Time: O(N**2)
console.log(diagonalSum(mat));

// optimizesolution

// Using a loop two times

var diagonalSumOptimized = function (mat) {
    let sum = 0;
    let size = mat[0].length;
    console.log(size);
    let i = 0; j = 0;
    while(i < size) {
        sum += mat[i][j];
        i++;
        j++;
    }

    i =0, j = size -1;
    while(i < size) {
        if(i!=j)
            sum+=mat[i][j];
        i++;
        j--; 
    }

    return sum;
};
// Time: O(N) Space: O(1)
console.log(diagonalSumOptimized(mat));
