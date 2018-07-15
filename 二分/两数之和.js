/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target){
    var start = 0;
    var end = numbers.length-1;
    while(numbers[start] + numbers[end] !== target  && start<end){
        var center = parseInt((start + end) / 2);
        if(numbers[center] > target){
            end = center;
        }else{
            if(numbers[start]+numbers[end] > target){
                end -= 1;
            }else if(numbers[start]+numbers[end] < target){
                start += 1;
            }
        }
    }
    return[start+1,end+1];
};