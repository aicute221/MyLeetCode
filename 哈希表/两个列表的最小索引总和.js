/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var map = {};
    list1.forEach(function(v,i){
        map[v] = i;
    });
    var min = Infinity;
    var result = [];
    for(var i = 0;i<list2.length;i++){
        var key = list2[i];
        if(map[key] !== undefined){
            if(min > map[key]+i){
                result = [key];
                min = map[key]+i;
            }else if(min === map[key]+i){
                result.push(key);
            }
        }
    }
    return result;
};
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["KFC", "Shogun", "Burger King"]));
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["KFC","Burger King","Tapioca Express","Shogun"]));