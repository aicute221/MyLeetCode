/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//     var arr = [];
//     for(var i = 0;i<nums.length;i++){
//         if(nums[i] === 0){
//             arr.push(i);
//         }
//     }
//     if(nums[0] !== 0){
//         arr.unshift(-1);
//     }
//     if(nums[nums.length-1] !== 0){
//         arr.push(nums.length);
//     }
//     var max = 0;
//     for(var j = 0;j<arr.length-1;j++){
//         max = Math.max(max,arr[j+1]-arr[j]-1)
//     }
//     return max;
// };
var findMaxConsecutiveOnes = function(nums) {
    var map = {max:0,sum:0};
    for(var i = 0;i<nums.length;i++){
        if(nums[i] === 1){
            map.sum++;
        }else{
            map.sum = 0;
        }
        map.max = Math.max(map.max,map.sum)
    }
    return map.max;
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));