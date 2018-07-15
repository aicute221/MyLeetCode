/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var map = {};
    for(var i = 0,len_j =J.length;i<len_j;i++){
        var x = J[i];
        map[x] ? "" : map[x] = true;
    }
    var count = 0;
    for(var j = 0,len_s =S.length;j<len_s;j++){
        var y = S[j];
        map[y] ? count++:"";
    }
    return count;
};
console.log(numJewelsInStones("aA","aAAbbbb"));