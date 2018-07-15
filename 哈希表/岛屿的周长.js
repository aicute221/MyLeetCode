/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var sum = 0;
    for(var i = 0,len = grid.length;i<len;i++){
        for(var j = 0;j<grid[i].length;j++){
            if(grid[i][j] === 1){
                sum+=4;
                if(j<grid[i].length-1){
                    if(grid[i][j+1] === 1){
                        sum-=1;
                    }
                }
                if(i<len-1){
                    if(grid[i+1][j] === 1){
                        sum-=1;
                    }
                }
                if(j>0){
                    if(grid[i][j-1] === 1){
                    sum-=1;
                    }
                }
                if(i>0){
                    if(grid[i-1][j] === 1){
                        sum-=1;
                    }
                }
            }
        }
    }
    return sum;
};
console.log(islandPerimeter([[0,1,0,0], [1,1,1,0], [0,1,0,0], [1,1,0,0]]));