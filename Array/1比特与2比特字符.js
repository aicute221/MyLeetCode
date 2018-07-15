/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    var len = bits.length;
    for(var i = 0;i<len;i++){
        if(bits[i] === 1){
            i++
        }else if(bits[i] === 0){
            if(i === len-1){
                return true;
            }
        }
    }
    return false;
};
console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1, 1,1, 0]));