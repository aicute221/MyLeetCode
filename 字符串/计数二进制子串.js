/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var len = s.length;
    if(len===1){
        return 0;
    }
    if(s.indexOf("0") === -1 || s.indexOf("1") === -1){
        return 0;
    }
    var a = "01";
    var b = "10";
    var num_a = 0;
    var num_b = 0;
    var i = 0;
    var j = 0;
    while(s.indexOf(a,i) !== -1){
        num_a ++;
        i = s.indexOf(a,i) + 1;
        if(s.indexOf(a,i) === -1){
            a = "0"+a+"1";
            i = 0;
        }
    }

    while(s.indexOf(b,j) !== -1){
        num_b ++;
        j = s.indexOf(b,j) + 1;
        // console.log(num_b,j,b);
        if(s.indexOf(b,j) === -1){
            b = "1"+b+"0";
            j = 0;
        }
    }
    return num_a+num_b;
};
console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));
console.log(countBinarySubstrings("10"));
console.log(countBinarySubstrings("00110"));

