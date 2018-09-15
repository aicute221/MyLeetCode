/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var arr = ["1","A","B","C","D","E","F","G","H","I","J","K","L","M","N",
        "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    if(n<=26){
        return arr[n];
    }
    var res = [];
    var index1 = parseInt(n/26);
    var index2 = n%26;
    if(index2 === 0){
        index2 = 26;
        index1--;
    }
    res.push(arr[index2]);

    while(index1>26){
        let a = parseInt(index1/26);
        let b = index1%26;
        if(b===0){
            b = 26;
            a--;
        }
        res.unshift(arr[b]);
        index1 = a;
    }
    res.unshift(arr[index1]);
    return res.join("");
};
console.log(convertToTitle(1));
console.log(convertToTitle(26));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(703));
console.log(convertToTitle(1048));
