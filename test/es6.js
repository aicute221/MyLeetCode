var tmp = 123;

function c() {
    var d = c;
    console.log(tmp);
    var tmp = 2;
}
c();