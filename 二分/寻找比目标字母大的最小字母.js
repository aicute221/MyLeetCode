/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var len = letters.length;
    for(var i = 0;i<len;i++){
        if(target < letters[0] || target > letters[len-1]){
            return letters[0];
        }
        if(target === letters[i]){
            while(letters[i+1] === letters[i]){
                i++;
            }
            if(i === len-1){
                return letters[0];
            }else{
                return letters[i+1];
            }
        }
        if(target>letters[i] && target<letters[i+1]){
            return letters[i+1]
        }
    }
};
console.log(nextGreatestLetter(["c", "f", "j"],'a'));
console.log(nextGreatestLetter(["c", "f", "j"],'c'));
console.log(nextGreatestLetter(["c", "f", "j"],'d'));
console.log(nextGreatestLetter(["c", "fc", "j"],'g'));
console.log(nextGreatestLetter(["c", "f", "j"],'j'));
console.log(nextGreatestLetter(["c", "f", "j"],'k'));
console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"],'e'));