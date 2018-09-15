/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    // if(a==b){
    //     return -1;
    // }
    // var min,max;
    // if(a.length>b.length){
    //     min = b;
    //     max = a;
    // }else{
    //     min = a;
    //     max = b;
    // }
    // if(max.indexOf(min) !== -1){
    //     return min.length;
    // }else{
    //     return max.length;
    // }
    if(a==b){
        return -1;
    }
    return Math.max(a.length,b.length)

};