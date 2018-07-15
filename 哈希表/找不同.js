/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var map = {};
    for(var i = 0;i<s.length;i++){
        if(map[s[i]] === undefined){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
    }
    for(var j = 0;j<t.length;j++){
        if(map[t[j]] !== undefined){
            map[t[j]]--;
            if(map[t[j]]<0){
                return t[j];
            }
        }else{
            return t[i];
        }
    }
};
console.log(findTheDifference("abcd","abcde"));
console.log(findTheDifference("abcdaaaaaafacfcfffccffccc","abcdfaaaafaaacccccccffffff"));
