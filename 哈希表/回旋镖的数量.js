/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var sum = 0;
    for(var i = 0;i<points.length;i++){
        var map = {};
        var outside = points[i];
        for(var j = 0;j<points.length;j++){
            var inside = points[j];
            var squ = (inside[0]-outside[0])**2 + (inside[1]-outside[1])**2;
            map[squ] === undefined ? map[squ] = 1 : map[squ]++;
        }
        for(var key in map){
            var count = map[key];
            sum += count*(count-1);
        }
    }
    return sum;
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));