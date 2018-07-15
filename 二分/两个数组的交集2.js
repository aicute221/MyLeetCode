/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map = {};
    var arr = [];
    var a = nums1.length;
    var b = nums2.length;
    if(a<b){
        var less = nums1.slice(0);
        var more = nums2.slice(0);
    }else{
        var more = nums1.slice(0);
        var less = nums2.slice(0);
    }

    less.forEach(function(x){
        map[x] ? map[x]++ : map[x]=1;
    });

    more.forEach(function(x){
        if(map[x] !== undefined && map[x]>0){
            arr.push(x);
            map[x]--;
        }
    });
    return arr;
    // for(var i = 0;i<less.length;i++){
    //     if(map[less[i]] === undefined){
    //         map[less[i]] = 1 ;
    //     }else{
    //         map[less[i]]++;
    //     }
    // }
    // for(var j = 0;j<more.length;j++){
    //     if(map[more[j]] !== undefined && map[more[j]]>0){
    //         arr.push(more[j]);
    //         map[more[j]]--;
    //     }
    // }
    // return arr;
};
console.log(intersect([1,2,2,1],[2,2,2]));