/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var map = {"a":1,"e":1,"i":1,"o":1,"u":1,};
    function plus(word){
        var first = word[0];
        var first1 = first.toLowerCase();
        if(map[first1] !== undefined){
            word+="ma";
        }else{
            word = word.substring(1)+first+"ma";
        }
        return word;
    }
    function plusa(n){
        var s = "";
        for(var i = 0;i<n;i++){
            s+="a";
        }
        return s;
    }
    var res = "";
    var words = S.split(" ");
    for(var i = 0;i<words.length;i++){
        var word = words[i];
        if(i === words.length-1){
            res=res+plus(word)+plusa(i+1);
        }else{
            res= res +plus(word)+plusa(i+1)+" ";
        }
    }
    return res;
};
console.log(toGoatLatin("I speak Goat Latin"));