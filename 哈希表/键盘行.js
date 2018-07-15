/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var line1 = {'q':true,'w':true,'e':true,'r':true,'t':true,'y':true,'u':true,'i':true,'o':true,'p':true};
    var line2 = {'a':true,'s':true,'d':true,'f':true,'g':true,'h':true,'j':true,'k':true,'l':true};
    var line3 = {'z':true,'x':true,'c':true,'v':true,'b':true,'n':true,'m':true};
    var arr = [];
    for(var i = 0;i<words.length;i++){
        arr.push(words[i]);
        var word = words[i].toLowerCase();
        for(var j = 0;j<word.length;j++){
            var key = word[j];
            if(line1[word[0]]){
                if(line1[key] === undefined){
                    arr.pop();
                    break;
                }
            }
            if(line2[word[0]]){
                if(line2[key] === undefined){
                    arr.pop();
                    break;
                }
            }
            if(line3[word[0]]){
                if(line3[key] === undefined){
                    arr.pop();
                    break;
                }
            }
        }
    }
    return arr;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));