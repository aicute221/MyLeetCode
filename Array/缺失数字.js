/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var map = {};
    for(var i = 0;i<nums.length;i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = true;
        }
    }

    for(var j = 0;j<=nums.length;j++){
       if(map[j] === undefined){
           return j;
       }
    }
};