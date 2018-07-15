/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // var i_start = null;
    // var i_end = null;
    // var len = nums.length;
    // for(var i = 0;i<len-1;i++){
    //     for(var j = i+1;j<len;j++){
    //         if(nums[i]>nums[j]){
    //             if(i_start === null){
    //                 i_start = i;
    //                 break
    //             }
    //         }
    //     }
    // }
    // console.log(i_start);
    // for(var i = len-1;i>0;i--){
    //     for(var j = i-1;j>=0;j--){
    //         if(nums[i]<nums[j]){
    //             if(i_end === null){
    //                 i_end = i;
    //                 break
    //             }
    //         }
    //     }
    // }
    // console.log(i_end);
    // var num = i_end - i_start+1;
    // if(i_start === null){
    //     return 0;
    // }else{
    //     return num;
    // }

    var i_start = null;
    var i_end = null;
    var len = nums.length;
    var num = nums.slice(0);
    num.sort(function(a,b){
        return a-b;
    });
    for(var i = 0;i<len;i++){
        if(nums[i] !== num[i]){
            i_start = i;
            break;
        }
    }
    for(var i = len-1;i>0;i--){
        if(nums[i] !== num[i]){
            i_end = i;
            break;
        }
    }
    var step = i_end - i_start+1;
    if(i_start === null){
        return 0;
    }else{
        return step;
    }
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));