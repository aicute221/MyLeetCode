/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     if(nums.length===1 || nums === []){
//         return false;
//     }
//     for(var i = 0;i<nums.length;i++){
//         var sum = 0;
//         for(var j = i;j<nums.length;j++){
//             if(nums[j] === nums[i]){
//                 sum++;
//             }
//         }
//         if(sum>1){
//             return true;
//         }
//     }
//     return false;
// };

// var containsDuplicate = function(nums) {
//     for(var i = 0;i<nums.length;i++){
//         if(nums.lastIndexOf(nums[i]) === i){
//             continue;
//         }else{
//             return true;
//         }
//     }
//     return false;
// };

var containsDuplicate = function(nums) {
    var map = {};
    for(var i = 0;i<nums.length;i++){
        if(map[nums[i]]){
            return true;
        }
        map[nums[i]] = true;
    }
    return false;
};
console.log(containsDuplicate([3,1]));