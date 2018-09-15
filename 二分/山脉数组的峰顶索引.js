/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    // var map = {start:0, end:A.length-1};
    // while(map.start <= map.end){
    //     var point = parseInt((map.end+map.start)/2);
    //   if(A[point]<A[point+1]){
    //       map.start = point+1;
    //       continue;
    //   }
    //   if(A[point]>A[point+1]){
    //       map.end = point
    //   }
    // }
    for(var i = 0;i<A.length;i++){
       if(A[i]>A[i+1]){
         return i
       }
    }
}