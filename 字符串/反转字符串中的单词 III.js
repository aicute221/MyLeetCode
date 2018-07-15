/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var ss = s.split(" ");
    var res = "";
    for(var i = 0;i<ss.length;i++){
        var word = ss[i];
        for(var j = word.length-1;j>=0;j--){
            res+=word[j];
        }

        if(i!==ss.length-1){
            res+=" ";
        }
    }
    return res;
};
console.log(reverseWords("Let's take LeetCode contest"));