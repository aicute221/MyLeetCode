function B(){

}

B.prototype = {
    back:"背",
};

function A(){

}

function extend(o,p){
    for(var prop in p){
        o[prop] = p[prop];
    }
}
var a = new A();
console.log(a.back);

extend(A.prototype,B.prototype);