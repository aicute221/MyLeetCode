/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var first_zero = null;
    for(var i = 0;i<nums.length;i++){
        if(nums[i] === 0){
            if(first_zero === null){
                first_zero = i;
            }
        }else{
            if(first_zero !== null){
                nums[first_zero] = nums[i];
                nums[i] = 0;
                first_zero++;
            }
        }
    }
};
var a = [1];
moveZeroes(a);
console.log(a);
