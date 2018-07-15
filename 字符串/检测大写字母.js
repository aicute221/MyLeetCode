/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // var word_low = word.toLowerCase();
    // var word_up = word.toUpperCase();
    // if(word === word_low ){
    //     return true;
    // }
    // if( word === word_up ){
    //     return true;
    // }
    // var word_mix = "";
    // for(var i = 0;i<word.length;i++){
    //     if(i===0){
    //         word_mix = word[0].toUpperCase();
    //     }else{
    //         word_mix += word[i].toLowerCase();
    //     }
    // }
    // if(word === word_mix){
    //     return true;
    // }
    // return false;

    var len = word.length;
    if(len < 2){
        return true;
    }
    var low = 0;
    var up = 0;
    for(var i = 0;i<len;i++){
        if(word[i]>="a" && word[i]<="z"){
            low++;
        }else{
            up++;
        }
    }
    if(low === 0 || up === 0){
        return true;
    }
    if(up === 1 && word[0].toUpperCase()===word[0]){
        return true;
    }
    return false;
};
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("Flag"));
console.log(detectCapitalUse("FLAG"));