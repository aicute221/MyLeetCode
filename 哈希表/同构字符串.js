/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map = {};
    for(var i = 0;i<s.length;i++){
        if(map[s[i]] === undefined){
            for(var x in map){
                if(map[x] === t[i]){
                    return false
                }
            }
            map[s[i]] = t[i];
        }else{
            if(map[s[i]] !== t[i]){
                return false;
            }
        }

    }
    return true;
};
console.log(isIsomorphic("eggegg",'addaed'));
console.log(isIsomorphic("13",'42'));
console.log(isIsomorphic("ab",'aa'));
console.log(isIsomorphic("ab",'ca'));