/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {};
    for(var i = 0;i<nums.length;i++){
        if( map[nums[i]]!==undefined && i-map[nums[i]]<=k){
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};
console.log(containsNearbyDuplicate([-1,-1],1));
console.log(containsNearbyDuplicate([1,2,1],1));