var a = 4;
console.log("a is " + a);
var b = "hello";
console.log("b is " + b);
var c = 4;
console.log("c is " + c);
var list = [1, 2, 3];
var dynamic;
dynamic = 3;
c = "hello";
var flag = false;
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
// tsc basics.js
// node basics.js
