function getPipelineStatus(arr, range) {
    const startIndex = range[0];
    const endIndex = range[range.length-1];
    let successCnt = 0, failureCnt = 0;
    let result = '';

    for(let i = startIndex; i <= endIndex; i++) {
        if(arr[i]){
            successCnt++;
        } else {
            failureCnt++;
        }
    }
    result = `${successCnt} Success, ${failureCnt} Failure`;


    return result;

}

function getStatusForRanges(arr, ranges) {
    let resultArr = [];
    ranges.forEach(range => resultArr.push(getPipelineStatus(arr, range)));
    return resultArr;
}

const statusArr = [true, false, true, true, false, true, true, true, false, false];
// const range = [3,6];
const ranges = [[3, 6], [1, 3], [2, 4]];

console.log("REsult ", getStatusForRanges(statusArr, ranges));
// console.log(getPipelineStatus(statusArr, range));