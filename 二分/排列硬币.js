/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n===0){
        return 0;
    }
    var sum = 0;
    for(var i = 1;i<=n;i++){
        sum+=i;
        if(sum>n){
            return i-1;
        }
        if(sum===n){
            return i
        }
    }
};
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(2));
console.log(arrangeCoins(1));