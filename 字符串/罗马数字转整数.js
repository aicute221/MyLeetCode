/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // var map = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    // var count = 0;
    // for(var i = 0;i<s.length;i++){
    //     var key = s[i];
    //     var next = s[i+1];
    //     count += map[key];
    //     if(key === "I"){
    //         if(next==="V" || next==="X"){
    //             count-=2;
    //         }
    //     }
    //     if(key === "X"){
    //         if(next==="L" || next==="C"){
    //             count-=20;
    //         }
    //     }
    //     if(key === "C"){
    //         if(next==="D" || next==="M"){
    //             count-=200;
    //         }
    //     }
    // }
    // return count;
    var map = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    var count = map[s[s.length-1]];
    for(var i = 0;i<s.length-1;i++){
        var now = map[s[i]];
        var next = map[s[i+1]];
        if(now>=next){
            count+=now;
        }else{
            count-=now;
        }
    }
    return count;
};
console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));