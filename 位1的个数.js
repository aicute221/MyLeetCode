/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var s = n.toString(2);
    var num = 0;
    for(var i = 0;i<s.length;i++){

        if(s[i] == 1){
            num++;
        }
    }
    return num;
};
console.log(hammingWeight(1));
console.log(hammingWeight(11));
console.log(hammingWeight(128));