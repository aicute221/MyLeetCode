/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var len = nums.length;
    var sum = nums[0];
    for(var i = 1;i<k;i++){
        sum += nums[i];
    }
    var max = sum;
    if(k === len){
       return max/k;
    }
    for(var j = 1;j<= len-k;j++){
        sum = sum-nums[j-1]+nums[j+k-1];
        max = Math.max(max,sum);
    }
    return max/k;
    // var len = nums.length;
    // var max = -Infinity;
    // for(var i = 0;i<=len-k;i++){
    //     var sum = nums[i];
    //     for(var j = i+1;j<i+k;j++){
    //         sum += nums[j];
    //     }
    //     max = Math.max(max,sum);
    // }
    // return max/k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3],4));
console.log(findMaxAverage([4,0,4,3,3],5));
console.log(findMaxAverage([9,7,3,5,6,2,0,8,1,9],6));