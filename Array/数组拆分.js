/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sum = 0;
    var len = nums.length ;
    nums.sort(function(a,b){
        return a-b;
    });
    for(var i = 0;i<len; i+=2){
        sum += nums[i]
    }
    return sum;
};
console.log(arrayPairSum([1,4,3,2]));