/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// var matrixReshape = function(nums, r, c) {
//     var len = nums.length;
//     var sum = 0;
//     for(var i = 0;i<len;i++){
//         sum += nums[i].length;
//     }
//     // var sum = nums.reduce((x,y)=>x.length+y.length);
//     if(sum !== r*c){
//         return nums;
//     }else{
//         var arr = [];
//         for(var i = 0;i<len;i++){
//             for(var j = 0;j<nums[i].length;j++){
//                 arr.push(nums[i][j])
//             }
//         }
//         var num = [[]];
//         for(var i = 0;i<r;i++){
//             if(num[i] === undefined){
//                 num[i] = [];
//             }
//             for(var j = 0;j<c;j++){
//                 num[i][j] = arr[i*c+j]
//             }
//         }
//         return num;
//     }
// };
var matrixReshape = function(nums, r, c) {
    var a = nums.length;
    var b = nums[0].length;
    if(a*b !== r*c){
        return nums;
    }else{
       var arr = [];
       var num = [];
       var step = 1;
       for(var i = 0;i<a;i++){
           for(var j=0;j<b;j++){
               arr.push(nums[i][j]);
               if(step % c === 0){
                   num.push(arr);
                   arr = [];
               }
               step++;
           }
       }
        return num;
    }
};
console.log(matrixReshape([[1,2], [3,4]],1,4));
console.log(matrixReshape([[1,2], [3,4]],2,4));
console.log(matrixReshape([[1,2], [3,4]],4,1));
console.log(matrixReshape([[1,2], [3,4]],2,2));
// console.log(matrixReshape([[1],[2,3], [4,5,6]],2,3));