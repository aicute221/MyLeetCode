/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var para = paragraph.toLowerCase();
    var arr = para.match(/[a-z]+/g);
    var map = {};
    for(var i = 0;i<arr.length;i++){
        if(map[arr[i]] === undefined){
            map[arr[i]] = 1;
        }else{
            map[arr[i]]++;
        }
    }
    for(var j = 0;j<banned.length;j++){
        if(map[banned[j]] !== undefined){
            map[banned[j]] = 0;
        }
    }
    var max = -Infinity;
    var res;
    for(var key in map){
        if(map[key] > max){
            max = map[key];
            res = key;
        }
    }
    return res;
};
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]));