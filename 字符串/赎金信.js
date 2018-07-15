/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = {};
    for(var i = 0;i<magazine.length;i++){
        var x = magazine[i];
        if(map[x] === undefined){
            map[x] = 1;
        }else{
            map[x]++;
        }
    }
    for(var j = 0;j<ransomNote.length;j++){
        var y = ransomNote[j];
        if(map[y] === undefined){
            return false;
        }else{
            map[y]--;
            if(map[y]<0){
                return false;
            }
        }
    }
    return true;
};
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aa", "ab"));