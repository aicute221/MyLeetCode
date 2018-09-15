/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var sum = 0;
    if(n<5){
        return 0;
    }
    var start = 5;
    function fun(number){
        var num = 0;
        var left = number%5;
        while(left === 0){
            num++;
            number = number/5;
            left = number%5;
        }
        return num;
    }
    while(start <= n){
        sum+=fun(start);
        start+=5;
    }
    return sum;
};
console.log(trailingZeroes(50));