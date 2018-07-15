/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {};
    while(n !== 1){
        var sum = 0;
        var arr = n.toString().split("");
        arr.forEach(function(x){
            sum += parseInt(x*x);
        });
        if(map[sum] === undefined){
            map[sum] = true;
            n = sum;
        }else{
            return false;
        }
    }
    return true;
};
console.log(isHappy(19));
console.log(isHappy(192));
console.log(isHappy(199));