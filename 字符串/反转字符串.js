/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    // var arr = s.split("");
    // var len = arr.length;
    // var res = [];
    // for(var i = 0;i<len;i++ ){
    //     res.unshift(arr[i]);
    // }
    // return res.join("");
    var res = "";
    for(var i = s.length-1;i>=0;i--){
        res+=s[i];
    }
    return res;
};
console.log(reverseString("hello"));