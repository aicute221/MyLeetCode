/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var arr = [];
    for(var i = 0 ,len = nums.length;i<len;i++){
        var x = nums[i];
        if(map[target-x]!==undefined){
            arr.push( map[target-x] );
            arr.push(i);
        }
        map[x] = i;
    }
    return arr;
};
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,3],6));