/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var arr = [];
    var a_len = a.length;
    var b_len = b.length;
    var add = 0;
    while( a_len>0 || b_len>0 ){
        var num_a = parseInt(a[a_len-1]);
        var num_b = parseInt(b[b_len-1]);
        if(a_len<1){
            num_a = 0;
        }
        if(b_len<1){
            num_b = 0;
        }
        var num = num_a+num_b+add;
        if(num === 0 || num === 1){
            arr.unshift(num);
            add = 0;
        }
        if(num === 2){
            arr.unshift(0);
            add = 1;
        }
        if(num === 3){
            arr.unshift(1);
            add = 1;
        }
        a_len--;
        b_len--;
    }
    if(add === 1){
        arr.unshift(1);
    }
    return arr.join("");
};
console.log(addBinary("11","1"));
console.log(addBinary("1010","1011"));
console.log(addBinary("111","111"));
console.log(addBinary("100","100"));