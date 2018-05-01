/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     var index1 = 0;
//     var index2 = 0;
//     var i_start = 0;
//     var i_end = numbers.length-1;
//     for(var i = i_start; i <= i_end;){
//         if( numbers[parseInt(i_end/2)] >= target){
//             i_end = parseInt(i_end/2);
//
//         }else if( numbers[parseInt(i_end/2)] <= target){
//             if(numbers[parseInt(i_end/4)] > target/2){
//                 i_end = parseInt(i_end/4);
//             }
//
//         }
//     }
// };

//双层循环
// var twoSum = function(numbers, target) {
//     for(var i = 0;i<numbers.length;i++){
//         for(var j= i+1;j<numbers.length;j++){
//             if(numbers[i] + numbers[j] === target){
//                     return[i+1,j+1]
//             }
//         }
//     }
// };

//前后同时进行
var twoSum = function(numbers, target){
    var index1 = 0;
    var index2 = numbers.length-1;
    while(index1<index2){
        var sum = numbers[index1]+numbers[index2];
        if(sum > target){
            index2 -= 1;
        }else if(sum < target ){
            index1 += 1;
        }else if(sum === target ){
            return[index1+1,index2+1];
        }
    }
    return[];
};

// var twoSum = function(numbers, target){
//     var index1 = 0;
//     var index2 = numbers.length-1;
//     while( numbers[index1] + numbers[index2] !== target ){
//         if( numbers[index1]+numbers[index2] > target && index1<index2){
//             index2 -= 1;
//         }else if(numbers[index1]+numbers[index2] < target && index1<index2){
//             index1 += 1;
//         }
//     }
//     return[index1+1,index2+1];
// };
console.log(twoSum([2,7,11,15],9));