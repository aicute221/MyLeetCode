/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     var max_result = 0;
//     for(var i = 0;i<prices.length;i++){
//         var max = 0;
//         var result = 0;
//         for( var j = i + 1; j<prices.length ; j++){
//             if( prices[j] > prices[i] && prices[j] > max){
//                 max = prices[j];
//             }
//         }
//         result = max - prices[i];
//         max_result = Math.max(result,max_result)
//     }
//     return max_result;
// };
var maxProfit = function(prices) {
   var min = prices[0];
   var result_max = 0;
   for(var i = 1;i<prices.length;i++){
       if(min > prices[i]){
           min = prices[i]
       }else{
           result_max = Math.max(prices[i] - min,result_max)
       }
   }
   return result_max;
};
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([1,10,3,4,5]));
console.log(maxProfit([11,10,20,4,22]));