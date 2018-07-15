/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // var res = "";
    // var arr = [];
    // var map = {"a":1,"e":1,"i":1,"o":1,"u":1};
    // for(var i = 0;i<s.length;i++){
    //    var si = s[i].toLowerCase();
    //    if(map[si] === 1){
    //        arr.push(s[i]);
    //    }
    // }
    // for(var j = 0;j<s.length;j++){
    //     var sj = s[j].toLowerCase();
    //     if(map[sj] === 1){
    //         res+= arr.pop();
    //     }else{
    //         res+=s[j];
    //     }
    // }
    // return res;
    var res = "";
    var arr = [];
    for(var i = 0;i<s.length;i++){
        var si = s[i].toLowerCase();
        if(si==="a" || si==="e" || si==="i" || si==="o" || si==="u"){
            arr.push(s[i]);
        }
    }
    for(var j = 0;j<s.length;j++){
        var sj = s[j].toLowerCase();
        if(sj==="a" || sj==="e" || sj==="i" || sj==="o" || sj==="u"){
            res+= arr.pop();
        }else{
            res+=s[j];
        }
    }
    return res;
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));