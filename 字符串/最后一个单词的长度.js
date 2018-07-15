/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s === ""){
        return 0
    }
    var ss = s.split(" ");
    var len = ss.length;
    for(var i = len-1;i>=0;i--){
        var word = ss[i];
        if(word !== ""){
            return word.length;
        }
    }
    return 0;
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("HelloWorld"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord(" "));