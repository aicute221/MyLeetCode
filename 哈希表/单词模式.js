/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var map = {};
    var s = str.split(" ");
    if(pattern.length !== s.length){
        return false;
    }
    for(var i = 0;i<pattern.length;i++){
        if(map[pattern[i]] === undefined){
            for(var key in map){
                if(map[key] === s[i]){
                    return false;
                }
            }
            map[pattern[i]] = s[i];
        }else{
            if(map[pattern[i]] !== s[i]){
                return false;
            }
        }
    }
    return true;
};
console.log(wordPattern("abba","dog cat cat dog"));
console.log(wordPattern("aaaa","dog cat cat dog"));
console.log(wordPattern("abba","dog dog dog dog"));