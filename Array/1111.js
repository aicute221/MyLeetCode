/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    // if(S.length < 3 ){
    //     return [];
    // }
    // if(S.length ===3){
    //     if(S[0] === S[1] && S[0]===S[2]){
    //         return[[0,2]]
    //     }else{
    //         return [];
    //     }
    // }
    // var num = [];
    // var a = [];
    // var i_0 = null;
    // var i_1 = null;
    // for(var i = 0;i<S.length-2;i++){
    //     if(S[i] === S[i+1]){
    //         if(S[i] === S[i+2]){
    //             if(i_0 === null){
    //                 i_0 = i;
    //                 i_1 = i+2;
    //                 a.push(i_0);
    //             }else{
    //                 i_1++;
    //             }
    //             if(i === S.length-3){
    //                 a.push(i_1);
    //                 num.push(a);
    //             }
    //         }else{
    //             if(i_1 !== null){
    //                 a.push(i_1);
    //                 num.push(a);
    //             }
    //             a = [];
    //             i_0 = null;
    //             i_1 = null;
    //             i++;
    //         }
    //     }
    // }
    // return num;

    var start = 0;
    var count = 1;
    var now = S[0];
    var num = [];

    for(var i = 1,len= S.length;i<len;i++){
        if(S[i] === now){
            count++;
            if(i === len-1 && count>=3){
                num.push([start,len-1])
            }
        }else{
            if(count >=3){
                num.push([start,count+start-1])
            }
            now = S[i];
            count = 1;
            start =i;
        }
    }
    return num;
};
console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abc"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
console.log(largeGroupPositions("aa")); //[]
console.log(largeGroupPositions("aaa"));//[[0,2]]
console.log(largeGroupPositions("pppjjjjjjj"));//[[0,2],[3,9]]