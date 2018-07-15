/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var arr = [];
    for(var i = 0;i<ops.length;i++){
        if(ops[i] === 'C'){
            arr.pop();
        }else if(ops[i] === '+'){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }else if(ops[i] === 'D'){
            arr.push(arr[arr.length - 1] * 2);
        }else{
            arr.push( parseInt(ops[i]) );
        }
    }
    var sum = 0;
    for(var j = 0;j<arr.length;j++){
        sum+=arr[j];
    }
    return sum;
};
console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));