/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var num = [];
    for(var i = 0;i<findNums.length;i++){
        for(var j = nums.indexOf(findNums[i]);j<nums.length;j++){
            if(nums[j]>findNums[i]){
                num.push(nums[j]);
                break;
            }
            if(j === nums.length-1){
                num.push(-1);
            }
        }
    }
    return num;
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));
console.log(nextGreaterElement([2,4],[1,2,3,4]));
console.log(nextGreaterElement([3,1,5,7,9,2,6],[1,2,3,5,6,7,9,11]));