/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // if(nums.length === 0){
    //     return 0
    // }
    // nums.sort(function(a,b){
    //     return a-b;
    // });
    // var max = -Infinity;
    // var exit = true;
    // for(var i = 0;i<nums.length-1;i++){
    //     var small = nums[i];
    //     var big = small+1;
    //     var index = nums.lastIndexOf(big);
    //     if(index !== -1){
    //         exit = false;
    //         max = Math.max(max,index-i+1);
    //     }
    // }
    // return exit? 0:max;

    if(nums.length === 0){
        return 0;
    }
    var map = {};
    var arr = [];
    nums.forEach(function(num){
        if(map[num] === undefined){
            map[num]=1;
            arr.push(num)
        }else{
            map[num]++;
        }
    });
    console.log(map,arr);
    var count_max = 0;
    for(var i = 0;i<arr.length;i++){
        var key = arr[i];
        if(map[key+1]){
            var count = map[key]+map[key+1];
            count_max = Math.max(count_max,count);
        }
    }
    return count_max;
};
console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([1,1,1,1]));
console.log(findLHS([1,2,2,1]));
console.log(findLHS([1,3,5,7,9,11,13,15,17]));
console.log(findLHS([25202362,50490027,83368690,2520059,44897763,67513926,65180540,40383426,4089172,3455736]));
console.log(findLHS([1,2,3,3,1,-14,13,4]));
console.log(findLHS([2,3,3,2,-2,0,3,3,3,1,-2,1,0,1,2,0,2,2,2,1,2,2,1,1,2,2]));