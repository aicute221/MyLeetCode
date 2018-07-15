/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var len=nums.length;
    var sum = 0;
    for(var i = 0;i<len;i++){
        sum += nums[i];
    }
    var count = 0;
    for(var i = 0;i<len;i++){
        if( sum-nums[i]-count === count ){
            return i;
        }
        count += nums[i];
    }
    return -1;
};
// console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([-1,-1,-1,0,1,1]));