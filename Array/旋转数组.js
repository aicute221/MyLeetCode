/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     var arr = nums.splice(nums.length-k,k);
//     nums = arr.concat(nums);
//     return nums;
// };
var rotate = function(nums, k) {
    var y ;
    for(var i = 0;i<nums.length;i++){

        nums[nums.length-k] = y;
        nums[i] = y;
        nums[i+k] = nums[i];
    }
    return nums;


};
console.log(rotate([1,2,3,4,5,6,7],3));