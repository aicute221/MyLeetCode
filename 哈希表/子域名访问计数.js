/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var results = [];
    var map = {};
    for(var i = 0;i<cpdomains.length;i++){
        var name1 = "";
        var name2 = "";
        var cpdomain = cpdomains[i];
        var num = cpdomain.split(" ")[0];
        var names = cpdomain.split(" ")[1];
        if(map[names] === undefined){
            map[names] = parseInt(num);
        }else{
            map[names] += parseInt(num);
        }
        var name = names.split(".");
        var len = name.length;
        name1 = name[len-1]+"";
        if(map[name1]=== undefined){
            map[name1] = parseInt(num);
        }else{
            map[name1] += parseInt(num);
        }
        if(len === 3){
            name2 = name[len-2]+"."+name1;
            if(map[name2]=== undefined){
                map[name2] = parseInt(num);
            }else{
                map[name2] += parseInt(num);
            }
        }
        // console.log(names);
        // console.log(name1);
        // console.log(name2);
        // console.log(num);
        // console.log(map);
    }
    for(var key in map){
        var count = map[key];
        results.push(count+" "+key)
    }
    return results;
};
// console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org","900 google.com"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org", "1 com"]));