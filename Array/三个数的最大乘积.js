/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var len = nums.length;
    nums.sort(function(x,y){
        return x-y;
    });
    var a = nums[0]*nums[1];
    var b = nums[len-1]*nums[len-2];
    if(nums[0]>0 || nums[len-1]<0){
        return b*nums[len-3];
    }else{
        return Math.max(a*nums[len-1],b*nums[len-3])
    }
};
console.log(maximumProduct([1,2,3]));
console.log(maximumProduct([1,2,3,4]));
console.log(maximumProduct([9,1,5,6,7,2]));
console.log(maximumProduct([722,634,-504,-379,163,-613,-842,-578,750,951,-158,30,-238,-392,-487,-797,-157,-374,999,-5,-521,-879,-858,382,626,803,-347,903,-205,57,-342,186,-736,17,83,726,-960,343,-984,937,-758,-122,577,-595,-544,-559,903,-183,192,825,368,-674,57,-959,884,29,-681,-339,582,969,-95,-455,-275,205,-548,79,258,35,233,203,20,-936,878,-868,-458,-882,867,-664,-892,-687,322,844,-745,447,-909,-586,69,-88,88,445,-553,-666,130,-640,-918,-7,-420,-368,250,-786]));
console.log(maximumProduct([0,0,0]));