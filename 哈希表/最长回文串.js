/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   //  var map = {};
    //  for(var i = 0,len = s.length;i<len;i++){
    //      var x = s[i];
    //      map[x] ? map[x]++ : map[x]=1;
    //  }
    //  var count = 0;
    //  var odd = false;
    //  for(var key in map){
    //      if(map[key] % 2 === 0){
    //          count += map[key];
    //      }else{
    //          if(odd === false){
    //              count += map[key];
    //              odd = true;
    //          }else{
    //              count += map[key] - 1;
    //          }
    //      }
    //  }
    // return count;

    var map = {};
    for(var i = 0,len = s.length;i<len;i++){
        var x = s[i];
        map[x] ? map[x]++ : map[x]=1;
    }
    var count = 0;
    var odd = false;
    for(var key in map){
        count += map[key];
        if(map[key] % 2 !== 0){
            count--;
            odd = true;
        }
    }
    if(odd === true){
        count+=1;
    }
    return count;
};
console.log(longestPalindrome("abccccdd"));