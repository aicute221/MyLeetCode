/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length<2){
        return false;
    }
    var letter = "";
    var arr = [];
    for(var i = 0;i<(s.length/2);i++){
        letter+=s[i];
        if(s.length % (i+1) !== 0 ){
            continue;
        }
        arr.push(letter);
    }
    console.log(arr);
    for(var j = 0;j<arr.length;j++){
        var kid = arr[j];
        var len = kid.length;
        var exit = -1;
        for(var z = 0;z<s.length;z+=len){
            for(var k = 0;k<len;k++){
                if(kid[k] !== s[z+k]){
                    exit = 0;
                    break;
                }
            }
            if(exit === 0){
                break;
            }
        }
        if(exit === -1){
            return true;
        }
    }
    return false;
};
console.log(repeatedSubstringPattern("abcabcabcabc"));
console.log(repeatedSubstringPattern("abaababaab"));