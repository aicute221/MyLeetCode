/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
   //  var map = {};
   //  for(var i = 0;i<moves.length;i++){
   //      var letter = moves[i];
   //      if(map[letter]){
   //          map[letter]++;
   //      }else{
   //          map[letter]=1;
   //      }
   //  }
   // return map["R"] === map["L"] && map["U"] === map["D"]

    var arr = [0,0,0,0];
    for(var i = 0;i<moves.length;i++){
        var letter = moves[i];
        if(letter === "L"){
            arr[0]++;
            continue;
        }
        if(letter === "R"){
            arr[1]++;
            continue;
        }
        if(letter === "U"){
            arr[2]++;
            continue;
        }
        if(letter === "D"){
            arr[3]++;
            continue;
        }
    }
    return arr[0]===arr[1] && arr[2]===arr[3];
};
console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));