/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    k = k%len;
    var arr = nums.splice(len-k,k);
    for(var i = k-1;i>=0;i--){
        nums.unshift(arr[i]);
    }
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([-1],2));