/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    var len = A.length;
    var lenB = B.length;
    if(len !== lenB){
        return false;
    }
    var diff = 0;
    var common = false;
    var a,b;
    for(var i = 0;i<len;i++){
        if(A[i] === B[i]){
            if(common === false){
                if(A.lastIndexOf(A[i]) !== i){
                    common = true;
                }
            }
        }else{
            diff++;
            if(diff === 1){
                a = A[i];
                b = B[i];
                continue;
            }
            if(diff === 2){
                if(A[i] === b && B[i] === a){
                    continue;
                }else{
                    return false;
                }
            }
            if(diff>2){
                return false;
            }
        }
    }
    if(diff === 2){
        return true;
    }
    return common;
};
console.log(buddyStrings("ab","ba"));
console.log(buddyStrings("ab","ab"));
console.log(buddyStrings("aaabc","aaacb"));
console.log(buddyStrings("","aa"));
console.log(buddyStrings("aa","aa"));
console.log(buddyStrings("abab","abab"));