/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var map = {};
    var type = 0;
    for(var i = 0,len=candies.length;i<len;i++){
        var x = candies[i];
        if(map[x]===undefined){
            map[x] = true;
            type++;
        }
    }

    return Math.min(type,len/2);

};
console.log(distributeCandies([1,1,1,1,2,2,2,3,3,3]));