/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var pass = [];
    for(var i = 0;i<nums.length;i++){
        var num = nums[i];
        var sum = 0;
        if(pass.indexOf(nums[i]) !== -1){
            continue;
        }
        for(var j = i;j<nums.length;j++){
            if(nums[j] === num){
                sum++;
            }
        }
        if(sum > Math.floor(nums.length/2)){
            return num;
        }else{
            pass.push(num);
        }
    }
};
console.log(majorityElement([1]));
console.log(majorityElement([8,8,7,7,7]));