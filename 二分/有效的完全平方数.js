/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // if(num === 1 ||num === 0){
    //     return true;
    // }
    // var end = parseInt(num/2);
    // while( num !== end*end){
    //     if(num < end*end){
    //         end--;
    //         if( num === end*end){
    //             return true;
    //         }
    //     }else{
    //         return false;
    //     }
    // }
    // if(num === end*end){
    //     return true;
    // }

    var start = 0;
    var end = num;
    var center = parseInt((start+end)/2);
    while(start<=end){
        if(center*center > num){
            end--;
        }else if(center*center < num){
            start++;
        }else if(center*center === num){
            return true;
        }
    }
};
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));