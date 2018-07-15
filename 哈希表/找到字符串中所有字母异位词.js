/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    var copy = function(e){
        var c = {};
        for (var k in e){
            c[k] = e[k];
        }
        return c;
    };

    var map = {};
    for(var i = 0,len=p.length;i<len;i++){
        if(map[p[i]] === undefined){
            map[p[i]] = 1;
        }else{
            map[p[i]]++;
        }
    }
    var arr = [];
    for(var j = 0;j<=s.length-len;j++){
        var map2 = copy(map);
        arr.push(j);
        for(var x = j;x<j+len;x++){
            var a = s[x];
            // console.log(x,a,map2);
            if(map2[a] !== undefined){
                map2[a]--;
                if(map2[a]<0){
                    arr.pop();
                    break;
                }
            }else{
                arr.pop();
                break;
            }
        }
    }
    return arr;

};
console.log(findAnagrams("abab","ab"));
console.log(findAnagrams("cbaebabacd","abc"));