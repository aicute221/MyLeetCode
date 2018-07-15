/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};
    var arr = [];
    for(var i = 0;i<nums.length;i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = 1;
            arr.push( nums[i] );
        }else{
            map[nums[i]] = 0;
        }
    }
    for(var key in map){
       if(map[key] === 1){
           return parseInt(key);
       }
    }
};
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));