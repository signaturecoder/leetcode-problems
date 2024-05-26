/**
 * 
 */
const arrA = [1, 5, 7];
const arrB = [1, 25, 49];

function same(arrA, arrB) {
    const lenA = arrA.length;
    const lenB = arrB.length;

    // edge case
    if(lenA === 0 || lenB === 0) return false;
    if(lenA !== lenB) return false;

    for(let i = 0; i < lenA; i++) {
        const sqaured = arrA[i]*arrA[i];
        const flag = false;

        for(let j = 0; j < lenB; j++) {
            if(arrB[j] === sqaured){
                flag = true;
            }
        }

        if(!flag) return false;
    }

    return true;
}

console.log(same(arrA, arrB));



