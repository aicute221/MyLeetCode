/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1){
        return false;
    }
    var map = {"(":")","[":"]","{":"}"};
    var arr = [];
    for(var i = 0;i<s.length;i++){
        var key = s[i];
        if(map[key]){
            arr.push(map[key]);
        }else{
            if(arr.length !== 0){
                var x = arr.pop();
                if(key !== x){
                    return false;
                }
            }else{
                return false;
            }
        }
    }
    return arr.length===0;
};
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("{["));
console.log(isValid("))"));