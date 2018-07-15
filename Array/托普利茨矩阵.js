/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var a = matrix[0].length;
    var b = matrix.length;
    if(a === 1){
        return true;
    }
    for(var i = 1;i<b;i++){
        for(var j = 1;j<a;j++){
           if(matrix[i][j] !== matrix[i-1][j-1])
           return false;
        }
    }
    return true;
};
console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]));
console.log(isToeplitzMatrix([[1,2],[2,2]]));
console.log(isToeplitzMatrix([[41,45],[81,41],[73,81],[47,73],[76,47],[79,76]]));