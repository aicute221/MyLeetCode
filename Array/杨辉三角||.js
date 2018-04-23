/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var r_arr = [1,1];
    if(rowIndex === 0){
        return[1]
    }
    if(rowIndex === 1){
        return r_arr;
    }
    if(rowIndex>=2){
        for(var r =2;r<=rowIndex+1;r++){
            var arr=[1];
            for(var i = 1;i<r;i++){
                if(i === r-1 ){
                    arr[i] = 1;
                }else{
                    arr[i] = r_arr[i-1] + r_arr[i];
                }
            }
            r_arr = arr;
        }
    }
    return arr;
};