/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var len = nums.length;
    var min = nums[0];
    var max = nums[len-1];
    if(target<min || target>max){
      return -1;
    }
    var start = 0;
    var end = len-1;
    while(start <= end){
        var point = parseInt((end+start)/2);
        if(nums[point]>target){
            end = point-1;
            continue;
        }
        if(nums[point]<target){
            start = point+1;
            continue;
        }
        if(nums[point]===target){
            return point;
        }
    }
    return -1;

};
console.log(search([-1,0,3,5,9,12],9));
console.log(search([-1,0,3,5,9,12],2));
console.log(search([5],5));