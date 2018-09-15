/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var len = s.length;
    var res = [];
    var ss = [];
    var i = 0;
    var kk = k;
    while(i<len){
        if(i<k){
            ss.unshift(s[i]);
            i++;
            continue;
        }
        if(i<k+kk){
            ss.push(s[i]);
            i++;
            continue;
        }
        if(i = k+kk){
            res = res.concat(ss);
            ss = [];
            k = i+kk;
        }
    }
    res = res.concat(ss);
    return res.join("");
};
console.log(reverseStr("abcdefg",2));
console.log(reverseStr("abcdef",3));