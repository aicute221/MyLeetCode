/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // function N(start){
    //     this.start = start;
    //     this.count = 1;
    //     this.end = start;
    // }
    // N.prototype.add = function(index){
    //     this.end = index;
    //     this.count ++;
    // };
    // var ns = {};
    // for(var i = 0; i < nums.length; i ++){
    //     if (ns[nums[i]] === undefined){
    //         ns[nums[i]] = new N(i);
    //     } else{
    //         ns[nums[i]].add(i);
    //     }
    // }
    // var min_length = 0, max = 0;
    //
    // for(var key in ns){
    //     if (ns[key].count > max){
    //         max = ns[key].count;
    //         min_length = ns[key].end - ns[key].start + 1;
    //     } else if (ns[key].count == max){
    //         min_length = Math.min(ns[key].end - ns[key].start + 1, min_length);
    //     }
    // }
    // return min_length;

    var map = {};
    for(var i = 0;i<nums.length;i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = {};
            map[nums[i]].counter = 1;
            map[nums[i]].i_first = i;
            map[nums[i]].i_end = i;
        }else{
            map[nums[i]].counter++;
            map[nums[i]].i_end = i;
        }
    }
    var max = 0;
    var max_num = 0;
    for(var key in map){
        if(map[key].counter > max){
            max = map[key].counter;
            max_num = map[key];
        }
        if(map[key].counter === max){
            if(map[key].i_end - map[key].i_first < max_num.i_end - max_num.i_first){
                max_num = map[key];
            }
        }
    }
    return max_num.i_end - max_num.i_first+1;

};
console.log(findShortestSubArray([2,3,1,2,1]));

