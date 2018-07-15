/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if( s.length === 0 ){
       return true;
    }
    var arr = [];
    for(var i = 0;i<s.length;i++){
        var ss = s[i].toLowerCase();
        if(ss.match(/[a-z0-9]/i) !== null){
            arr.push(ss);
        }
    }
    var len = arr.length;
    var min_len = parseInt(len/2);
    for(var j = 0;j<min_len;j++){
        if(arr[j] !== arr[len-1]){
            return false;
        }else{
            len--;
        }
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

