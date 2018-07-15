/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var count = 0;
    var max = -Infinity;
    var maxcount = 0;
    for(var i = 0;i<nums.length;i++){
        if(max < nums[i]){
            max = nums[i];
            count++;
        }else{
            max = nums[i];
            count = 1;
        }
        maxcount = Math.max(maxcount,count);
    }
    return maxcount;

    // if(nums.length === 0){
    //     return 0;
    // }
    // var count = 1;
    // var max = 1;
    // for(var i = 1;i<nums.length;i++){
    //     if(nums[i-1]>=nums[i]){
    //         count = 1;
    //     }else{
    //         count++
    //     }
    //     max = Math.max(max,count);
    // }
    // return max;
};
console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]));