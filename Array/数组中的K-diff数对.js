/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var arr = [];
    var number = 0;
    var sum = null;
    for(var i = 0;i<nums.length;i++){
        if(arr.indexOf(nums[i]) === -1){
            arr.push(nums[i]);
            sum = 1;
        }else{
            if(k ===0 && sum <2){
                arr.push(nums[i]);
                sum++;
            }
        }
    }
    for(var i = 0;i<arr.length-1;i++){
        for(var j = i+1;j<arr.length;j++){
            if(Math.abs(arr[j]-arr[i]) === k){
                number++;
            }
        }
    }
    return number;
};
console.log(findPairs([3,1,4,1,5],2));
console.log(findPairs([1,2,3,4,5],1));
console.log(findPairs([1,3,1,5,4],0));
console.log(findPairs([1,1,1,1,1],0));