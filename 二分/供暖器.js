/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    var ho_len = houses.length;
    var he_len = heaters.length;
    var max = 0;
    var result = 0;
    houses.sort(function(a,b){return a-b});
    heaters.sort(function(a,b){return a-b});
    if(he_len ===1){
        return Math.max(heaters[0]-1,houses[ho_len-1]-heaters[0])
    }
    if(he_len !==1){
        for(var i = 0;i<he_len-1;i++){
            if(houses.indexOf(heaters[i]) !== -1){

                if(i===0){
                    max = Math.max(max,heaters[0]-houses[0]);
                    result = parseInt(max);
                }

                if( houses.indexOf(heaters[i+1]) !== -1){
                    if(max>heaters[i+1]-heaters[i]){
                        result = parseInt(max);
                    }else{
                        result = parseInt((heaters[i+1]-heaters[i])/2);
                    }
                    if(i === he_len-2) {
                        max = Math.max(result, houses[ho_len - 1] - heaters[i + 1]);
                        result = parseInt(max);
                    }
                }else{
                    if(heaters[i+1]>houses[ho_len-1]){
                        if(houses[ho_len-1]-heaters[i] < heaters[i+1]-houses[ho_len-1]){
                            max = Math.max(max,houses[ho_len-1]-heaters[i]);
                            result = parseInt(max);
                            return result;
                        }else{
                            if(houses[ho_len-2]-heaters[i] > heaters[i+1]-houses[ho_len-1]){
                                max = Math.max(result,houses[ho_len-2]-heaters[i]);
                                result = parseInt(max);
                                return result;
                            }
                        }
                    }else{
                        if(result>heaters[i+1]-heaters[i]){
                            result = parseInt(result);
                        }else{
                            result = parseInt((heaters[i+1]-heaters[i])/2);
                        }
                        if(i === he_len-2){
                            max = Math.max(result,houses[ho_len-1]-heaters[i+1]);
                            result = parseInt(max);
                        }
                    }
                }
            }else{
                for(var j = 0;j<ho_len;j++){
                    if(i===0){
                        if(houses[j]<heaters[i] && heaters[i]<houses[j+1]){
                        max = Math.max(max,heaters[0]-houses[j]);
                        result = parseInt(max);
                        }
                    }

                    if(houses.indexOf(heaters[i+1]) !== -1){
                        if(max>heaters[i+1]-heaters[i]){
                            result = parseInt(max);
                        }else{
                            result = parseInt((heaters[i+1]-heaters[i])/2);
                        }
                        if(i === he_len-2) {
                            max = Math.max(result, houses[ho_len - 1] - heaters[i + 1]);
                            result = parseInt(max);
                        }
                    }else{
                        if(result>heaters[i+1]-heaters[i]){
                            result = parseInt(max);
                        }else{
                            result = parseInt((heaters[i+1]-heaters[i])/2);
                        }
                        if(i === he_len-2){
                            if(houses[j]<heaters[i+1] && heaters[i+1]<houses[j+1]){
                                max = Math.max(result,houses[j]-heaters[i+1]);
                                result = parseInt(max);
                            }
                        }
                    }
                }
            }
        }
    }
    return result;


    // if(he_len ===1){
    //     return Math.max(heaters[0]-1,houses[ho_len-1]-heaters[0])
    // }else{
    //     for(var i = 0;i<he_len-1;i++){
    //         // if(houses.indexOf(heaters[i]) !== -1){
    //         //     if( houses.indexOf(heaters[i+1]) !== -1){
    //         //         max = Math.max(max,heaters[i+1]-heaters[i]);
    //         //     }else{
    //         //         if(heaters[i+1]>houses[ho_len-1]){
    //         //             max = Math.max(max,houses[ho_len-1]-heaters[i]);
    //         //             return max;
    //         //         }else{
    //         //             max = Math.max(max,heaters[i+1]-heaters[i]);
    //         //         }
    //         //     }
    //         // }
    //         if(heaters[i]<houses[ho_len-1]){
    //             if(heaters[i+1]>houses[ho_len-1]){
    //                 max = Math.max(max,houses[ho_len-1]-heaters[i]);
    //                 return max;
    //             }
    //             max = Math.max(max,heaters[i+1]-heaters[i]);
    //
    //             if(houses.indexOf(heaters[i]) === -1){
    //                 for(var j = 0;j<ho_len;j++){
    //                     if(i===0){
    //                         if(houses[j]<heaters[i] && heaters[i]<houses[j+1]){
    //                         max = Math.max(max,heaters[i]-houses[j]);
    //                         }
    //                     }
    //                     if(i===he_len-1){
    //                         if(houses[j]<heaters[i] && heaters[i]<houses[j+1]){
    //                             max = Math.max(max,houses[j]-heaters[i]);
    //                         }
    //                     }
    //                 }
    //                 return max;
    //             }
    //         }
    //     }
    //     return parseInt(max/2);
    // }
 };

console.log(findRadius([1,2,3,4],[2]));
console.log(findRadius([1,2,3],[1,2]));
console.log(findRadius([1,5],[2]));
console.log(findRadius([1,2,3,4],[1,4]));
console.log(findRadius([1,2,3,5,15],[2,30]));
console.log(findRadius([1,2,3,5,15],[2,10]));
console.log(findRadius([1,2,3,5,15],[2,16]));
console.log(findRadius([1,2,3,5,10,15],[2,16]));
console.log(findRadius([1,1,1,1,1,1,999,999,999,999,999],[499,500,501]));