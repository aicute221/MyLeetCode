/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var len = s.length;
    if(len===1){
        return 0;
    }
    var count = 0;
    var arr = [];
    // var sum0 = 0;
    // var sum1 = 0;
    // for(var i = 0;i<len;i++){
    //    if(s[i] === "0"){
    //        if(sum1!==0){
    //            arr.push(sum1);
    //            sum1 = 0;
    //        }
    //        sum0++;
    //    }else{
    //        if(sum0!==0){
    //            arr.push(sum0);
    //            sum0 = 0;
    //        }
    //        sum1++;
    //    }
    // }
    // if(sum0!==0){
    //     arr.push(sum0);
    //     sum0 = 0;
    // }
    // if(sum1!==0){
    //     arr.push(sum1);
    //     sum1 = 0;
    // }
    var sum = 1;
    for(var i = 1;i<len;i++){
        if(s[i]!==s[i-1]){
            arr.push(sum);
            sum = 1;
        }else{
            sum++;
        }
    }
    arr.push(sum);
    for(var j = 0;j<arr.length-1;j++){
        count += Math.min(arr[j],arr[j+1]);
    }
    return count;
};
console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));
console.log(countBinarySubstrings("10"));
console.log(countBinarySubstrings("00110"));
console.log(countBinarySubstrings("100111001"));

