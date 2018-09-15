/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var arr = n.toString(2).split("");
    var s = arr.reverse().join("");
    var len = 32 - s.length;
    // console.log(s,len);
    for(var i = 0;i<len;i++){
        s+="0";
    }
    console.log(s);
    return parseInt(s,2);

};
console.log(reverseBits(43261596));
