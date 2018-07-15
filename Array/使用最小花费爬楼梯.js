/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var len = cost.length;
    var sum = [cost[0],cost[1]];
    cost[-2] = 0;
    cost[-1] = 0;
    for(var i = 2;i<len;i++){
        sum[i] = cost[i] + Math.min(sum[i-2],sum[i-1]);
    }
    return Math.min(sum[len-1],sum[len-2]);
};
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([0,0,1,2]));
console.log(minCostClimbingStairs([0,1,1,0]));
console.log(minCostClimbingStairs([0,1,2,2]));
console.log(minCostClimbingStairs([1,2,2,0]));