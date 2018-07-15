/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var num = 0;
    for(var i = 0;i<s.length;i++){
        if(s[i] === "A"){
            num++;
            if(num>=2){
               return false;
            }
        }
        if(s[i] === "L" && s[i+1]==="L" && s[i+2]==="L"){
            return false;
        }
    }
    return true;
};
console.log(checkRecord("AA"));