/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var max = 0;
    var area = function(i,j){
        if(i<0 || j<0 ||i>=grid.length||j>=grid[0].length){
            return 0
        }
        if(grid[i][j] === 0){
            return 0;
        }
        grid[i][j] = 0;
        return 1+area(i-1,j)+area(i+1,j)+area(i,j-1)+area(i,j+1);
    };
    for(var i = 0;i<grid.length;i++){
        for(var j = 0;j<grid[i].length;j++){
           var num = area(i,j);
           max = Math.max(max,num);
        }
    }
    return max;
};
console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]));