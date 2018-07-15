/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var map = [];
    for(var i = 0;i<flowerbed.length;i++){
        if(flowerbed[i] === 1){
           map.push(i);
        }
    }
    if(flowerbed[0] !== 1){
        map.unshift(-2);
    }
    if(flowerbed[flowerbed.length-1] !== 1){
        map.push(flowerbed.length+1);
    }
    var sum = 0;
    for(var i = 0;i<map.length-1;i++){
        var a =map[i+1]-map[i]-1;
        sum += Math.floor((a-1)/2)
    }
    return n<=sum? true:false

    // var sum =  0;
    // var count = 0;
    // if(flowerbed[0] === 0){
    //     count++;
    // }
    // for(var i = 0;i<flowerbed.length;i++){
    //     if(flowerbed[i] === 0){
    //         count++;
    //     }else{
    //         sum += parseInt( (count-1)/2 );
    //         if(sum <0){
    //             sum = 0;
    //         }
    //         count = 0;
    //     }
    // }
    // if(flowerbed[flowerbed.length-1] === 0){
    //     count++;
    // }
    // sum += parseInt( (count-1)/2 );
    // return n<=sum;
};
console.log(canPlaceFlowers([1,0,0,0,1],1));
console.log(canPlaceFlowers([1,0,0,0,1],2));
console.log(canPlaceFlowers([1,0,0,0,1,1,1,0,0],2));
console.log(canPlaceFlowers([0,0,1,0,0],2));
console.log(canPlaceFlowers([0],1));
console.log(canPlaceFlowers([1,1,0,0],1));