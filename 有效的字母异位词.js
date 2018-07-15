/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // var ss = s.split("");
    // var tt = t.split("");
    // ss.sort(function(a,b){
    //     return a<b;
    // });
    // tt.sort(function(a,b){
    //     return a<b;
    // });
    // console.log(ss);
    // console.log(tt);
    // if(ss.length !== tt.length){
    //     return false;
    // }
    // for(var i = 0;i<ss.length;i++){
    //     if(ss[i] !== tt[i]){
    //         return false;
    //     }
    // }
    // return true;


    var ss = {};
    if(s.length !== t.length){
        return false;
    }
    for(var i = 0;i<s.length;i++){
        if(ss[s[i]] !== undefined){
            ss[s[i]]++;
        }else{
            ss[s[i]] = 1;
        }
    }
    for(var j = 0;j<t.length;j++){
        if(ss[t[j]] === undefined){
            return false;
        }else{
            ss[t[j]]--;
            if(ss[t[j]]<0){
                return false;
            }
        }
    }
    return true;
};
console.log(isAnagram("anagram","nagaram"));