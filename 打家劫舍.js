/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    if(len===0){
        return 0;
    }
    if(len===1){
       return nums[0];
    }
    var arr = [];
    arr[0] = nums[0];
    arr[1] = Math.max(nums[0],nums[1]);
    // arr[2] = Math.max(nums[0]+nums[2],nums[1]);
    for(var i = 2;i<len;i++){
        arr[i] = Math.max(arr[i-2]+nums[i],arr[i-1]);
    }
    return arr[len-1]
};
console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([1,3,1,3,100]));