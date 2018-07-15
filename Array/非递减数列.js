/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(nums.length === 1){
        return true;
    }
    var count = 0;
    nums[-1] = -Infinity;
    nums[nums.length] = Infinity;
    for(var i = 1;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
           if(nums[i-2]<=nums[i-1] && nums[i-1]<=nums[i+1]){
               count++;
               if(count>1){
                   return false;
               }
               nums[i] = nums[i-1];
               continue;
           }
           if(nums[i-2]<=nums[i] && nums[i]<=nums[i+1]){
               count++;
               if(count>1){
                   return false;
               }
               nums[i-1] = nums[i];
               continue;
           }
           return false;
        }
    }
    return true;
};
console.log(checkPossibility([2,3,4,3,4]));
console.log(checkPossibility([1,2,4,5,3]));
console.log(checkPossibility([3,3,2,2]));
console.log(checkPossibility([3,2,3,2,4]));
console.log(checkPossibility([3,4,2,3]));
console.log(checkPossibility([1,3,2,5,4]));
