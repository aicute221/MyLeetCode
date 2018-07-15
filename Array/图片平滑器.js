/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var N = [];
    var len = M.length;
    for(var i = 0; i < len; i++) {
        N[i] = [];
        for(var j = 0; j < M[i].length; j++) {
            var sum = M[i][j];
            var count = 1;
            if (i > 0) {
                sum += M[i-1][j];
                count++;
                if(j>0){
                    sum += M[i-1][j-1];
                    count++;
                }
            }
            if(i<len-1){
                sum += M[i+1][j];
                count++;
                if(j<M[i].length-1){
                    sum+=M[i+1][j+1];
                    count++;
                }
            }
            if (j > 0) {
                sum += M[i][j-1];
                count++;
                if(i<len-1){
                    sum += M[i+1][j-1];
                    count++;
                }
            }
            if(j < M[i].length-1){
                sum += M[i][j+1];
                count++;
                if(i>0){
                    sum += M[i-1][j+1];
                    count++;
                }
            }
            console.log(sum);
            console.log(count);
            N[i][j] = parseInt(sum/count);
            console.log(N[i][j]);
        }
    }
    return N;
};
// console.log(imageSmoother([[1,1,1], [1,0,1], [1,1,1]]));
// console.log(imageSmoother([[1]]));
console.log(imageSmoother([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]));
