/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var map = {};
    var arr = [];
    nums.forEach(function(num){
        var x = map[num];
        x ? arr.push(num) : map[num]=true;
    });
    // for(var i = 0;i<nums.length;i++){
    //     var key = nums[i];
    //     if(map[key] === undefined){
    //         map[key] = true;
    //     }else{
    //         arr.push(key);
    //     }
    // }
    for(var i = 1;i<=nums.length;i++){
       if(map[i] === undefined){
           arr.push(i)
       }
    }
    return arr;
};
console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([1,2,2,3,4]));