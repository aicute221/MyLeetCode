/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // if(s.length === 0){
    //     return -1
    // }
    // var map = {};
    // for(var i = 0;i<s.length;i++){
    //     if(map[s[i]] === undefined){
    //         map[s[i]] = 1;
    //     }else{
    //         if(map[s[i]]===1){
    //             map[s[i]]++;
    //         }
    //     }
    // }
    // var arr = [];
    // for(var key in map){
    //     if(map[key] === 1){
    //         arr.push(key);
    //     }
    // }
    // if(arr.length === 0){
    //     return -1;
    // }
    // var index = Infinity;
    // for(var j = 0;j<arr.length;j++){
    //     index = Math.min(index, s.indexOf(arr[j]));
    // }
    // return index;

    if(s.length === 0){
        return -1
    }
    for(var i = 0;i<s.length;i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));