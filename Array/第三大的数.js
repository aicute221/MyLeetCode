/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var arr = [];
    for(var i =0;i<nums.length;i++){
        if(arr.indexOf(nums[i]) === -1 ){
            arr.push(nums[i]);
        }
    }
    if(arr.length === 1){
        return arr[0];
    }
    if(arr.length === 2){
        return Math.max(arr[0],arr[1]);
    }
    if(arr.length>2){
        var map = {first:arr[0],second:-Infinity,third:-Infinity};
        for(var j = 1; j<arr.length; j++){
            if(map['first'] < arr[j]){
                map['third'] = map['second'];
                map['second'] = map['first'];
                map['first'] = arr[j];
            }else if(map['first'] > arr[j]){
                if(map['third'] < arr[j]){
                    map['third'] = Math.min(map['second'],arr[j]);
                    map['second'] = Math.max(map['second'],arr[j]);
                }
            }
        }
        return map['third'];
    }
};
console.log(thirdMax([3,2,1]));
console.log(thirdMax([1,2,2,5,3,5]));
console.log(thirdMax([1,2,5,3]));
console.log(thirdMax([5,2,4,1,3,6,0]));

