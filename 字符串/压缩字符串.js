/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var len = chars.length;
    var map = {};
    var next = 0;
    var str = "";
    for(var i = 0;i<len;i++){
        if(map[chars[i]] === undefined){
            next++;
            if(next>1){
                for(var key in map){
                    str += key;
                    if(map[key] > 1){
                        str += map[key];
                    }
                }
                map = {};
                next = 1;
            }
            map[chars[i]] = 1;
        }else{
            map[chars[i]]++;
        }
    }
    for(var key in map){
        str += key;
        if(map[key] > 1){
            str += map[key];
        }
    }
    chars.length = str.length;
    for(var j=0;j<str.length;j++){
        chars[j]=str[j];
    }
    console.log(str,chars);
    return chars.length;
};
console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
console.log(compress(["a"]));
console.log(compress(["a","a","a","b","b","a","a"]));
