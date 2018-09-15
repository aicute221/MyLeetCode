/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var alen = A.length;
    var blen = B.length;
    // var index = A.indexOf(B[0]);
    // var part = B.slice(0,alen-index);
    // for(var i = 0;i<blen;i++){
    //     if( A.indexOf(part) === -1){
    //         return -1;
    //     }else{
    //
    //     }
    // }

    var num = Math.ceil(blen/alen);
    var s = "";
    for(var i = 1;i<=num;i++){
        s+=A;
    }
    if(s.indexOf(B) !== -1){
        return num;
    }
    s+=A;
    if(s.indexOf(B) !== -1){
        return num+1;
    }else{
        return -1;
    }
};
console.log(repeatedStringMatch("abcd","cdabcdab"));