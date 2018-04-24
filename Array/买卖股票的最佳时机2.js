/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     var sum_max = 0;
//     var sum = 0;
//     var min = prices[0];
//     for(var i = 1;i<prices.length;i++){
//         if( min>prices[i]){
//             if(prices[i]<prices[i+1] ){
//                 min = prices[i]
//             }else if(prices[i]>prices[i+1]){
//                 min = prices[i+1];
//                 i+=1;
//             }
//         }else if(min<prices[i]){
//             if(prices[i]>prices[i+1]){
//                 sum = prices[i]-min;
//                 sum_max += sum;
//                 min = prices[i+1];
//                 i+=1;
//             }else if( prices[i]<prices[i+1]){
//                 if(min = prices[i-1]){
//                     sum = Math.max(prices[i+1]-min,sum) ;
//                     sum_max += sum;
//                 }else{
//                     sum_max += sum;
//                 }
//                 i+=1;
//             }
//         }
//     }
//     return sum_max;
// };

var maxProfit = function(prices) {
    var sum_max = 0; //和
    var sum = 0;//最大值
    var min = prices[0];//最小值
    for(var i = 1;i < prices.length; i ++){
        if( min >= prices[i]){//后面一位数小的时候
            min = prices[i];
        }else if(min < prices[i]){ //后面数大的时候；
            if (i === prices.length - 1){
                sum_max += prices[i] - min;
            } else{
                if(prices[i] > prices[i + 1]){//在后面一个小的时候，出现峰顶；
                    sum = prices[i] - min; //得出第一个差值。
                    sum_max += sum;//总和
                    min = prices[i+1];//把顶的下一个作为最小数接着走；
                    i+=1;
                }
            }
        }
    }
    return sum_max;
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([6,1,3,2,4,7]));
console.log(maxProfit([1,2]));
console.log(maxProfit([2,1,4,5,2,9,7]));