/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // var map = {};
    // var arr = [];
    // for(var i = 0;i<nums1.length;i++){
    //     if(map[nums1[i]] === undefined){
    //         map[nums1[i]] = 1 ;
    //     }
    // }
    // console.log(map);
    // for(var j = 0;j<nums2.length;j++){
    //     if(map[nums2[j]] === 1){
    //         arr.push(nums2[j]);
    //         map[nums2[j]]++;
    //     }
    // }
    // return arr;
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
    for(var i = 0;i<less.length;i++){
        if(map[less[i]] === undefined){
            map[less[i]] = 1 ;
        }
    }
    for(var j = 0;j<more.length;j++){
        if(map[more[j]] === 1){
            arr.push(more[j]);
            map[more[j]]++;
        }
    }
    return arr;
};
console.log(intersection([1],[1,1]));