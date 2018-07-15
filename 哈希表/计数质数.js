/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // if(n<3){
    //     return 0;
    // }
    // var arr = [2];
    // for(var i = 3;i<n;i+=2){
    //     var m = true;
    //     for(var j = 0;j<arr.length;j++){
    //         if(i%arr[j] === 0){
    //             m = false;
    //             break;
    //         }
    //     }
    //     if(m === true){
    //         arr.push(i);
    //     }
    // }
    // return arr.length;

    if(n<3){
        return 0;
    }
    var num = 0;
    for(var i = 3;i<n;i+=2){
        if(i%3 !==0){

        }
    }
};
console.log(countPrimes(2));
console.log(countPrimes(21));
console.log(countPrimes(499979));