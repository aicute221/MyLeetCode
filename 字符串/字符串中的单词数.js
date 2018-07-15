/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length===0){
        return 0;
    }
    var ss = s.split(" ");
    console.log(ss);
    var len = ss.length;
    for(var i = 0;i<ss.length;i++){
        if(ss[i]===""){
            len--;
        }
    }
    return len;
};
console.log(countSegments("Hello, my name is John"));
console.log(countSegments("                "));