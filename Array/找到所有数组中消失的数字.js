/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     var map = {};
//     var arr = [];
//     for(var i = 0;i<nums.length;i++){
//         if(map[nums[i]] === undefined){
//             map[nums[i]] = true;
//         }
//     }
//     for(var j=1;j<=nums.length;j++){
//         if(map[j] === undefined){
//             arr.push(j);
//
//         }
//     }
//     return arr;
// };
var findDisappearedNumbers = function(nums) {
    var fn = function(n){
        var c = nums[n-1];
        nums[n-1] = n;
        if( c !== n){
            fn(c);
        }
    };
    var arr = [];
    for(var i = 0;i<nums.length;i++){
        if(nums[i] !== i+1){
            fn(nums[i]);
        }
        if(nums[i] !== i+1){
            nums[i] = undefined;
        }
    }
    for(var i = 0;i<nums.length;i++){
        if(nums[i] === undefined){
            arr.push(i+1);
        }
    }
    return arr;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));