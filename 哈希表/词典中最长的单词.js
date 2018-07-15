/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    var map = {};
    var max = 0;
    var map2 = {};
    for(var i = 0;i<words.length;i++){
        var word = words[i];
        if(map[word.length] === undefined){
            map[word.length] = [word];
        }else{
            map[word.length].push(word);
        }
        max = Math.max(max,word.length);
        if(map2[word] === undefined){
            map2[word] = true;
        }
    }
    while(max>0){
        var array = map[max];
        if(array){
            array.sort();
        }else{
            max -= 1;
            continue;
        }
        for(var j = 0;j<array.length;j++){
            var len = max;
            var flag = true;
            while(len>1){
                len--;
                if(map2[array[j].substring(0,len)]){
                    continue;
                }else{
                    flag = false;
                    break;
                }
            }
            if(flag){
                return array[j];
            }
        }
        max -= 1;
    }
};
console.log(longestWord(["w","wo","wor","worl", "world"]));
console.log(longestWord(["a", 'banan',"banana", "app", "appl", "ap", "apply", "apple"]));
console.log(longestWord(["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]));
console.log(longestWord(["vsw","vs","zwu","vsx","nc","o","vswus","orv","imf","i","v","zw","vs"]));