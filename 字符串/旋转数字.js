/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    var sum = N;
    var i = 1;
    while(i<=N){
        var map = {"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
        var n = i.toString();
        for(var j = 0;j<n.length;j++){
            map[n[j]]++;
        }
        if(map[3]!==0 || map[4]!==0 || map[7]!==0){
             // console.log(map)
            sum--;
            i++;
            continue;
        }
        if(map[0]+map[1]+map[8] === n.length){
            sum--;
            i++;
            continue;
        }
        i++;
    }
    return sum;
};
console.log(rotatedDigits(10));
console.log(rotatedDigits(20));
console.log(rotatedDigits(2000));
