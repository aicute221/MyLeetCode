/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // if(nums.length ===1){
    //     return 0;
    // }
    // var num = nums.slice(0);
    // num.sort(function(x,y){
    //     return x-y;
    // });
    // var a = num[num.length-1];
    // var b = num[num.length-2];
    // if( a >= 2*b){
    //     return nums.indexOf(a);
    // }else{
    //     return -1;
    // }

    if(nums.length ===1){
        return 0;
    }
    var max = -Infinity;
    for(var i = 0;i<nums.length;i++){
        max = Math.max(max,nums[i]);
    }
    for(var i = 0;i<nums.length;i++){
        if(max < 2*nums[i]){
            if(nums[i] === max){
                continue;
            }
            return -1
        }
    }
    return nums.indexOf(max);

    // if(nums.length ===1){
    //     return 0;
    // }
    // var max1 = max2 = maxindex =0;
    // for(var i = 0;i<nums.length;i++){
    //     if(nums[i]>max2){
    //         if(nums[i] > max1){
    //             max2 = max1;
    //             max1 = nums[i];
    //             maxindex = i;
    //         }else{
    //             max2 = nums[i];
    //         }
    //     }
    // }
    // return max1 >= 2*max2 ? maxindex:-1;

};
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));