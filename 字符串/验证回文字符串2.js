/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var len = s.length;
    var map = {};
    for(var j = 0;j<len;j++){
        if(map[s[j]] === undefined){
            map[s[j]] = 1;
        }else{
            map[s[j]]++;
        }
    }
    var count = 0;
    for(var key in map){
        if(map[key]%2 === 1){
            count++;
        }
    }
    if(count>2){
        return false;
    }
    var num = 0;
    for(var i = 0;i<len;i++){
        if(s[i] === s[len-1]){
            len--;
        }else{
            num++;
            if(num>1){
                return false;
            }
            if(map[s[i]]%2 === 1){
                continue;
            }
            if(map[s[len-1]]%2 ===1){
                len--;
                i--;
            }

        }
    }
    return true;
};
console.log(validPalindrome("abcda"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abbcdbba"));
console.log(validPalindrome("tcaac"));
console.log(validPalindrome("caact"));
console.log(validPalindrome("cbbcc"));
console.log(validPalindrome("tebbem"));