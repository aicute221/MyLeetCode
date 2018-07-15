/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) !== -1){
        return nums.indexOf(target);
    }
    if(target<nums[0]){
        return 0;
    }
    var len = nums.length;
    if(target>nums[len-1]){
        return len;
    }
    var start = 0;
    var end = nums.length-1;

    while(nums.indexOf(target) === -1 && start<end){
        if(target>nums[parseInt((start+end)/2)]){
            start = parseInt((start+end)/2);
            if(target<nums[start+1]){
                return start+1;
            }
        }else{
            end = parseInt((start+end)/2);
            if(nums[end-1]<target){
                return end
            }
        }
    }
    // while(target > nums[parseInt((start+end)/2)]){
    //     start = parseInt((start+end)/2);
    //     if(nums[start]<target && target<nums[start+1]){
    //         return start+1;
    //     }
    // }
    // while(target < nums[parseInt(end/2)]){
    //     end = parseInt(end/2);
    //     if(nums[end-1]<target && target<nums[end]){
    //         return end;
    //     }
    // }


};
console.log(searchInsert([1,3,5,6],7));